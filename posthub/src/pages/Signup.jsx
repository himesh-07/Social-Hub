import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const payload = { name, email, password };
      const res = await API.post("/auth/signup", payload);
      console.log(res?.data || res);
      alert("Signup Successful!");
    } catch (err) {
      console.error(err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow-lg border-0 p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4 fw-bold">Create Account</h2>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary btn-lg w-100 fw-bold mb-3"
          onClick={handleSignup}
          disabled={!name.trim() || !email.trim() || !password.trim()}
        >
          Sign Up
        </button>

        <div className="text-center text-muted">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-decoration-none fw-bold"
          >
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
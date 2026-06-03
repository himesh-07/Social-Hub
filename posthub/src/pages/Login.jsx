import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      
      
      <div className="card shadow-lg border-0 p-4" style={{ width: "100%", maxWidth: "400px" }}>
        
        <h2 className="text-center mb-4 fw-bold text-dark">Login</h2>

        
        <div className="mb-3">
          <label className="form-label text-muted fw-semibold">Email Address</label>
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        
        <div className="mb-4">
          <label className="form-label text-muted fw-semibold">Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        
        <button 
          className="btn btn-primary btn-lg w-100 fw-bold" 
          onClick={handleLogin}
        
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;
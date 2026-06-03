

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  d-block  bg-primary shadow-sm ">
      <div className="container-fluid ">
   
        <Link className="navbar-brand" to="/">
           
          <h2 className="mb-0 text-white font-monospace ">SocialHub</h2>
        </Link>

  
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
             
          </span>
        </button>

     
        <div className="collapse navbar-collapse " id="navbarNav">
         
          <ul className="navbar-nav ms-auto">
            <li className="nav-item text-white">
              <Link className="nav-link text-white font-monospace fs-4" to="/">Feed</Link>
            </li>
            <li className="nav-item text-white">
              <Link className="nav-link text-white font-monospace fs-4" to="/login">Login</Link>
            </li>
            <li className="nav-item text-white">
              <Link className="nav-link text-white rounded font-monospace fs-4" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
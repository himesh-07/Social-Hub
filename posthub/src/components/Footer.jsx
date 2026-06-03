function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">

          
          <div className="col-md-4 mb-3">
            <h4 className="fw-bold">SocialHub</h4>
            <p>
              Connect, share, and engage with people around the world.
            </p>
          </div>

          
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/login" className="text-white text-decoration-none">Login</a></li>
              <li><a href="/signup" className="text-white text-decoration-none">Signup</a></li>
            </ul>
          </div>

     
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: support@socialhub.com</p>
            <p>Phone: +91 9652547810</p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p className="mb-0">
            © 2026 SocialHub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
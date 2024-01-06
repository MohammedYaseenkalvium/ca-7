import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
        {/* linking it to content page */}
       
        <h1 className='books'>KBooks</h1>
      </Link>
      <Link className='register' to="/registerForm" style={{ textDecoration: "none" }}>
        {/* linking it to register page */}
        <button className='register'>Register</button>
      </Link>
    </div>
  );
}

export default Navbar;

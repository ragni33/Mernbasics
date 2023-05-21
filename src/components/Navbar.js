import React from 'react'
import '..//index'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';






 function Navbar() {
   return (

    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand fs-1" to="#">FoodApp</Link>
   
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

  </nav>
  </div>

   )
}

export default Navbar; 
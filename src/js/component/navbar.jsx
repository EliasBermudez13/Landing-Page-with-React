import React from "react";



const   Navbar = () => {
	return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-light mx-5" href="#">Start Boostrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse text-light justify-content-end mx-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white-50" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
  );
};



export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';



const navbarInstance = (
  
 <nav className="navbar navbar-expand-lg navbar-dark bg-puce" id="mainNavbar">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="link nav-link navbar-brand">Dashboard </Link><span className="sr-only">(current)</span>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Settings
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/register" className="dropdownLink dropdown-item">Register a new family</Link>
          <Link to="/needs" className="dropdownLink dropdown-item">View All Needs</Link>
          <Link to="/needs/unmet" className="dropdownLink dropdown-item">View Unmet Needs</Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
);

class NavbarCustom extends React.Component {
  render() {
    return navbarInstance;
  }
} 

export default NavbarCustom
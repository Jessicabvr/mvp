import React from 'react';
//import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const navbarInstance = (
 <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Settings
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Add an admin</a>
          <a className="dropdown-item" href="#">Profile</a>
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
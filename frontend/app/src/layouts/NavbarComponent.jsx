import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Navbar, 
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'; 

function NavbarComponent(){
  return (
    <Navbar
        color="dark"
        dark
    >
      <NavbarBrand to="/">Tareas</NavbarBrand>
      <Nav>
        <NavItem> 
          <NavLink>
            <Link to="/">login</Link>
          </NavLink>
        </NavItem>
        <NavItem> 
          <NavLink>
            <Link to="/signin">Sign in</Link>
          </NavLink>
        </NavItem>
        <NavItem> 
          <NavLink>
            <Link to="/task">Task</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavbarComponent;
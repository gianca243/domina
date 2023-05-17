import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Navbar, 
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'; 
import { useSelector } from "react-redux"

function NavbarComponent(){
  const user = useSelector((state)=> state.user)
  return (
    <Navbar
        color="dark"
        dark
    >
      <NavbarBrand to="/">Tareas</NavbarBrand>
      <Nav>
        {
          !user.auth?
          <>
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
          </>
        :
          <NavItem> 
            <NavLink>
              <Link to="/task">Task</Link>
            </NavLink>
          </NavItem>
        }
      </Nav>
    </Navbar>
  )
}

export default NavbarComponent;
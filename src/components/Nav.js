import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
      
        <ul className="ul">
          <li className="li">
            <NavLink className="nav-items" to="/home">Home</NavLink>
          </li>

          <li>
            <NavLink className="nav-items"  to="/product" activeClassName="active-class">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-items"  to="/user">Users</NavLink>
          </li>

          <li>
            <NavLink  className="nav-items"  to="/contact">Contact</NavLink>
          </li>
          </ul>
       
          <div >
            {user && user.email}
            <br />
            <button onClick={handleLogOut}>Logout</button>
          </div>  
       
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;

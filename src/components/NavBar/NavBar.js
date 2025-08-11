import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../css/NavBar.module.css';

function NavBar() {
  const changeActivelink = ({isActive}) => {
    return{
      fontWeight: isActive ? 'bold' : '',
      color: isActive ? '#0dcaf0' : 'white'
    }
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className={classes.Navbrand}>
          <h2 className="m-0 text-info">ShoesStore</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center" style={{ gap: '1.5rem' }}>
            <NavLink to="/" className={classes.Navlink} style={changeActivelink}>
              Home
            </NavLink>

            <NavDropdown title="Categories" id="categories-dropdown" className={classes.NavDropdown}>
              <NavDropdown.Item as={NavLink} to="/categories/men">Men</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/women">Women</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/kids">Kids</NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/about" className={classes.Navlink} style={changeActivelink}>
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

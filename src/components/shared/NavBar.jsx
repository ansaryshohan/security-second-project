import React, { Component } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          expand="lg"
          className="bg-transparent  position-fixed w-100 navbar-section"
        >
          <Container className="d-flex">
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/" className="d-inline-block">
                {" "}
                <img src={logo} alt="" className="w-75" />
              </Link>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="middle-nav me-auto ms-5 my-2 my-lg-0 d-flex flex-column flex-md-row align-items-center gap-3"
                navbarScroll
              >
                <Link to="/home" >Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
              </Nav>
              <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                {" "}
                <div><Button variant="">Login</Button></div>
                <div> <Button variant="danger">Search</Button></div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

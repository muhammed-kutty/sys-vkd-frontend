import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  const handleLogut = () => {
    dispatch(logout())
    navigate('/login')
  };
  return (
    <Navbar expand="lg" className="navbar-light bg-light">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="https://sysonline.in/assets/metro/assets/media/logos/logo-letter.png"
            alt="SYS"
            style={{ width: "70px" }}
          />
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className=" navtoogle">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" aria-current="page">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/categories">
                  Categories
                </Nav.Link>
                <Nav.Link  onClick={handleLogut}>
                  Logout
                </Nav.Link>
              </>
            ):(

            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            )
        }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

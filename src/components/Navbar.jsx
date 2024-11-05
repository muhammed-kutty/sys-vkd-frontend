import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";

const CustomNavbar = () => {
  const [navExpand, setnavExpand] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  const handleLogut = () => {
    dispatch(logout())
    navigate('/login')
  };


  const handleLinkClick = () => {
    setnavExpand(false); // Close the navbar
  };

  return (
    <Navbar expand="lg" expanded={navExpand} className="navbar-light bg-light">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="https://sysonline.in/assets/metro/assets/media/logos/logo-letter.png"
            alt="SYS"
            style={{ width: "70px" }}
          />
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav"
         onClick={() => setnavExpand(!navExpand)} 
          />
        <Navbar.Collapse id="navbar-nav" className=" navtoogle">
          <Nav className="ms-auto">
            <Nav.Link as={Link} onClick={handleLinkClick} to="/" aria-current="page">
              Home
            </Nav.Link>
            <Nav.Link as={Link} onClick={handleLinkClick} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>
              Contact
            </Nav.Link>
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/categories" onClick={handleLinkClick}>
                  Categories
                </Nav.Link>
                <Nav.Link  onClick={()=>{
                  handleLogut
                  handleLinkClick
                }}
                  >
                  Logout
                </Nav.Link>
              </>
            ):(

            <Nav.Link as={Link} to="/login" onClick={handleLinkClick}>
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

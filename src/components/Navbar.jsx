import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";
import { IMAGES } from "../Constents/Images";

import {
  BsHouseDoor,
  BsInfoCircle,
  BsEnvelope,
  BsBoxArrowInRight,
  BsBoxArrowRight,
  BsGrid,
} from "react-icons/bs";

const CustomNavbar = () => {
  const [navExpand, setnavExpand] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const websiteUrl = window.location.href;

  const handleShare = () => {
    // Open a new popup window with share options
    const shareWindow = window.open("", "Share", "width=600,height=400");

    // Write the HTML content for the share popup
    shareWindow.document.write(`
      <html>
        <head>
          <title>Share this Page</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background-color: #f4f4f9;
              text-align: center;
              color: #333;
            }
            h2 {
              color: #555;
            }
            ul {
              list-style-type: none;
              padding: 0;
              margin: 20px 0;
            }
            ul li {
              margin: 10px 0;
            }
            ul li a {
              display: flex;
              align-items: center;
              text-decoration: none;
              color: #333;
              padding: 10px 15px;
              border-radius: 8px;
              transition: background-color 0.3s ease;
            }
            ul li a:hover {
              background-color: #eaeaea;
            }
            .bi {
              font-size: 1.2em;
              margin-right: 10px;
            }
            .whatsapp { color: #25D366; }
            .facebook { color: #3b5998; }
            .twitter { color: #1DA1F2; }
            .email { color: #555; }
            button {
              margin-top: 20px;
              padding: 8px 16px;
              background-color: #333;
              color: #fff;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            button:hover {
              background-color: #555;
            }
          </style>
        </head>
        <body>
          <h2>Share this page</h2>
          <ul>
            <li><a href="https://wa.me/?text=${encodeURIComponent(
              websiteUrl
            )}" target="_blank"><i class="bi bi-whatsapp whatsapp"></i> WhatsApp</a></li>
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              websiteUrl
            )}" target="_blank"><i class="bi bi-facebook facebook"></i> Facebook</a></li>
            <li><a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(
              websiteUrl
            )}" target="_blank"><i class="bi bi-twitter twitter"></i> Twitter</a></li>
            <li><a href="mailto:?subject=Check%20this%20out&body=${encodeURIComponent(
              websiteUrl
            )}" target="_blank"><i class="bi bi-envelope email"></i> Email</a></li>
          </ul>
          <button onclick="window.close()">Close</button>
        </body>
      </html>
    `);

    // Close the popup after 10 seconds
    setTimeout(() => {
      if (!shareWindow.closed) {
        shareWindow.close();
      }
    }, 10000);
  };

  const handleLogut = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleLinkClick = () => {
    setnavExpand(false); // Close the navbar
  };

  return (
    <Navbar expand="lg" expanded={navExpand} className="navbar-light bg-light">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src={IMAGES.LOGO}
            alt="SYS"
            style={{
              width: "50px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Link>
        {
          !navExpand ? 
          <div>
<Navbar.Toggle
        aria-controls="navbar-nav"
        onClick={() => setnavExpand(true)}
        />
          </div>:
          <div onClick={()=>setnavExpand(false)} className="border rounded  " style={{padding:"5px 25px 5px 25px", fontWeight:"bolder"}}>
            <span >X</span>
          </div> 
        }
        
        <Navbar.Collapse id="navbar-nav" className={"navtoogle"}>
          <Nav className="ms-auto gap-2 pt-4 pb-4">
            <Nav.Link
              as={Link}
              onClick={handleShare}
              aria-current="page"
            >
              <i className="bi bi-share"></i> {/* Bootstrap share icon */}
              Share
            </Nav.Link>
            {/* <Nav.Link as={NavLink} onClick={handleLinkClick} to="/" aria-current="page" className={({isActive})=>  `${isActive ? 'active_Link ' : ''}`}> */}
            <Nav.Link
              as={NavLink}
              onClick={handleLinkClick}
              to="/"
              aria-current="page"
            >
              <BsHouseDoor className="me-2" />
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} onClick={handleLinkClick} to="/about">
              <BsInfoCircle className="me-2" />
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleLinkClick}>
              <BsEnvelope className="me-2" />
              Contact
            </Nav.Link>
            {isAuthenticated ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/categories"
                  onClick={handleLinkClick}
                >
                  <BsGrid className="me-2" />
                  Categories
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    handleLogut();
                    handleLinkClick();
                  }}
                >
                  <BsBoxArrowRight className="me-2" />
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={NavLink} to="/login" onClick={handleLinkClick}>
                <BsBoxArrowInRight className="me-2" />
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

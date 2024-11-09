import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";
import { IMAGES } from "../Constents/Images";

const CustomNavbar = () => {
  const [navExpand, setnavExpand] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const websiteUrl = window.location.href;


  const handleShare = () => {
    // Open a new popup window with share options
    const shareWindow = window.open(
      '', // Blank URL, as we will dynamically populate the content
      'Share',
      'width=600,height=400'
    );

    // Write the HTML content for the share popup
    shareWindow.document.write(`
      <html>
        <head>
          <title>Share this Page</title>
        </head>
        <body>
          <h2>Share this page</h2>
          <ul style="list-style-type: none; padding: 0;">
            <li><a href="https://wa.me/?text=${encodeURIComponent(websiteUrl)}" target="_blank"><i class="bi bi-whatsapp"></i> WhatsApp</a></li>
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}" target="_blank"><i class="bi bi-facebook"></i> Facebook</a></li>
            <li><a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(websiteUrl)}" target="_blank"><i class="bi bi-twitter"></i> Twitter</a></li>
            <li><a href="mailto:?subject=Check%20this%20out&body=${encodeURIComponent(websiteUrl)}" target="_blank"><i class="bi bi-envelope"></i> Email</a></li>
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
            src={IMAGES.LOGO}
            alt="SYS"
            style={{ width: "50px" ,borderRadius:"50px", display:"flex", alignItems:"center", justifyContent:"center" }}
          />
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav"
         onClick={() => setnavExpand(!navExpand)} 
          />
        <Navbar.Collapse id="navbar-nav" className=" navtoogle">
          <Nav className="ms-auto">
            <Nav.Link as={Link} onClick={handleShare} to="/" aria-current="page">
        
      <i className="bi bi-share"></i> {/* Bootstrap share icon */}
      Share
   
            </Nav.Link>
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
                  handleLogut()
                  handleLinkClick()
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

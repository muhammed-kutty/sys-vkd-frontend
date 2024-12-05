

import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import social icons
import { IoMailOutline } from 'react-icons/io5'; // Mail icon
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className="text-light h-100"
      style={{
        background: "linear-gradient(to top, #000000, #1a1a1a, #333333)",
         padding:"100px 100px 50px 100px"
      }}
    >
      <Container>
        {/* Footer Content */}
        <Row className="mb-5">
          {/* Column 1: Address */}
          <Col xs={12} md={4} className="mb-4">
            <h5 className="fw-bolder fs-3">SYS Valakkuda</h5>
            <div style={{ fontWeight: "300" }}>
              Valakkuda Unit <br />
              Kunnamangalam Circle <br />
              Vengara Zone <br />
              Malappuram West <br />
            </div>
          </Col>

          {/* Column 2: Quick Links */}
          <Col xs={12} md={4} className="mb-4">
            <h5 className="fw-bolder fs-3">Quick Links</h5>
            <div>
              <p>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </p>
            </div>
          </Col>

          {/* Column 3: Social Media */}
          <Col xs={12} md={4} className="mb-4">
            <h5 className="fw-bolder fs-3">Social Media</h5>
            <Nav className="d-flex justify-content-start gap-3">
              <Nav.Link
                href="https://www.youtube.com/@valakkuda_unit"
                target="_blank"
                className="text-light p-0"
              >
                <FaYoutube size={30} />
              </Nav.Link>
              <Nav.Link
                href="mailto:valakkudaunit@gmail.com"
                target="_blank"
                className="text-light p-0"
              >
                <IoMailOutline size={30} />
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/valakkuda_unit"
                target="_blank"
                className="text-light p-0"
              >
                <FaInstagram size={30} />
              </Nav.Link>
              <Nav.Link
                href="https://wa.me/9526137176?text=Hello%20there!"
                target="_blank"
                className="text-light p-0"
              >
                <FaWhatsapp size={30} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row>
          <Col className="text-center">
            <small>
              &copy; 2024{" "}
              <strong style={{ fontFamily: "MyCustomFont, sans-serif" }}>
                SYS Valakkuda Unit
              </strong>
              . All Rights Reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className='bg-light mt-5 d-flex flex-column align-items-center justify-content-around'>
//         <div className='text-center' >
//             <span><small style={{fontWeight:"initial"}}>2024 © </small> <strong> SYS Valakkuda Unit </strong></span>
//         </div>
//         <div>
//         <span>Contact Us</span>
//         </div>
//     </footer>
//   )
// }

// export default Footer

import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaWhatsapp, FaGithub ,FaInstagram} from 'react-icons/fa'; // Import social icons

const Footer = () => {
  return (
    <footer className=" text-dark py-4 h-50" style={{backgroundColor:"#e1f0df" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5 className='fw-bolder fs-3 footer_text'>SYS Valakkuda</h5>
            {/* <p>Your company description goes here.</p> */}
          </Col>

          <Col md={6} className="d-flex justify-content-end align-items-center">
            <Nav className="ml-auto">
              <Nav.Link href="https://www.facebook.com" target="_blank" className="text-light">
                <FaFacebook size={30} color='black'/>
              </Nav.Link>
              <Nav.Link href="https://www.twitter.com" target="_blank" className="text-light">
                <FaTwitter size={30} color='black' />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com" target="_blank" className="text-light">
                <FaInstagram size={30} color='black' />
              </Nav.Link>
              <Nav.Link href="https://wa.me/9526137176?text=Hello%20there!" target="_blank" className="text-light">
                <FaWhatsapp size={30} color='black' />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; 2024 <strong style={{fontFamily:"MyCustomFont, sans-serif "}}>SYS Valakkuda Unit </strong>. All Rights Reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

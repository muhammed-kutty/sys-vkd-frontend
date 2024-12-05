

import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaWhatsapp ,FaInstagram, FaYoutube ,} from 'react-icons/fa'; // Import social icons
import { IoMailOutline } from 'react-icons/io5';  // Mail icon
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <footer className=" text-light  h-100" style={{  background: "linear-gradient(to top, #000000, #1a1a1a, #333333)", padding:"100px 100px 50px 100px",backgroundColor:"#e1f0df" }}>
      <Container>
        <Row className=' mb-5 d-flex justify-content-between'>
          <Col md={6} style={{width:"25%"}}>
          <div>
            <h5 className='fw-bolder fs-3 footer_text' >SYS Valakkuda</h5>

          </div>

          <div style={{fontWeight:"300", paddingLeft:"20px"}}>
            Valakkuda Unit <br />
            Kunnamangalam Circle <br />
            Vengara Zone <br />
            Malappuram West <br />
          </div>

          </Col>
          <Col md={6} style={{width:"25%"}}>
            <div>
            <h5 className='fw-bolder fs-3 footer_text' >Quick Links</h5>
            </div>
            <div className='px-2'>
             <p> <Link to='/contact'>Contact</Link></p>
             <p>  <Link to='/about'>About</Link> </p>
            </div>
    </Col>

            <Col md={6} style={{width:"25%"}}>
            <div>
            <h5 className='fw-bolder fs-3 footer_text' >Social Media</h5>
            </div>
            <Nav className="ml-auto">
              <Nav.Link href="https://www.youtube.com/@valakkuda_unit" target="_blank" className="text-light">
                <FaYoutube size={30} color='white'/>
              </Nav.Link>
              <Nav.Link href="mailto:valakkudaunit@gmail.com" target="_blank" className="text-light">
                <IoMailOutline size={30} color='white' />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/valakkuda_unit?igsh=MWVodHphZ3FtdWh5cQ%3D%3D" target="_blank" className="text-light">
                <FaInstagram size={30} color='white' />
              </Nav.Link>
              <Nav.Link href="https://wa.me/9526137176?text=Hello%20there!" target="_blank" className="text-light">
                <FaWhatsapp size={30} color='white' />
              </Nav.Link>
            </Nav>
          </Col>


      
          </Row>
          <Row className="" style={{marginTop:"140px"}}>
          <Col className="text-center">
            <small>&copy; 2024 <strong style={{fontFamily:"MyCustomFont, sans-serif "}}>SYS Valakkuda Unit </strong>. All Rights Reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

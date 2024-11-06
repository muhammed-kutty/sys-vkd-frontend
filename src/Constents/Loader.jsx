import React from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';

const Loader = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Spinner
            animation="border"
            variant='primary'
          />
          <span className='ms-2 fw-bolder fs-3 '>Loading...</span>
        </Container>
      ); 

};

export default Loader

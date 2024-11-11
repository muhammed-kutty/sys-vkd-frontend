import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {

    const navigate = useNavigate()

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
          <Row className="text-center">
            <Col>
              <h1 className="display-1 text-danger mb-4">Oops! Page Not Found</h1>
              <h4 className="text-muted mb-4">404 - Page Not Found</h4>
              <Button variant="primary" onClick={()=>navigate('/')} className="mt-4">
                Go Back Home
              </Button>
            </Col>
          </Row>
        </Container>
      );
}

export default Notfound

import React from 'react';
import { Link } from 'react-router-dom';
import { Card as BootstrapCard, Row, Col, Container } from 'react-bootstrap';

const Card = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Row className="g-4">
        {data?.map((item) => (
          <Col key={item.id} md={6} lg={3}>
            <Link to={`/user-details/${item.id}`} style={{ textDecoration: 'none' }}>
              <BootstrapCard className="text-center h-100 d-flex align-items-center">
                <BootstrapCard.Img 
                  variant="top" 
                  src={item.img} 
                  style={{ width: "100px", marginTop: "10px", }} 
                  alt="Item Icon" 
                />
                <BootstrapCard.Body className="d-flex align-items-end justify-content-center">
                  <BootstrapCard.Title className="fw-bold" style={{ fontSize: "24px" }}>
                    {item.name}
                  </BootstrapCard.Title>
                </BootstrapCard.Body>
              </BootstrapCard>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card;

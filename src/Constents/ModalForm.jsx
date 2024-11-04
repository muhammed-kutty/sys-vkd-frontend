import React, { useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ModalForm = ({isSubmting ,FormShown, setFormShown,handlechange , handlesubmit ,formFiels ,formData , mode }) => {
  // const category = useSelector(state => state.category.data)
  // console.log("vcateeeeeeeeeee",category)

  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone_number: '',
  //   categorie_ID: '',
  // });

  // Toggle modal visibility
  const handleClose = () => setFormShown(false);

  // Handle form input change
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form data submitted:', formData);
  //   handleClose(); // Close modal after submission
  // };

  return (
    <Container>
      <Modal show={FormShown} onHide={handleClose} style={{marginTop:"120px"}}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesubmit}>
            {
              formFiels && formFiels.map((item)=>(

                <Form.Group className="mb-3" controlId="formName">
              <Form.Label>{item.label}</Form.Label>
              <Form.Control
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                value={formData.name}
                onChange={handlechange}
                />
            </Form.Group>
              ))
  }
{/* 
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your email"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </Form.Group> */}


            <Button variant="primary" type="submit" disabled={isSubmting}>
             {isSubmting ? (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Loading...
        </>
      ) : (
        mode === "add"?
        'Add Category' :
        "Update Category"
      )} 
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ModalForm;

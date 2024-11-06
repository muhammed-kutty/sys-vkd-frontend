

import React from "react";
import { Table, Button, Row, Col } from "react-bootstrap";

const ComanTable = ({
  columns,
  data,
  onEdit,
  onDelete,
  onCall,
  name,
  loading,
  isAuth
}) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
        </tr>
      </thead>

      <tbody className="fw-bolder">
        {data?.map((item, index) => (
          <tr key={item.categorieID}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            {name === 'user' && <td>{item.phone}</td>}
            <td>
              <Row className="g-1">
            {  
            isAuth && 
            <>
                <Col xs="auto">
                  <Button
                    style={{width:"70px"}}
                    variant="warning"
                    onClick={() => onEdit(item.categorieID)}
                    >
                    Edit
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button
                    style={{width:"70px"}}
                    
                    variant="danger"
                    onClick={() => onDelete(item.categorieID)}
                    >
                    Delete
                  </Button>
                </Col>
                </>
                }
                {name === "user" && (
                  <Col xs="auto">
                    <Button
                    style={{width:"70px"}}

                      variant="success"
                      onClick={() => onCall(item.phone)}
                    >
                      Call
                    </Button>
                  </Col>
                )}
              </Row>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ComanTable;

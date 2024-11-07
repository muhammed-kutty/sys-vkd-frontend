

import React from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
  console.log("gfffffffffffff data",data)

  return (
<>
<div className="row d-flex ">
<Link  to='/' className="text-center bg-primary p-3 rounded mb-4 text-light fw-bold" style={{width:"85px"}} >Home</Link
>

</div>

    <Table className="mt-2" striped bordered hover responsive>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
        </tr>
      </thead>

      <tbody className="fw-bolder">
        {data?.map((item, index) => (
          <tr key={item.id}>
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
                    onClick={() => onDelete(name === 'user' ? item.userID : item.categorieID )}
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
      </>
  );
};

export default ComanTable;

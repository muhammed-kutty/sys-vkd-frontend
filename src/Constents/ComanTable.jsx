import React from "react";
import { Table, Button } from "react-bootstrap";

const ComanTable = ({
  columns,
  data,
  onEdit,
  onDelete,
  onCall,
  name,
  loading,
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
      {/* <tbody>
                {data?.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col, colIndex) => {
                            if (col.field === 'action') {
                                return (
                                    <td key={colIndex}>
                                        <Button variant="warning" onClick={() => onEdit(row.id)}>
                                            Edit
                                        </Button>
                                        <Button variant="danger" onClick={() => onDelete(row.id)} className="ms-2">
                                            Delete
                                        </Button>
                                        <Button 
                                            variant="success" 
                                            onClick={() => onCall(row.phone)} 
                                            className="ms-2"
                                        >
                                            Call
                                        </Button>
                                    </td>
                                );
                            }
                            return <td key={colIndex}>{row[col.field]}</td>;
                        })}
                    </tr>
                ))}
            </tbody> */}

      <tbody>
        {data?.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
              <Button
                variant="warning"
                onClick={() => onEdit(item.categorieID)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => onDelete(item.categorieID)}
                className="ms-5"
              >
                Delete
              </Button>
              {name === "user" ? (
                <Button
                  variant="success"
                  onClick={() => onCall(row.phone)}
                  className="ms-2"
                >
                  Call
                </Button>
              ) : (
                ""
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ComanTable;

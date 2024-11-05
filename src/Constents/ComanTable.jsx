// import React from "react";
// import { Table, Button } from "react-bootstrap";

// const ComanTable = ({
//   columns,
//   data,
//   onEdit,
//   onDelete,
//   onCall,
//   name,
//   loading,
// }) => {
//   return (
//     <Table striped bordered hover responsive>
//       <thead>
//         <tr>
//           {columns.map((col, index) => (
//             <th key={index}>{col.header}</th>
//           ))}
//         </tr>
//       </thead>
   

//       <tbody>
//         {data?.map((item, index) => (
//           <tr>
//             <td>{index + 1}</td>
//             <td>{item.name}</td>
//             {
//               name ==='user'  &&
//             <td>{item.phone}</td>
//             }
//             <td>
          
//               <Button
//                 variant="warning"
//                 onClick={() => onEdit(item.categorieID)}
//                 >
//                 Edit
//               </Button>

//               <Button
//                 variant="danger"
//                 onClick={() => onDelete(item.categorieID)}
//                 className="ms-5"
//               >
//                 Delete
//               </Button>
//               {name === "user" ? (
//                 <Button
//                   variant="success"
//                   onClick={() => onCall(row.phone)}
//                   className="ms-2"
//                 >
//                   Call
//                 </Button>
//               ) : (
//                 ""
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default ComanTable;



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

      <tbody>
        {data?.map((item, index) => (
          <tr key={item.categorieID}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            {name === 'user' && <td>{item.phone}</td>}
            <td>
              <Row className="g-1">
                <Col xs="auto">
                  <Button
                    variant="warning"
                    onClick={() => onEdit(item.categorieID)}
                  >
                    Edit
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button
                    variant="danger"
                    onClick={() => onDelete(item.categorieID)}
                  >
                    Delete
                  </Button>
                </Col>
                {name === "user" && (
                  <Col xs="auto">
                    <Button
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

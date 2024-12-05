
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card as BootstrapCard, Row, Col, Container } from 'react-bootstrap';
import {useInView} from 'react-intersection-observer'

const Card = ({ item  , cardRefs , indx }) => {

  const navigate = useNavigate()


//  const [isInviw, setisInviw] = useState(false)

//  useEffect(()=>{
//   const observer = new IntersectionObserver((entry)=>{
//     entry.forEach(entry =>{
//       if(entry.isIntersecting){
//         setisInviw(true)
//       }
//     })
//   })

//   const target = document.querySelector('.animated_card')

//   if(target) observer.observe(target)

//     return ()=>{
//       if(target) observer.unobserve(target)
//     }
//  },[])
console.log("itemmmmmmmmmmmmmmm====",item)
const handleClick = (id)=>{
  navigate(`/user-details/${id}`)
}

  return (
    <>
          {/* <Col key={item.id} md={6} lg={3} className={`animated_card ${isInviw ? 'in-viewport' : ''}`}> */}
           
            <Col md={6} lg={3}  key={item.categorieID}  ref={(el) => cardRefs.current[indx] = el} className="animated-card " >
            {/* <Link to={`/user-details/${item.id}`} style={{ textDecoration: 'none' }}> */}
              <BootstrapCard className="text-center h-100 d-flex align-items-center"  onClick={()=>handleClick(item.categorieID)}>
                <BootstrapCard.Img 
                  variant="top" 
                  // src={item.img} 
                  src={new URL(`../assets/images/${item.img}`, import.meta.url).href}
                  style={{ width: "100px", marginTop: "10px", }} 
                  alt={item.name} 
                  />
                <BootstrapCard.Body className="d-flex align-items-end justify-content-center">
                  <BootstrapCard.Title className="fw-bold" style={{ fontSize: "24px" }}>
                    {item.name}
                  </BootstrapCard.Title>
                </BootstrapCard.Body>
              </BootstrapCard>
            {/* </Link> */}
          </Col>
                  </>
  );
};

export default Card;

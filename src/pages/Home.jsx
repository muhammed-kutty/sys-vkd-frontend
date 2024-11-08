// import React from 'react'
// import Card from '../Constents/Card'
// import {IMAGES} from '../Constents/Images'
// import { useSelector } from 'react-redux'

// const Home = () => {

//   const {data} = useSelector(state => state.category)
// console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data)
//   // const data = [
//   //   {id:1 , name:"painting" , icon:IMAGES.PAINTING},
//   //   {id:1 , name:"painting" , icon:IMAGES.PAINTING},
//   //   {id:1 , name:"painting" , icon:IMAGES.PAINTING},
//   //   {id:1 , name:"painting" , icon:IMAGES.PAINTING},
//   //   {id:1 , name:"painting" , icon:IMAGES.PAINTING},
//   //   {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
//   //   {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
//   //   {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
//   //   {id:1 , name:"painting" , icon:IMAGES.ELECTRITION},
//   //   {id:1 , name:"painting" , icon:IMAGES.DRIVER},
//   //   {id:1 , name:"painting" , icon:IMAGES.DRIVER},
//   //   {id:1 , name:"painting" , icon:IMAGES.DRIVER},
//   //   {id:1 , name:"painting" , icon:IMAGES.DRIVER},
//   // ]



//   return (
//     <main className='' style={{marginTop:"60px"}}>
//       <div className='text-center mb-4'>
//         <h1>Contact Details</h1> 
//       </div>
//       <div className="row mt-3 d-flex flex-wrap gap-4 main d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
//         {data && data.map((item) => (
//           <div key={item.id} className="animated-card">
//             <Card item={item} />
//           </div>
//         ))}
//         </div>
//     </main>
//   )
// }

// export default Home

import React, { useEffect, useRef } from 'react';
import Card from '../Constents/Card'
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
  const { data } = useSelector(state => state.category);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport'); // Add animation class when in view
        }
      });
    });

    // Observe each card when it's rendered
    cardRefs.current.forEach(target => observer.observe(target));

    // // Cleanup observer
    // return () => {
    //   cardRefs.current.forEach(target => observer.unobserve(target));
    // };

    return () => {
      cardRefs.current.forEach(target => {
        if (target && target instanceof Element) {
          observer.unobserve(target);
        }
      });
    };
  }, [data]);

  return (
    <main className="home-container" style={{ marginTop: "60px" }}>
      <div className='text-center mb-4'>
        <h1>Contact Details</h1> 
      </div>
       <Container>

        <Row className='g-4'>

        {data && data.map((item, index) => (
          
          <Card key={item.id} item={item} cardRefs={cardRefs} indx={index} />
        ))}
        </Row>
        </Container>
    </main>
  );
}

export default Home;

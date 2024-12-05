

import React, { useEffect, useRef, useState } from 'react';
import Card from '../components/Card'
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Slider from '../components/Slider';

const Home = () => {
  const { data } = useSelector(state => state.category);
  const cardRefs = useRef([]);
  const [loadedCount, setLoadedCount] = useState(1)

//   useEffect(() => {
// console.log("api useefect in card")
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting ) {
//           entry.target.classList.add('in-viewport');
//           setLoadedCount(prevCount => prevCount + 1)
//         }else{
//           entry.target.classList.remove('in-viewport');

//         }
//       });
//     });

//     // Observe each card when it's rendered
//     cardRefs.current.forEach(target => observer.observe(target));

//     return () => {
//       cardRefs.current.forEach(target => {
//         if (target && target instanceof Element) {
//           observer.unobserve(target);
//         }
//       });
//     };
//   }, [data , loadedCount]);


useEffect(() => {
  console.log("API useEffect in card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');
        setLoadedCount(prevCount => {
          // Only update if count needs to change
          if (prevCount < data.length) {
            return prevCount + 1;
          }
          return prevCount;
        });
      } else {
        entry.target.classList.remove('in-viewport');
      }
    });
  });

  // Observe each card when it's rendered
  cardRefs.current.forEach(target => observer.observe(target));

  return () => {
    cardRefs.current.forEach(target => {
      if (target && target instanceof Element) {
        observer.unobserve(target);
      }
    });
  };
}, [data, loadedCount]);


  return (
    <main className="" >
      <div className='w-100'>
        <Slider />
      </div>
      <div className='text-center mb-4 home-container pt-1 d-flex align-items-center justify-content-center'>
        <h1 className='text-dark bg-light w-50 rounded' style={{fontFamily:"Faculty Glyphic, sans-serif" , fontWeight:"900"}}>Contact Details</h1> 
      </div>
       <Container>

        <Row className='g-4'>

        {data && data.slice(0, loadedCount).map((item, index) => (
          
          <Card key={item.categorieID} item={item} cardRefs={cardRefs} indx={index} />
        ))}
        </Row>
        </Container>
    </main>
  );
}

export default Home;

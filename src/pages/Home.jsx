

import React, { useEffect, useRef, useState } from 'react';
import Card from '../Constents/Card'
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
  const { data } = useSelector(state => state.category);
  const cardRefs = useRef([]);
  const [loadedCount, setLoadedCount] = useState(1)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting ) {
          entry.target.classList.add('in-viewport');
          // setLoadedCount(prevCount => prevCount + 1)
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
  }, [data , loadedCount]);

  return (
    <main className="home-container" style={{ marginTop: "60px" }}>
      <div className='text-center mb-4'>
        <h1>Contact Details</h1> 
      </div>
       <Container>

        <Row className='g-4'>

        {data && data.slice(0, loadedCount).map((item, index) => (
          
          <Card key={item.id} item={item} cardRefs={cardRefs} indx={index} />
        ))}
        </Row>
        </Container>
    </main>
  );
}

export default Home;

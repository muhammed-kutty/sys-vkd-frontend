import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // Get current route location

  useEffect(() => {
    // Scroll to the top of the page when location changes
    window.scrollTo(0, 0);
  }, [location]); // This effect runs when the location changes (i.e., on route change)

  return null;
};

export default ScrollToTop;

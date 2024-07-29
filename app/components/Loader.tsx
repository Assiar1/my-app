"use client"; // This directive is necessary for client-side rendering

import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div className="loader">
      <p>Loading... Please wait</p>
      <div className="progress"></div>
    </div>
  ) : null;
};

export default Loader;

"use client"
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <button className="button--footer" onClick={scrollToTop}>BACK TO TOP</button>
    </footer>
  );
};

export default Footer;

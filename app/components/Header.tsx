import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <nav className="header">
      <Image className="logo" src="/assets/images/logo.svg" alt="Logo" width={100} height={50} />
      <ul className="header-links">
        <li>
          <Link href="#product">Product</Link>
        </li>
        <li>
          <Link href="#Service">Services</Link>
        </li>
        <li>
          <Link href="#Team">About Us</Link>
        </li>
        <li>
          <Link href="#CanvasContainer">Team</Link>
        </li>
        <li>
          <Link href="#Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

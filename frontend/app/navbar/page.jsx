import Link from 'next/link';
import React from 'react';

function Navbar() {
  const navbarStyle = {
    background: '#333',
    color: 'white',
    padding: '10px',
  };

  const ulStyle = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const liStyle = {
    margin: '0 200px',
    cursor: 'pointer',
  };

  return (
    <nav style={navbarStyle}>
      <div></div>
      <div>
        <ul style={ulStyle}>
          <Link href="" style={liStyle}>content</Link >
          <Link href="/components/login" style={liStyle}>login</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

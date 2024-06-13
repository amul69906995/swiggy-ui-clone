import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    height: '76px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100vw',
    zIndex:'9'
  };

  
 

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Your Website Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

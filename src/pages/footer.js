import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Atizaz, Isaac and Ibrahim. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

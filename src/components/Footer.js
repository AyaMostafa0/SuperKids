import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <div className="container">
        <div className="social-icons">
          <a href=" " target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-facebook" />
          </a>
          <a href=" " target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-twitter" />
          </a>
          <a href=" " target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Conditions of Use & Sale Privacy Notice Interest-Based Ads ©1996–2023, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;

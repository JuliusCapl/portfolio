import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer--">
      <div className="container container--">
        <div>
          <h4>Based somewhere</h4>
        </div>
        <div>
          <h4>let's get in touch</h4>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/juliocapdevilla/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/JuliusCapl"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/pingberg/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com/julius.capl.5"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

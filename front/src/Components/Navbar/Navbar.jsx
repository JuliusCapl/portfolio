import React from 'react'
import './Navbar.css'

const Navbar = ({ isScrolling }) => {

    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

  return (
    <nav
      className={`navbar navbar-dark navbar-expand-md nav-- ${
        isScrolling > 30 ? "scrolling" : null
      }`}
    >
      <div className="container">
        <h2 type="button" className="navbar-brand" onClick={toTheTop}>
          [JulioKPL]
        </h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <a href="#home" type="button" className="nav-link">
              Home
            </a>
            
            <a href="#about" type="button" className="nav-link">
              About
            </a>

            <a href="#projects" type="button" className="nav-link">
              Projects
            </a>
            <a href="#contact" type="button" className="nav-link">
              Contact
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="section1">
            <h3 className="logo-name">Horizon Courts</h3>
        </div>
        <div className="section2">
            <ul className="nav-links">
                <li id='glass'>About us</li>
                <li>Services</li>
                <li>Coaches</li>
                <li>Events</li>
                <li>Contacts</li>
            </ul>
        </div>
        <div className="section3">
            <button className="book-btn">
                Book now
            </button>
        </div>
    </nav>
  )
}

export default Navbar

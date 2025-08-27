import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <span>AD</span>
                    <div className="logo-dot"></div>
                </div>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <div className="nav-item">
                        <a href="#home" className="nav-link">
                            <span className="link-text">Home</span>
                            <div className="link-underline"></div>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="#about" className="nav-link">
                            <span className="link-text">About</span>
                            <div className="link-underline"></div>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="#projects" className="nav-link">
                            <span className="link-text">Projects</span>
                            <div className="link-underline"></div>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="#contact" className="nav-link">
                            <span className="link-text">Contact</span>
                            <div className="link-underline"></div>
                        </a>
                    </div>
                </div>

                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
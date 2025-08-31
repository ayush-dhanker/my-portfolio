import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Ayush Dhanker</h3>
                        <p className="footer-description">
                            {/* Master’s student in Data Science Engineering with expertise in machine learning and full-stack development. */}
                            Open to opportunities as an intern or working student to apply my skills in real-world projects
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="social-link">
                                <i className="fab fa-medium"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Skills</h4>
                        <ul className="footer-links">
                            <li><a href="#">Machine Learning</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Data Analysis</a></li>
                            <li><a href="#">NLP</a></li>
                            <li><a href="#">API Development</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Contact Info</h4>
                        <div className="f-contact-info">
                            <p>
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:ayush.dhanker.work@gmail.com" title="Send email to Ayush" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    ayush.dhanker.work@gmail.com
                                </a>
                            </p>
                            <p>
                                <i className="fas fa-map-marker-alt"></i>
                                GERMANY
                            </p>
                        </div>
                        <button className="f-contact-btn">Get In Touch</button>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ayush Dhanker. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
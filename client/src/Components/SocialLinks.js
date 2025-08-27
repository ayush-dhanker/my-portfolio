import React from "react";
import "./components.css";

const SocialLinks = () => {
    const links = [
        {
            name: "GitHub",
            url: "https://github.com/ayush-dhanker",
            icon: "fa-brands fa-github",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ayush-dhanker/",
            icon: "fa-brands fa-linkedin",
        },
        {
            name: "Medium",
            url: "https://medium.com/@ayush.dhanker",
            icon: "fa-brands fa-medium",
        },
    ];

    return (
        <div className="social-container">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <i className={link.icon}></i>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;

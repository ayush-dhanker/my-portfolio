import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
            image: "https://via.placeholder.com/300x200?text=E-Commerce",
            tags: ["react", "node", "mongodb", "web"],
            link: "#"
        },
        {
            id: 2,
            title: "Machine Learning Model",
            description: "A predictive model for customer behavior analysis using Python and Scikit-learn.",
            image: "https://via.placeholder.com/300x200?text=ML+Model",
            tags: ["python", "ml", "scikit-learn"],
            link: "#"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A responsive portfolio website built with React and CSS animations.",
            image: "https://via.placeholder.com/300x200?text=Portfolio",
            tags: ["react", "css", "web"],
            link: "#"
        },
        {
            id: 4,
            title: "NLP Text Analysis",
            description: "Natural Language Processing application for sentiment analysis.",
            image: "https://via.placeholder.com/300x200?text=NLP",
            tags: ["python", "nlp", "machine learning"],
            link: "#"
        },
        {
            id: 5,
            title: "Data Visualization Dashboard",
            description: "Interactive dashboard for data visualization using D3.js and React.",
            image: "https://via.placeholder.com/300x200?text=Dashboard",
            tags: ["react", "d3", "data visualization", "web"],
            link: "#"
        },
        {
            id: 6,
            title: "API Development",
            description: "RESTful API development with FastAPI and PostgreSQL.",
            image: "https://via.placeholder.com/300x200?text=API",
            tags: ["python", "fastapi", "postgresql"],
            link: "#"
        }
    ];

    const filters = [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'ml', name: 'Machine Learning' },
        { id: 'python', name: 'Python' },
        { id: 'react', name: 'React' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.tags.includes(activeFilter));

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle">A selection of my recent work</p>

                {/* Filter buttons */}
                <div className="filter-buttons">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Projects grid */}
                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.link} className="project-link">
                                            <i className="fas fa-eye"></i>
                                        </a>
                                        <a href={project.link} className="project-link">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
            image: "https://via.placeholder.com/300x200/4a6cf7/ffffff?text=E-Commerce",
            tags: ["react", "node", "mongodb"],
            category: "personal",
            link: "#",
            report: ""
        },
        {
            id: 2,
            title: "Customer Behavior Analysis",
            description: "A predictive model for customer behavior using Python and Scikit-learn.",
            image: "https://via.placeholder.com/300x200/8a54ff/ffffff?text=ML+Model",
            tags: ["python", "ml", "scikit-learn"],
            category: "course",
            link: "#",
            report: "/reports/customer_analysis.pdf"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A responsive portfolio website built with React and CSS animations.",
            image: "https://via.placeholder.com/300x200/00b4db/ffffff?text=Portfolio",
            tags: ["react", "css", "web"],
            category: "personal",
            link: "#",
            report: ""
        },
        {
            id: 4,
            title: "NLP Sentiment Analysis",
            description: "Natural Language Processing application for sentiment analysis.",
            image: "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=NLP",
            tags: ["python", "nlp", "machine learning"],
            category: "course",
            link: "#",
            report: "/reports/nlp_sentiment.pdf"
        },
        {
            id: 5,
            title: "Data Visualization Dashboard",
            description: "Interactive dashboard for data visualization using D3.js and React.",
            image: "https://via.placeholder.com/300x200/2c5364/ffffff?text=Dashboard",
            tags: ["react", "d3", "data visualization"],
            category: "personal",
            link: "#",
            report: ""
        },
        {
            id: 6,
            title: "RESTful API Development",
            description: "API development with FastAPI and PostgreSQL.",
            image: "https://via.placeholder.com/300x200/203a43/ffffff?text=API",
            tags: ["python", "fastapi", "postgresql"],
            category: "course",
            link: "#",
            report: "/reports/api_development.pdf"
        }
    ];

    const filters = [
        { id: 'all', name: 'All Projects' },
        { id: 'personal', name: 'Personal' },
        { id: 'course', name: 'Course' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const handleDownloadReport = (reportUrl, projectTitle) => {
        // Simulate download functionality
        console.log(`Downloading report for ${projectTitle} from ${reportUrl}`);
        // In a real application, this would trigger a file download
        alert(`Downloading report for ${projectTitle}`);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 style={{ textAlign: 'center' }}>My Projects</h2>
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
                                        {project.report && (
                                            <button
                                                className="project-link download-btn"
                                                onClick={() => handleDownloadReport(project.report, project.title)}
                                                title="Download Report"
                                            >
                                                <i className="fas fa-download"></i>
                                            </button>
                                        )}
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
                                <div className="project-category">
                                    <div>Category: <span>{project.category}</span></div>
                                    {project.report && (
                                        <button
                                            className="download-report-btn"
                                            onClick={() => handleDownloadReport(project.report, project.title)}
                                        >
                                            <i className="fas fa-download"></i> Download Report
                                        </button>
                                    )}
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
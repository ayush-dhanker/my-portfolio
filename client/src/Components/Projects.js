import React, { useState } from 'react';
import './Projects.css';
import chatImg from "../assets/l-chatbot.webp"
import report from "../assets/report.pdf"
import resumeScreen from '../assets/resumeScreen.png'
import mnist from '../assets/mnist.jpg'
import portfolioImg from "../assets/portfolio.png"
import tennis from "../assets/tennis.jpg"

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Tennis Analysis (CNN)",
            description: "coming soon...",
            image: tennis,
            tags: ["deep learning", "CNN", "YOLO", "Pytorch"],
            category: "personal",
            link: "https://github.com/ayush-dhanker/tennis-analysis-cnn",
        },
        {
            id: 2,
            title: "Langchain chatbot",
            description: "An interactive chatbot built with LangChain, Streamlit, and Ollama/OpenAI.",
            image: chatImg,
            tags: ["Python", "LangChain", "Streamlit", "Ollama"],
            category: "personel",
            link: "https://github.com/ayush-dhanker/langchain-chatbot",
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A responsive portfolio website built with ReactJS and CSS animations.",
            image: portfolioImg,
            tags: ["react", "css", "javascript"],
            category: "personal",
            link: "https://github.com/ayush-dhanker/my-portfolio",
        },
        {
            id: 4,
            title: "Resume_screening_project",
            description: "Evaluating Transparency in User Profiling to improve clarity for Resume Screening Systems",
            image: resumeScreen,
            tags: ["python", "machine learning", "BERT", "FAST-Api", "ReactJs"],
            category: "course",
            link: "https://github.com/ayush-dhanker/Resume_screening_project",
            report: "/reports/nlp_sentiment.pdf"
        },
        {
            id: 5,
            title: "Image-Classification-on-MNIST",
            description: "A beginner-friendly PyTorch project for handwritten digit classification using the MNIST dataset. Includes a full training pipeline, evaluation, and loss visualization with matplotlib",
            image: mnist,
            tags: ["pytorch", "python", "data visualization", "deep-learning"],
            category: "personal",
            link: "https://github.com/ayush-dhanker/Image-Classification-on-MNIST",
        },
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
        try {
            // Validate inputs
            if (!reportUrl) {
                throw new Error('No report URL provided');
            }

            if (!projectTitle) {
                throw new Error('No project title provided');
            }

            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = reportUrl;

            // Set the download attribute with a proper filename
            const fileName = `${projectTitle
                .replace(/\s+/g, '_')
                .replace(/[^\w\-]/g, '')
                .toLowerCase()}_report.pdf`;

            link.download = fileName;
            link.target = '_blank'; // Open in new tab for PDFs

            // Set styles to hide the element
            link.style.display = 'none';

            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            console.log(`Downloading report for ${projectTitle}`);

            // Optional: Track download analytics
            // trackDownload(projectTitle, reportUrl);

        } catch (error) {
            console.error('Download failed:', error);
            alert(`Download failed: ${error.message}`);
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className='text-align-c'>My Projects</h2>
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
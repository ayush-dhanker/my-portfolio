
import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Python", level: 90 },
                { name: "JavaScript (ES6+)", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "PyTorch", level: 75 },
                { name: "FastAPI", level: 85 }
            ]
        },
        {
            title: "Libraries & Frameworks",
            skills: [
                { name: "Scikit-learn", level: 90 },
                { name: "Pandas", level: 95 },
                { name: "NumPy", level: 90 },
                { name: "Matplotlib", level: 85 },
                { name: "Seaborn", level: 80 }
            ]
        },
        {
            title: "ML & DL",
            skills: [
                { name: "Regression", level: 90 },
                { name: "Classification", level: 90 },
                { name: "Clustering", level: 85 },
                { name: "Cross-Validation", level: 90 },
                { name: "Evaluation Metrics", level: 90 },
                { name: "EDA", level: 95 },
                { name: "Feature Engineering", level: 85 },
                { name: "Generative AI", level: 60 }
            ]
        },
        {
            title: "NLP & ML Tools",
            skills: [
                { name: "Hugging Face", level: 70 },
                { name: "spaCy", level: 65 },
                { name: "BERT", level: 60 },
                { name: "RAG pipelines", level: 65 },
                { name: "Embeddings", level: 70 }
            ]
        },
        {
            title: "Tools & Skills",
            skills: [
                { name: "Git", level: 85 },
                { name: "Docker", level: 40 }
            ]
        },
        {
            title: "Web Development",
            skills: [
                { name: "React", level: 85 },
                { name: "NextJS", level: 70 },
                { name: "Redux", level: 75 },
                { name: "HTML", level: 90 },
                { name: "CSS", level: 85 },
                { name: "Tailwind CSS", level: 60 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                {/* <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle">My technical expertise and proficiency levels</p> */}

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-progress">
                                            <div
                                                className="skill-progress-bar"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
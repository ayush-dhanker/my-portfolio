import React from "react";
import "./Timeline.css";

export default function Timeline({ steps = [], activeStep = 0 }) {
    return (
        <div className="timeline-container">
            {steps.map((step, index) => (
                <div className="timeline-step" key={index}>
                    <div className={`timeline-circle ${index <= activeStep ? "active" : ""}`}></div>
                    <div className="timeline-content">
                        <h4 className="timeline-title">{step.title}</h4>
                        {step.subtitle && <p className="timeline-subtitle">{step.subtitle}</p>}
                        {step.description && <p className="timeline-description">{step.description}</p>}
                    </div>
                    {index !== steps.length - 1 && <div className="timeline-line"></div>}
                </div>
            ))}
        </div>
    );
}

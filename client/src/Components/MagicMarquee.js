import React from 'react';
import './MagicMarquee.css';

const MagicMarquee = () => {
    const topRowItems = [
        { id: 1, text: "Modern Design", icon: "🎨" },
        { id: 2, text: "Smooth Animations", icon: "✨" },
        { id: 3, text: "Responsive Layout", icon: "📱" },
        { id: 4, text: "Clean Code", icon: "💻" },
        { id: 5, text: "User Friendly", icon: "👥" },
        { id: 6, text: "Fast Performance", icon: "⚡" },
        { id: 7, text: "Creative Solutions", icon: "🔮" },
        { id: 8, text: "Interactive Elements", icon: "🖱️" }
    ];

    const bottomRowItems = [
        { id: 1, text: "React", icon: "⚛️" },
        { id: 2, text: "JavaScript", icon: "📜" },
        { id: 3, text: "CSS3", icon: "🎀" },
        { id: 4, text: "HTML5", icon: "🌐" },
        { id: 5, text: "Python", icon: "🐍" },
        { id: 6, text: "Node.js", icon: "🟢" },
        { id: 7, text: "UI/UX", icon: "🎯" },
        { id: 8, text: "Web Development", icon: "💾" }
    ];

    // Duplicate the items for seamless looping
    const duplicatedTopItems = [...topRowItems, ...topRowItems];
    const duplicatedBottomItems = [...bottomRowItems, ...bottomRowItems];

    return (
        <div className="magic-marquee-container">

            {/* Top row moving left to right */}
            <div className="magic-marquee top-row">
                <div className="marquee-track">
                    {duplicatedTopItems.map((item, index) => (
                        <div key={`top-${item.id}-${index}`} className="marquee-item">
                            <span className="marquee-icon">{item.icon}</span>
                            <span className="marquee-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom row moving right to left */}
            <div className="magic-marquee bottom-row">
                <div className="marquee-track reverse">
                    {duplicatedBottomItems.map((item, index) => (
                        <div key={`bottom-${item.id}-${index}`} className="marquee-item">
                            <span className="marquee-icon">{item.icon}</span>
                            <span className="marquee-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MagicMarquee;
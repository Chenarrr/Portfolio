import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: '🎨',
            skills: [
                { name: 'React', level: 85 },
                { name: 'JavaScript', level: 80 },
                { name: 'HTML/CSS', level: 90 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'UI/UX Design', level: 75 }
            ]
        },
        {
            title: 'Backend Development',
            icon: '⚙️',
            skills: [
                { name: 'Node.js', level: 75 },
                { name: 'Express.js', level: 80 },
                { name: 'MongoDB', level: 70 },
                { name: 'REST APIs', level: 80 }
            ]
        },
        {
            title: 'Mobile Development',
            icon: '📱',
            skills: [
                { name: 'Flutter', level: 80 },
                { name: 'Dart', level: 75 },
                { name: 'Firebase', level: 70 },
                { name: 'Mobile UI/UX', level: 75 }
            ]
        },
        {
            title: 'Tools & Others',
            icon: '🛠️',
            skills: [
                { name: 'Git & GitHub', level: 85 },
                { name: 'Docker', level: 65 },
                { name: 'Vite', level: 80 },
                { name: 'Agile/Scrum', level: 70 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Technologies</h2>
                    <p className="section-subtitle">
                        A comprehensive overview of my technical expertise and proficiency levels
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    animationDelay: `${(index * 0.15) + (i * 0.1)}s`
                                                }}
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

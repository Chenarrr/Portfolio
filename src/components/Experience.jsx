import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'Web Developer Intern',
            company: 'AI Centre at UKH',
            period: 'Aug. 2024 - Nov. 2024',
            icon: '💻',
            responsibilities: [
                'Applied UI/UX principles to create intuitive and visually appealing web interfaces',
                'Collaborated with cross-functional teams to develop responsive web applications using React',
                'Enhanced user experience and engagement through modern design patterns',
                'Contributed to team projects using version control and agile methodologies'
            ]
        },
        {
            role: 'Product Manager',
            company: 'Ramyar Online Library',
            period: 'July 2022 - Jan. 2023',
            icon: '📚',
            responsibilities: [
                'Managed website content updates to maintain accurate and current information',
                'Monitored website performance to ensure optimal user experience and reliability',
                'Coordinated with development teams to implement feature enhancements efficiently',
                'Analyzed user data to guide product improvements and marketing strategies'
            ]
        },
        {
            role: 'Promoter',
            company: 'Aman Insurance',
            period: 'Sep. 2024 - Oct. 2024',
            icon: '🛡️',
            responsibilities: [
                'Engaged clients actively to increase brand awareness and customer interest',
                'Promoted services to expand market reach and enhance company visibility',
                'Collaborated with team members to optimize promotional strategies',
                'Monitored client feedback to improve engagement and service delivery'
            ]
        }
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-title">
                    <h2>Professional Experience</h2>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="timeline-marker">
                                <div className="marker-icon">{exp.icon}</div>
                            </div>

                            <div className="timeline-content card">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="role-title">{exp.role}</h3>
                                        <p className="company-name">{exp.company}</p>
                                    </div>
                                    <span className="period">{exp.period}</span>
                                </div>

                                <ul className="responsibilities">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

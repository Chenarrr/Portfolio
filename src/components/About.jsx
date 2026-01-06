import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            I'm a passionate software engineering student at the <strong>University of Kurdistan</strong>,
                            expected to graduate in 2026. My journey in tech is driven by curiosity and a love for
                            creating impactful digital solutions.
                        </p>

                        <p>
                            With hands-on experience in both <strong>web and mobile development</strong>, I've worked
                            on diverse projects ranging from workout tracking apps to lost-and-found mobile applications.
                            I specialize in building responsive, user-centric applications using modern technologies like
                            React, Flutter, and the MERN stack.
                        </p>

                        <p>
                            Currently, I'm expanding my expertise through my internship at the <strong>AI Centre at UKH</strong>,
                            where I apply UI/UX principles and collaborate with cross-functional teams to develop
                            intuitive web interfaces.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">🎓</div>
                                <div>
                                    <h4>Education</h4>
                                    <p>Software Engineering<br />University of Kurdistan</p>
                                    <span className="year">2021 - 2026</span>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Erbil, Iraq</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">💼</div>
                                <div>
                                    <h4>Focus Areas</h4>
                                    <p>Web Development<br />Mobile Apps<br />UI/UX Design</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v20M2 12h20" />
                                </svg>
                            </div>
                            <h3 className="stat-number">3+</h3>
                            <p className="stat-label">Years of Study</p>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <h3 className="stat-number">5+</h3>
                            <p className="stat-label">Projects Completed</p>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="stat-number">3</h3>
                            <p className="stat-label">Professional Roles</p>
                        </div>

                        <div className="stat-card">
                            <div className="stat-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                            </div>
                            <h3 className="stat-number">10+</h3>
                            <p className="stat-label">Technologies</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

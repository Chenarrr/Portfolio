import React from 'react';

const Projects = () => {
    const projects = [
        {
            number: '01',
            title: 'Home Lab — chenar.space',
            description:
                '2-node Hetzner cluster (k3s + Ubuntu) provisioned with Ansible. Cilium eBPF networking, Traefik v3 ingress, Flux CD v2 GitOps with auto-sync, cert-manager for TLS, and Infisical for secrets. Apps auto-deploy to subdomains on every push. EchoVote runs in production here.',
            tech: ['k3s', 'Ansible', 'Flux CD', 'Traefik', 'Cilium', 'Infisical', 'Hetzner'],
            github: 'https://github.com/Chenarrr/HomeLab_chenar',
            live: 'https://chenar.space',
        },
        {
            number: '02',
            title: 'Find It — Lost & Found Platform',
            description:
                'Cross-platform mobile app for reporting and recovering lost items. Firebase Auth, real-time Firestore listeners, image upload to Cloud Storage, and push notifications via FCM. Graduation thesis project.',
            tech: ['Flutter', 'Firebase', 'Firestore', 'FCM', 'Cloud Functions'],
            github: 'https://github.com/Chenarrr/Lost-and-Found-with-Flutter-',
        },
        {
            number: '03',
            title: 'Expense Tracker',
            description:
                'Full-stack expense tracker with RESTful API, session-based auth, weekly spending summaries, and a fully responsive UI. Built during my web dev internship to scratch my own itch.',
            tech: ['Express.js', 'MongoDB', 'Tailwind CSS'],
            github: 'https://github.com/Chenarrr/expense-web',
        },
        {
            number: '04',
            title: 'Workout Tracker',
            description:
                'Web app generating personalised workout plans by training goal. A Flutter mobile version is currently in progress — because if it\'s not cross-platform, does it even exist?',
            tech: ['React', 'Tailwind CSS', 'Flutter'],
            github: 'https://github.com/Chenarrr/GYM_WebAPP_FrontEnd',
        },
        {
            number: '05',
            title: '2D Box-Jump Game',
            description:
                'Physics-based platformer with procedural obstacles and a scoring system. 3D assets modelled in Blender. Built with AI-assisted development via Claude Code MCP — the pipeline has pipelines.',
            tech: ['Unity', 'C#', 'Blender', 'Claude Code MCP'],
            github: 'https://github.com/Chenarrr',
        },
    ];

    return (
        <section id="projects" className="section" style={{ background: '#07070A' }}>
            <div className="container">
                <div className="section-label">
                    <span className="section-number">03</span>
                    <span className="section-line" />
                    <span className="section-name">Projects</span>
                </div>

                <h2
                    className="font-display font-light leading-tight mb-16"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#EFEFEC' }}
                >
                    Selected<br />
                    <span className="italic" style={{ color: '#6B6B76' }}>work</span>
                </h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
                    style={{ background: 'rgba(255,255,255,0.07)' }}
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-8 reveal"
                            style={{
                                background: '#07070A',
                                transition: 'background 0.2s ease, opacity 0.65s ease-out, transform 0.65s ease-out',
                                transitionDelay: `${index * 0.1}s`,
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#0D0D10')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = '#07070A')}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-mono text-xs" style={{ color: '#3D3D46' }}>
                                    {project.number}
                                </span>
                                <div className="flex items-center gap-3">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Live site"
                                            className="font-mono text-[10px] tracking-widest uppercase transition-colors duration-200 flex items-center gap-1"
                                            style={{ color: '#C9A84C' }}
                                            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                                            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                                        >
                                            Live ↗
                                        </a>
                                    )}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub repository"
                                        className="transition-colors duration-200"
                                        style={{ color: '#3D3D46' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = '#3D3D46')}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M7 7h10v10M7 17L17 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <h3 className="font-sans font-medium text-lg mb-4 leading-snug" style={{ color: '#EFEFEC' }}>
                                {project.title}
                            </h3>
                            <p
                                className="font-sans text-sm leading-relaxed flex-grow mb-8"
                                style={{ color: '#6B6B76' }}
                            >
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'DevSecOps Intern',
            company: 'Department of Information Technology, KRG',
            period: 'Jan 2026 – Mar 2026',
            responsibilities: [
                'Deployed and managed multi-node Kubernetes clusters with kubeadm, Docker, and Linux-based infrastructure',
                'Authored Helm charts and implemented GitOps workflows using Flux CD and Argo CD for automated delivery',
                'Built CI/CD pipelines in GitHub Actions: lint, test, build images, push to registry, trigger deployments',
            ],
        },
        {
            role: 'Web Developer Intern',
            company: 'AI Centre, University of Kurdistan Hewlêr',
            period: 'Jan 2025 – Nov 2025',
            responsibilities: [
                'Developed responsive web interfaces using React, Tailwind CSS, and Git-based version control',
                'Delivered features on sprint cycles, collaborating with designers and backend engineers',
            ],
        },
        {
            role: 'Product Manager',
            company: 'Ramyar Online Library',
            period: 'Jul 2022 – Jan 2023',
            responsibilities: [
                'Owned the product roadmap and coordinated releases across development teams',
                'Introduced data-driven content strategy that improved user engagement',
            ],
        },
    ];

    return (
        <section id="experience" className="section" style={{ background: '#07070A' }}>
            <div className="container">
                <div className="section-label">
                    <span className="section-number">02</span>
                    <span className="section-line" />
                    <span className="section-name">Experience</span>
                </div>

                <h2
                    className="font-display font-light leading-tight mb-16"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#EFEFEC' }}
                >
                    Professional<br />
                    <span className="italic" style={{ color: '#6B6B76' }}>history</span>
                </h2>

                <div style={{ position: 'relative' }}>
                    {/* Vertical timeline line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '1px',
                            background: 'linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.1))',
                        }}
                    />

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="reveal"
                            style={{
                                paddingLeft: '2.5rem',
                                paddingBottom: index < experiences.length - 1 ? '3.5rem' : '0',
                                transitionDelay: `${index * 0.12}s`,
                                position: 'relative',
                            }}
                        >
                            {/* Timeline dot */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '-4px',
                                    top: '6px',
                                    width: '9px',
                                    height: '9px',
                                    borderRadius: '50%',
                                    background: index === 0 ? '#C9A84C' : '#1E1E24',
                                    border: '1px solid #C9A84C',
                                }}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6">
                                <div>
                                    <p className="font-mono text-xs mb-2" style={{ color: '#3D3D46' }}>
                                        {exp.period}
                                    </p>
                                    <p className="font-sans text-xs tracking-wide" style={{ color: '#C9A84C' }}>
                                        {exp.company}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-sans font-semibold text-xl mb-5" style={{ color: '#EFEFEC' }}>
                                        {exp.role}
                                    </h3>
                                    <ul className="space-y-3">
                                        {exp.responsibilities.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-3 text-sm leading-relaxed"
                                                style={{ color: '#ADADB8' }}
                                            >
                                                <span className="mt-0.5 shrink-0" style={{ color: '#3D3D46' }}>—</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'DevSecOps Engineer',
            company: 'Department of Information Technology, KRG',
            period: 'Jan 2026 – Jul 2026',
            responsibilities: [
                'Provisioned and operated multi-node Kubernetes clusters using kubeadm across bare-metal Linux servers — full lifecycle from node joining to production workloads',
                'Designed and deployed Helm charts for internal services; implemented GitOps delivery with Flux CD and Argo CD, eliminating manual kubectl applies entirely',
                'Built end-to-end CI/CD pipelines in GitHub Actions — code lint, unit tests, Docker image build, registry push, and automated rolling deploys to the cluster',
            ],
        },
        {
            role: 'Frontend Developer',
            company: 'AI Centre, University of Kurdistan Hewlêr',
            period: 'Jan 2025 – Nov 2025',
            responsibilities: [
                'Built and shipped production UI components with React and Tailwind CSS across multiple projects in an agile sprint environment',
                'Collaborated directly with designers and backend engineers on feature delivery, version control via Git, and code review workflows',
            ],
        },
        {
            role: 'Product Manager',
            company: 'Ramyar Online Library',
            period: 'Jul 2022 – Jan 2023',
            responsibilities: [
                'Owned the full product roadmap — defined priorities, scoped releases, and coordinated cross-functional teams to hit delivery targets',
                'Introduced content analytics to drive data-informed decisions, improving user engagement metrics quarter-over-quarter',
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
                    Where I've<br />
                    <span className="italic" style={{ color: '#6B6B76' }}>worked</span>
                </h2>

                <div style={{ position: 'relative' }}>
                    {/* Vertical timeline line */}
                    <div style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px',
                        background: 'linear-gradient(to bottom, #C9A84C 0%, rgba(201,168,76,0.15) 100%)',
                    }} />

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="reveal"
                            style={{
                                paddingLeft: '2.5rem',
                                paddingBottom: index < experiences.length - 1 ? '4rem' : '0',
                                transitionDelay: `${index * 0.12}s`,
                                position: 'relative',
                            }}
                        >
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute', left: '-4px', top: '8px',
                                width: '9px', height: '9px', borderRadius: '50%',
                                background: index === 0 ? '#C9A84C' : '#07070A',
                                border: '1px solid #C9A84C',
                            }} />

                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                                <div>
                                    <p className="font-mono text-xs mb-2" style={{ color: '#3D3D46' }}>
                                        {exp.period}
                                    </p>
                                    <p className="font-sans text-xs leading-relaxed" style={{ color: '#C9A84C' }}>
                                        {exp.company}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-sans font-semibold text-xl mb-5" style={{ color: '#EFEFEC' }}>
                                        {exp.role}
                                    </h3>
                                    <ul className="space-y-3">
                                        {exp.responsibilities.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#ADADB8' }}>
                                                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: '#C9A84C', minWidth: 4, minHeight: 4 }} />
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

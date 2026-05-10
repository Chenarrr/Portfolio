import React from 'react';

const About = () => {
    const stats = [
        { number: '5+', label: 'Projects Built' },
        { number: '3', label: 'Work Roles' },
        { number: '30+', label: 'Technologies' },
        { number: '2026', label: 'Graduating' },
    ];

    return (
        <section id="about" className="section" style={{ background: '#07070A' }}>
            <div className="container">
                <div className="section-label">
                    <span className="section-number">01</span>
                    <span className="section-line" />
                    <span className="section-name">About</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">
                    <div className="reveal">
                        <h2
                            className="font-display font-light leading-tight mb-8"
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#EFEFEC' }}
                        >
                            Building software<br />
                            <span className="italic" style={{ color: '#6B6B76' }}>with purpose</span>
                        </h2>

                        <div className="space-y-5 font-sans text-base leading-relaxed" style={{ color: '#ADADB8' }}>
                            <p>
                                Software engineer with hands-on experience across frontend, backend,
                                mobile, DevOps, and infrastructure. Comfortable with cloud-native tooling,
                                Linux systems, and CI/CD automation. Graduating 2026 from the{' '}
                                <span style={{ color: '#EFEFEC' }}>University of Kurdistan Hewlêr</span>.
                            </p>
                            <p>
                                I leverage AI-assisted development to ship faster and adapt quickly
                                to new stacks. Published <em style={{ color: '#EFEFEC' }}>'From Code to Cluster'</em> on
                                Kubernetes in UKH Voice magazine.
                            </p>
                        </div>

                        <div
                            className="mt-10 p-6 reveal"
                            style={{
                                background: '#0D0D10',
                                border: '1px solid rgba(201,168,76,0.15)',
                            }}
                        >
                            <div className="flex items-start gap-5">
                                <div
                                    className="w-px shrink-0 mt-1"
                                    style={{ height: 60, background: '#C9A84C' }}
                                />
                                <div>
                                    <p className="font-sans font-medium mb-1" style={{ color: '#EFEFEC' }}>
                                        Software Engineering
                                    </p>
                                    <p className="font-sans text-sm" style={{ color: '#6B6B76' }}>
                                        University of Kurdistan Hewlêr
                                    </p>
                                    <p className="font-mono text-xs mt-2" style={{ color: '#3D3D46' }}>
                                        2021 — 2026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats grid */}
                    <div
                        className="grid grid-cols-2 gap-px"
                        style={{ background: 'rgba(255,255,255,0.07)' }}
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-8 reveal"
                                style={{
                                    background: '#07070A',
                                    transitionDelay: `${index * 0.1}s`,
                                }}
                            >
                                <p
                                    className="font-display font-light mb-2"
                                    style={{ fontSize: '3rem', color: '#EFEFEC', lineHeight: 1 }}
                                >
                                    {stat.number}
                                </p>
                                <p
                                    className="font-sans text-xs tracking-widest uppercase"
                                    style={{ color: '#6B6B76' }}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

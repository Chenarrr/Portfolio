import React from 'react';

const About = () => {
    const stats = [
        { number: '5+', label: 'Projects Shipped' },
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
                            Infrastructure first,<br />
                            <span className="italic" style={{ color: '#6B6B76' }}>everything else second</span>
                        </h2>

                        <div className="space-y-5 font-sans text-base leading-relaxed" style={{ color: '#ADADB8' }}>
                            <p>
                                DevOps engineer focused on cloud-native infrastructure, GitOps automation,
                                and Kubernetes-based delivery systems. I build the platforms that let
                                developers ship without thinking about the platform.
                            </p>
                            <p>
                                Hands-on with k3s clusters, Flux CD, Cilium eBPF networking, Ansible provisioning,
                                and secrets management. I also code across frontend, backend, and mobile —
                                which means I understand exactly what I'm deploying and why it breaks at 3 AM.
                            </p>
                            <p>
                                Published{' '}
                                <em style={{ color: '#EFEFEC' }}>'From Code to Cluster'</em>
                                {' '}on Kubernetes in UKH Voice magazine. Graduating 2026 from the{' '}
                                <span style={{ color: '#EFEFEC' }}>University of Kurdistan Hewlêr</span>.
                            </p>
                        </div>

                        {/* Dev humor #1 */}
                        <div
                            className="mt-10 p-5 reveal"
                            style={{
                                background: '#0D0D10',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderLeft: '3px solid rgba(201,168,76,0.4)',
                            }}
                        >
                            <p className="font-mono text-xs" style={{ color: '#3D3D46' }}>$ kubectl get feelings</p>
                            <p className="font-mono text-xs mt-1" style={{ color: '#C9A84C' }}>
                                No resources found in production namespace.
                            </p>
                        </div>

                        <div
                            className="mt-6 p-6 reveal"
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

import React from 'react';
import HeroCanvas from './HeroCanvas';

const Hero = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-24 pb-16 relative"
            style={{ background: '#07070A', overflow: 'hidden' }}
        >
            <HeroCanvas />
            <div className="container w-full" style={{ position: 'relative', zIndex: 1 }}>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 xl:gap-24 items-center">

                    {/* Left: Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <span className="w-8 h-px" style={{ background: '#C9A84C' }} />
                            <span
                                className="font-sans text-xs tracking-[0.2em] uppercase"
                                style={{ color: '#C9A84C' }}
                            >
                                DevOps Engineer
                            </span>
                        </div>

                        <h1
                            className="font-display font-light leading-[0.92] mb-10"
                            style={{
                                fontSize: 'clamp(3rem, 8vw, 7rem)',
                                color: '#EFEFEC',
                            }}
                        >
                            Chenar<br />
                            <span
                                className="font-display italic font-light"
                                style={{ color: '#6B6B76' }}
                            >
                                Abdulrazaq
                            </span>
                        </h1>

                        <p
                            className="font-sans text-lg leading-relaxed max-w-lg mb-10"
                            style={{ color: '#ADADB8' }}
                        >
                            DevOps engineer who automates everything — clusters, pipelines,
                            and the occasional existential crisis. Graduating 2026 from the
                            University of Kurdistan Hewlêr. Based in Erbil, Iraq.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-12">
                            <button
                                onClick={() => scrollTo('contact')}
                                className="btn btn-primary"
                            >
                                Get in touch
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scrollTo('projects')}
                                className="btn btn-outline"
                            >
                                View projects
                            </button>
                        </div>

                        <div className="flex items-center gap-6">
                            <a
                                href="https://github.com/Chenarrr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-xs tracking-widest uppercase transition-colors duration-200 flex items-center gap-2"
                                style={{ color: '#6B6B76' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B6B76')}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                            <span className="w-px h-4" style={{ background: 'rgba(255,255,255,0.1)' }} />
                            <a
                                href="tel:+9647502265572"
                                className="font-sans text-xs tracking-widest uppercase transition-colors duration-200"
                                style={{ color: '#6B6B76' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B6B76')}
                            >
                                +964 750 226 5572
                            </a>
                        </div>
                    </div>

                    {/* Right: Code card */}
                    <div className="hidden lg:block">
                        <div
                            style={{
                                background: '#0D0D10',
                                border: '1px solid rgba(255,255,255,0.07)',
                                borderRadius: '2px',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Terminal header */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 16px',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                                    background: '#111116',
                                }}
                            >
                                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                                <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                                <span className="font-mono text-[10px] tracking-wide ml-3" style={{ color: '#3D3D46' }}>
                                    engineer.yaml
                                </span>
                            </div>

                            {/* Code */}
                            <div className="font-mono text-sm leading-7 p-6">
                                <div style={{ color: '#3D3D46' }}>
                                    <span style={{ color: '#C9A84C' }}>apiVersion</span>
                                    <span style={{ color: '#6B6B76' }}>: </span>
                                    <span style={{ color: '#ADADB8' }}>humans/v1</span>
                                </div>
                                <div style={{ color: '#C9A84C' }}>kind<span style={{ color: '#6B6B76' }}>: </span><span style={{ color: '#ADADB8' }}>DevOpsEngineer</span></div>
                                <div style={{ color: '#C9A84C' }}>metadata<span style={{ color: '#6B6B76' }}>:</span></div>
                                <div className="pl-5">
                                    <span style={{ color: '#C9A84C' }}>name</span>
                                    <span style={{ color: '#6B6B76' }}>: </span>
                                    <span style={{ color: '#ADADB8' }}>chenar-abdulrazaq</span>
                                </div>
                                <div className="pl-5">
                                    <span style={{ color: '#C9A84C' }}>location</span>
                                    <span style={{ color: '#6B6B76' }}>: </span>
                                    <span style={{ color: '#ADADB8' }}>erbil-iraq</span>
                                </div>
                                <div style={{ color: '#C9A84C' }}>spec<span style={{ color: '#6B6B76' }}>:</span></div>
                                <div className="pl-5">
                                    <span style={{ color: '#C9A84C' }}>stack</span>
                                    <span style={{ color: '#6B6B76' }}>:</span>
                                </div>
                                <div className="pl-10">
                                    <span style={{ color: '#6B6B76' }}>- </span>
                                    <span style={{ color: '#ADADB8' }}>k3s / Kubernetes</span>
                                </div>
                                <div className="pl-10">
                                    <span style={{ color: '#6B6B76' }}>- </span>
                                    <span style={{ color: '#ADADB8' }}>Flux CD / Argo CD</span>
                                </div>
                                <div className="pl-10">
                                    <span style={{ color: '#6B6B76' }}>- </span>
                                    <span style={{ color: '#ADADB8' }}>Docker / Helm</span>
                                </div>
                                <div className="pl-10">
                                    <span style={{ color: '#6B6B76' }}>- </span>
                                    <span style={{ color: '#ADADB8' }}>Ansible / Terraform</span>
                                </div>
                                <div className="pl-5 mt-1">
                                    <span style={{ color: '#C9A84C' }}>available</span>
                                    <span style={{ color: '#6B6B76' }}>: </span>
                                    <span style={{ color: '#C9A84C' }}>true</span>
                                </div>
                                <div className="pl-5">
                                    <span style={{ color: '#C9A84C' }}>graduating</span>
                                    <span style={{ color: '#6B6B76' }}>: </span>
                                    <span style={{ color: '#ADADB8' }}>2026</span>
                                </div>
                                <div className="mt-4" style={{ color: '#3D3D46' }}>
                                    <div className="font-mono text-xs mb-2">
                                        # last_incident: <span style={{ color: '#6B6B76' }}>not my fault</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>#</span>
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                width: 7,
                                                height: 16,
                                                background: '#C9A84C',
                                                opacity: 0.8,
                                                animation: 'blink 1.1s step-end infinite',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 1,
                }}
            >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: '#3D3D46' }}>scroll</span>
                <div style={{ animation: 'scrollBounce 1.8s ease-in-out infinite' }}>
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                        <rect x="4.5" y="2" width="3" height="6" rx="1.5" fill="#C9A84C" opacity="0.6" style={{ animation: 'scrollDot 1.8s ease-in-out infinite' }} />
                        <rect x="0.5" y="0.5" width="11" height="19" rx="5.5" stroke="rgba(255,255,255,0.15)" />
                    </svg>
                </div>
            </div>

            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 0.8; }
                    50% { opacity: 0; }
                }
                @keyframes scrollBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(5px); }
                }
                @keyframes scrollDot {
                    0% { transform: translateY(0); opacity: 0.6; }
                    50% { transform: translateY(4px); opacity: 1; }
                    100% { transform: translateY(0); opacity: 0.6; }
                }
            `}</style>
        </section>
    );
};

export default Hero;

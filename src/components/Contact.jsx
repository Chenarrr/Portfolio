import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: '#07070A' }}>
            <div className="container">
                <div className="section-label">
                    <span className="section-number">05</span>
                    <span className="section-line" />
                    <span className="section-name">Contact</span>
                </div>

                <div className="max-w-3xl reveal">
                    <h2
                        className="font-display font-light leading-tight mb-8"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#EFEFEC' }}
                    >
                        Let's build<br />
                        <span className="italic" style={{ color: '#6B6B76' }}>something together</span>
                    </h2>

                    <p className="font-sans text-lg leading-relaxed mb-12 max-w-lg" style={{ color: '#ADADB8' }}>
                        Open to internships, collaborative projects, and freelance opportunities.
                        Currently available and based in Erbil, Iraq.
                    </p>

                    <a
                        href="mailto:chenar.abdulrazaq@ukh.edu.krd"
                        className="group inline-flex items-center gap-3 mb-16 transition-colors duration-200"
                        style={{ color: '#EFEFEC' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#EFEFEC')}
                    >
                        <span
                            className="font-display font-light"
                            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
                        >
                            chenar.abdulrazaq@ukh.edu.krd
                        </span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                        >
                            <path d="M7 7h10v10M7 17L17 7" />
                        </svg>
                    </a>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-px max-w-xl"
                        style={{ background: 'rgba(255,255,255,0.07)' }}
                    >
                        <div className="p-6" style={{ background: '#07070A' }}>
                            <p
                                className="font-sans text-xs tracking-widest uppercase mb-2"
                                style={{ color: '#3D3D46' }}
                            >
                                Phone
                            </p>
                            <a
                                href="tel:+9647502265572"
                                className="font-sans text-sm transition-colors duration-200"
                                style={{ color: '#ADADB8' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#ADADB8')}
                            >
                                +964 750 226 5572
                            </a>
                        </div>
                        <div className="p-6" style={{ background: '#07070A' }}>
                            <p
                                className="font-sans text-xs tracking-widest uppercase mb-2"
                                style={{ color: '#3D3D46' }}
                            >
                                GitHub
                            </p>
                            <a
                                href="https://github.com/Chenarrr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-sm transition-colors duration-200"
                                style={{ color: '#ADADB8' }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#ADADB8')}
                            >
                                @Chenarrr
                            </a>
                        </div>
                        <div className="p-6" style={{ background: '#07070A' }}>
                            <p
                                className="font-sans text-xs tracking-widest uppercase mb-2"
                                style={{ color: '#3D3D46' }}
                            >
                                Location
                            </p>
                            <p className="font-sans text-sm" style={{ color: '#ADADB8' }}>
                                Erbil, Iraq
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

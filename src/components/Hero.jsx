import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Software Engineering Student & Web Developer';
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="section relative pt-32 overflow-hidden">
            {/* Floating Shapes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500 to-purple-800 opacity-30 blur-3xl top-[10%] left-[10%] animate-float"></div>
                <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-30 blur-3xl bottom-[20%] right-[15%] animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 blur-3xl top-1/2 left-1/2 animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center relative z-10">
                <div className="animate-fadeInUp space-y-6">
                    <div className="flex items-center gap-3 text-xl text-gray-400">
                        <span className="text-4xl inline-block animate-[wave_2s_ease-in-out_infinite]" style={{ transformOrigin: '70% 70%' }}>👋</span>
                        <span>Hello, I'm</span>
                    </div>

                    <h1 className="leading-tight">
                        Chenar Abdulrazaq
                    </h1>

                    <div className="text-2xl md:text-3xl text-gray-400 font-medium min-h-[60px]">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{displayText}</span>
                        <span className="text-cyan-400 animate-[blink_1s_step-end_infinite]">|</span>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                        Enthusiastic software engineering student with a strong background in Web and Mobile
                        Development. I am committed to developing creative solutions and
                        adapting to new technologies. Based in Erbil, Iraq.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <button onClick={scrollToContact} className="btn btn-primary">
                            Get In Touch
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button onClick={scrollToProjects} className="btn btn-outline">
                            View Projects
                        </button>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <a
                            href="https://github.com/Chenarrr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1a24] border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-800 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(102,126,234,0.4)] hover:border-transparent transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:chenar.abdulrazaq@ukh.edu.krd"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1a24] border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-800 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(102,126,234,0.4)] hover:border-transparent transition-all duration-300"
                            aria-label="Email"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                        <a
                            href="tel:+9647502265572"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1a24] border border-white/10 text-gray-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-800 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(102,126,234,0.4)] hover:border-transparent transition-all duration-300"
                            aria-label="Phone"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex justify-center items-center animate-float">
                    <div className="relative w-96 h-96 flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500 to-purple-800 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
                        <div className="relative w-80 h-80 bg-[rgba(26,26,36,0.6)] backdrop-blur-lg border-2 border-white/10 rounded-full flex items-center justify-center overflow-hidden group hover:border-white/20 transition-all duration-300">
                            <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-sm animate-fadeIn" style={{ animationDelay: '1s' }}>
                <div className="w-6 h-10 border-2 border-white/30 rounded-2xl flex justify-center pt-2">
                    <div className="w-1 h-2 bg-cyan-400 rounded-full animate-[scroll_1.5s_ease-in-out_infinite]"></div>
                </div>
                <p>Scroll Down</p>
            </div>
        </section>
    );
};

export default Hero;

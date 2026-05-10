import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
            style={{
                background: scrolled ? 'rgba(7,7,10,0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
            }}
        >
            <div className="container flex justify-between items-center py-5">
                <button
                    onClick={() => scrollTo('home')}
                    className="font-display text-xl font-light tracking-wide transition-colors duration-200 hover:opacity-80"
                    style={{ color: '#EFEFEC' }}
                >
                    Chenar{' '}
                    <span style={{ color: '#C9A84C' }}>Abdulrazaq</span>
                </button>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className="font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200 relative pb-0.5"
                            style={{
                                color: activeSection === item.id ? '#EFEFEC' : '#6B6B76',
                            }}
                        >
                            {item.label}
                            <span
                                className="absolute bottom-0 left-0 h-px transition-all duration-200"
                                style={{
                                    background: '#C9A84C',
                                    width: activeSection === item.id ? '100%' : '0%',
                                }}
                            />
                        </button>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden flex flex-col gap-1.5 w-6 cursor-pointer p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className="w-full h-px transition-all duration-200"
                        style={{
                            background: '#EFEFEC',
                            transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
                        }}
                    />
                    <span
                        className="w-4 h-px transition-all duration-200"
                        style={{
                            background: '#EFEFEC',
                            opacity: menuOpen ? 0 : 1,
                        }}
                    />
                    <span
                        className="w-full h-px transition-all duration-200"
                        style={{
                            background: '#EFEFEC',
                            transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
                        }}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className="md:hidden py-6"
                    style={{
                        background: 'rgba(7,7,10,0.98)',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    <div className="container flex flex-col gap-5">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className="text-left font-sans text-sm tracking-[0.15em] uppercase transition-colors duration-200"
                                style={{ color: '#6B6B76' }}
                                onMouseEnter={(e) => (e.target.style.color = '#EFEFEC')}
                                onMouseLeave={(e) => (e.target.style.color = '#6B6B76')}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

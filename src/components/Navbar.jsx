import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(10,10,15,0.95)] backdrop-blur-lg py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
            }`}>
            <div className="container flex justify-between items-center">
                <div className="text-3xl font-bold font-display cursor-pointer transition-transform hover:scale-105">
                    <span className="text-gradient">Chenar's Profile</span>
                </div>

                <div className={`flex gap-8 items-center max-md:fixed max-md:top-[70px] max-md:left-0 max-md:w-full max-md:flex-col max-md:bg-[rgba(13,13,26,0.98)] max-md:backdrop-blur-lg max-md:p-8 max-md:gap-6 max-md:border-b max-md:border-white/10 max-md:transition-transform max-md:duration-300 ${menuOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
                    }`}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative px-0 py-2 text-base font-medium transition-colors duration-300 max-md:text-xl max-md:w-full max-md:text-center ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                                } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:to-purple-800 after:transition-transform after:duration-300 ${activeSection === item.id ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button
                    className="hidden max-md:block p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="flex flex-col gap-1.5 w-8">
                        <span className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-purple-800 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}></span>
                        <span className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-purple-800 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'
                            }`}></span>
                        <span className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-purple-800 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}></span>
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

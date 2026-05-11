import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
        );

        const els = document.querySelectorAll('.reveal');
        els.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            {/* Scroll progress bar */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '2px',
                    width: `${scrollProgress}%`,
                    background: 'linear-gradient(90deg, #C9A84C, #D4B55E)',
                    zIndex: 100,
                    transition: 'width 0.08s ease-out',
                    transformOrigin: 'left',
                }}
            />
            <Navbar activeSection={activeSection} />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

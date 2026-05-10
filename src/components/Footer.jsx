import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="py-8"
            style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                background: '#07070A',
            }}
        >
            <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex flex-col gap-1">
                    <p className="font-sans text-xs tracking-wide" style={{ color: '#3D3D46' }}>
                        © {currentYear} Chenar Abdulrazaq
                    </p>
                    <p className="font-mono text-[10px]" style={{ color: '#222228' }}>
                        # it works on my cluster
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Chenarrr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs tracking-widest uppercase transition-colors duration-200"
                        style={{ color: '#3D3D46' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#3D3D46')}
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:chenar.abdulrazaq@ukh.edu.krd"
                        className="font-sans text-xs tracking-widest uppercase transition-colors duration-200"
                        style={{ color: '#3D3D46' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#3D3D46')}
                    >
                        Email
                    </a>
                    <button
                        onClick={scrollToTop}
                        className="font-sans text-xs tracking-widest uppercase transition-colors duration-200 cursor-pointer"
                        style={{ color: '#3D3D46' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#3D3D46')}
                        aria-label="Back to top"
                    >
                        Top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

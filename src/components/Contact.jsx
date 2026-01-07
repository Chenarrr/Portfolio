import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            title: 'Email',
            value: 'chenar.abdulrazaq@ukh.edu.krd',
            link: 'mailto:chenar.abdulrazaq@ukh.edu.krd'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            title: 'Phone',
            value: '+964 750 226 5572',
            link: 'tel:+9647502265572'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: 'Location',
            value: 'Erbil, Iraq',
            link: null
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            title: 'GitHub',
            value: 'github.com/Chenarrr',
            link: 'https://github.com/Chenarrr'
        }
    ];

    return (
        <section id="contact" className="section bg-[#13131a]">
            <div className="container">
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p className="text-center max-w-2xl mx-auto text-gray-300 text-lg mt-4">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 mt-12">
                    <div>
                        <h3 className="text-3xl font-bold text-gradient mb-4">Let's Talk</h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-5 bg-[rgba(26,26,36,0.6)] backdrop-blur-lg border border-white/10 rounded-xl hover:translate-x-2 hover:border-purple-500/50 hover:shadow-lg transition-all duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-800 rounded-xl text-white flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-500 font-medium mb-1">{item.title}</h4>
                                        {item.link ? (
                                            <a href={item.link} target={item.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className="card" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-white font-medium text-sm">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                                className="w-full px-5 py-3.5 bg-[#1a1a24] border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] transition-all duration-300 placeholder:text-gray-600"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-white font-medium text-sm">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                                className="w-full px-5 py-3.5 bg-[#1a1a24] border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] transition-all duration-300 placeholder:text-gray-600"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="subject" className="block mb-2 text-white font-medium text-sm">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="What's this about?"
                                className="w-full px-5 py-3.5 bg-[#1a1a24] border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] transition-all duration-300 placeholder:text-gray-600"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-white font-medium text-sm">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell me about your project..."
                                className="w-full px-5 py-3.5 bg-[#1a1a24] border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] transition-all duration-300 resize-y min-h-[120px] placeholder:text-gray-600"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-full justify-center mt-4 text-lg">
                            Send Message
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

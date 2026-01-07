import React from 'react';

const About = () => {
    return (
        <section id="about" className="section bg-[#13131a]">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
                    <div className="space-y-6">
                        <p className="text-xl text-white font-medium leading-relaxed">
                            I'm a passionate software engineering student at the <strong className="text-gradient">University of Kurdistan</strong>,
                            expected to graduate in 2026. My journey in tech is driven by curiosity and a love for
                            creating impactful digital solutions.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            With hands-on experience in both <strong className="text-gradient">web and mobile development</strong>, I've worked
                            on diverse projects ranging from workout tracking apps to lost-and-found mobile applications.
                            I specialize in building responsive, user-centric applications using modern technologies like
                            React, Flutter, and the MERN stack.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            Currently, I'm expanding my expertise through my internship at the <strong className="text-gradient">AI Centre at UKH</strong>,
                            where I apply UI/UX principles and collaborate with cross-functional teams to develop
                            intuitive web interfaces.
                        </p>

                        <div className="space-y-4 mt-8">
                            {[
                                { icon: '🎓', title: 'Education', text: 'Software Engineering\nUniversity of Kurdistan', year: '2021 - 2026' },
                                { icon: '📍', title: 'Location', text: 'Erbil, Iraq' },
                                { icon: '💼', title: 'Focus Areas', text: 'Web Development\nMobile Apps\nUI/UX Design' }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 p-6 bg-[rgba(26,26,36,0.6)] backdrop-blur-lg border border-white/10 rounded-xl hover:translate-x-2 hover:border-purple-500/50 hover:shadow-lg transition-all duration-300">
                                    <div className="text-4xl min-w-[50px] flex items-center justify-center">{item.icon}</div>
                                    <div>
                                        <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>
                                        <p className="text-gray-300 whitespace-pre-line leading-relaxed">{item.text}</p>
                                        {item.year && (
                                            <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-800 text-white rounded-full text-sm font-semibold">{item.year}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>, number: '3+', label: 'Years of Study' },
                            { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>, number: '5+', label: 'Projects Completed' },
                            { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>, number: '3', label: 'Professional Roles' },
                            { icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>, number: '10+', label: 'Technologies' }
                        ].map((stat, index) => (
                            <div key={index} className="card text-center group">
                                <div className="w-15 h-15 mx-auto mb-4 flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-800 rounded-xl text-white">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.number}</h3>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

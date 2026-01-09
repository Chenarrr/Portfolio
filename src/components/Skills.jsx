import React from 'react';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Frontend',
            icon: '🎨',
            skills: ['React JS', 'Tailwind CSS', 'Next.js']
        },
        {
            title: 'Backend & DB',
            icon: '⚙️',
            skills: ['Express.js', 'Nest JS', 'MongoDB', 'PostgreSQL']
        },
        {
            title: 'DevOps & Arch',
            icon: '�',
            skills: ['Docker', 'CI/CD', 'System Design', 'DevOps']
        }
    ];

    return (
        <section id="skills" className="section bg-[#0a0a0f] py-24">
            <div className="container mx-auto px-6">
                <div className="section-title mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Technical Stack
                    </h2>
                    <p className="text-gray-400 text-center max-w-xl mx-auto text-lg">
                        Focused on building scalable systems, automated pipelines, and high-performance applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className="bg-[#161620] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">
                                    {group.icon}
                                </span>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                                    {group.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm font-medium hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-white transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

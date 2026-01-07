import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'Web Developer Intern',
            company: 'AI Centre at UKH',
            period: 'Aug. 2024 - Nov. 2024',
            icon: '💻',
            responsibilities: [
                'Applied UI/UX principles to create intuitive and visually appealing web interfaces',
                'Collaborated with cross-functional teams to develop responsive web applications using React',
                'Enhanced user experience and engagement through modern design patterns',
                'Contributed to team projects using version control and agile methodologies'
            ]
        },
        {
            role: 'Product Manager',
            company: 'Ramyar Online Library',
            period: 'July 2022 - Jan. 2023',
            icon: '📚',
            responsibilities: [
                'Managed website content updates to maintain accurate and current information',
                'Monitored website performance to ensure optimal user experience and reliability',
                'Coordinated with development teams to implement feature enhancements efficiently',
                'Analyzed user data to guide product improvements and marketing strategies'
            ]
        },
        {
            role: 'Promoter',
            company: 'Aman Insurance',
            period: 'Sep. 2024 - Oct. 2024',
            icon: '🛡️',
            responsibilities: [
                'Engaged clients actively to increase brand awareness and customer interest',
                'Promoted services to expand market reach and enhance company visibility',
                'Collaborated with team members to optimize promotional strategies',
                'Monitored client feedback to improve engagement and service delivery'
            ]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-title">
                    <h2>Professional Experience</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-400"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative pl-20 animate-fadeInUp"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="absolute left-0 top-0 w-15 h-15 flex items-center justify-center">
                                    <div className="w-15 h-15 bg-gradient-to-r from-purple-500 to-purple-800 rounded-full flex items-center justify-center text-3xl shadow-[0_0_0_4px_#0a0a0f,0_0_20px_rgba(102,126,234,0.5)] transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-[0_0_0_4px_#0a0a0f,0_0_30px_rgba(102,126,234,0.8)]">
                                        {exp.icon}
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="flex justify-between items-start gap-4 mb-6 flex-wrap">
                                        <div>
                                            <h3 className="text-2xl text-white font-bold mb-2">{exp.role}</h3>
                                            <p className="text-lg text-gradient font-semibold">{exp.company}</p>
                                        </div>
                                        <span className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-full text-sm text-gray-400 whitespace-nowrap">{exp.period}</span>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.responsibilities.map((item, i) => (
                                            <li key={i} className="relative pl-8 text-gray-300 leading-relaxed">
                                                <span className="absolute left-0 text-cyan-400 text-xl font-bold">▹</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: '🎨',
            skills: [
                { name: 'React', level: 85 },
                { name: 'JavaScript', level: 80 },
                { name: 'HTML/CSS', level: 90 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'UI/UX Design', level: 75 }
            ]
        },
        {
            title: 'Backend Development',
            icon: '⚙️',
            skills: [
                { name: 'Node.js', level: 75 },
                { name: 'Express.js', level: 80 },
                { name: 'MongoDB', level: 70 },
                { name: 'REST APIs', level: 80 }
            ]
        },
        {
            title: 'Mobile Development',
            icon: '📱',
            skills: [
                { name: 'Flutter', level: 80 },
                { name: 'Dart', level: 75 },
                { name: 'Firebase', level: 70 },
                { name: 'Mobile UI/UX', level: 75 }
            ]
        },
        {
            title: 'Tools & Others',
            icon: '🛠️',
            skills: [
                { name: 'Git & GitHub', level: 85 },
                { name: 'Docker', level: 65 },
                { name: 'Vite', level: 80 },
                { name: 'Agile/Scrum', level: 70 }
            ]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Technologies</h2>
                    <p className="text-center max-w-2xl mx-auto text-gray-300 text-lg mt-4">
                        A comprehensive overview of my technical expertise and proficiency levels
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="card animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-white/10">
                                <span className="w-15 h-15 flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-800 rounded-xl text-4xl shadow-lg">{category.icon}</span>
                                <h3 className="text-2xl text-white font-bold">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="w-full">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-base text-white font-medium">{skill.name}</span>
                                            <span className="text-sm text-gray-400 font-semibold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-[#1a1a24] rounded-full overflow-hidden relative">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-purple-800 rounded-full relative shadow-[0_0_10px_rgba(102,126,234,0.5)] transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    animation: `growWidth 1s ease-out ${(index * 0.15) + (i * 0.1)}s backwards`
                                                }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
                                            </div>
                                        </div>
                                    </div>
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

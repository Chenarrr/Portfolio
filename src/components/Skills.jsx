import React from 'react';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Frontend Engineering',
            icon: '🖥️',
            description: 'Building responsive, performant, and interactive user interfaces.',
            skills: ['React JS', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Redux / Context API', 'Framer Motion', 'HTML5 / CSS3', 'JavaScript (ES6+)']
        },
        {
            title: 'Backend Systems',
            icon: '⚙️',
            description: 'Designing robust server-side logic and scalable backends.',
            skills: ['Node.js', 'Express.js', 'Nest JS', 'RESTful APIs', 'GraphQL', 'Prisma / TypeORM', 'Python / Go (Learning)']
        },
        {
            title: 'Data & Security',
            icon: '🛡️',
            description: 'Managing complex data structures and secure authentication.',
            skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Mongoose', 'JWT / OAuth2', 'Bcrypt', 'Database Schema Design']
        },
        {
            title: 'DevOps & Automation',
            icon: '🚀',
            description: 'Automating workflows and managing infrastructure.',
            skills: ['Docker & Compose', 'GitHub Actions', 'CI/CD Pipelines', 'Linux / Bash Scripting', 'Nginx', 'Vercel / Netlify', 'PM2']
        },
        {
            title: 'Systems & Architecture',
            icon: '🏛️',
            description: 'Designing for scale, reliability, and maintainability.',
            skills: ['System Design', 'Microservices', 'Event-Driven Architecture', 'Load Balancing', 'API Gateway', 'Caching Strategies']
        },
        {
            title: 'Tools & Documentation',
            icon: '🛠️',
            description: 'Professional development environment and standards.',
            skills: ['Git / GitHub', 'Postman / Insomnia', 'Docker Desktop', 'Swagger / OpenAPI', 'Agile / Scrum', 'Markdown', 'Unit Testing']
        }
    ];

    return (
        <section id="skills" className="section bg-[#0a0a0f] py-24 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="section-title mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
                        Technical Stack
                    </h2>
                    <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                        Full-spectrum engineering capabilities from hardware-adjacent backend logic
                        to fluid frontend experiences and automated cloud infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full bg-[#0f0f15] border border-white/5 p-8 hover:bg-[#12121a] hover:border-white/10 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                                    {group.icon}
                                </span>
                                <h3 className="text-xl font-bold text-white tracking-wide uppercase">
                                    {group.title}
                                </h3>
                            </div>

                            <p className="text-gray-500 text-sm mb-8 font-medium leading-normal">
                                {group.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {group.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-[#1a1a24] border border-white/5 text-gray-400 text-xs font-semibold rounded hover:bg-white hover:text-black hover:border-white transition-all duration-200 cursor-default uppercase tracking-widest"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .section-title h2 {
                    letter-spacing: -0.05em;
                }
            `}</style>
        </section>
    );
};

export default Skills;

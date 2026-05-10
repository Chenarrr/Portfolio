import React from 'react';
import WireframeShape from './WireframeShape';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Frontend',
            skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS'],
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express.js', 'Nest.js', 'PHP', 'RESTful APIs'],
        },
        {
            title: 'Mobile',
            skills: ['Flutter', 'Firebase Auth', 'Firestore', 'FCM', 'Cloud Storage', 'Cloud Functions'],
        },
        {
            title: 'Databases',
            skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Redis'],
        },
        {
            title: 'DevOps & Cloud',
            skills: ['Docker', 'Podman', 'Kubernetes', 'Helm', 'Flux CD', 'Argo CD', 'GitHub Actions', 'CI/CD', 'Rancher'],
        },
        {
            title: 'Systems & Other',
            skills: ['Linux (Fedora, Ubuntu)', 'Proxmox', 'Bash', 'Git', 'Pulumi', 'Terraform', 'Unity / C#', 'Blender', 'Arduino'],
        },
    ];

    return (
        <section id="skills" className="section" style={{ background: '#07070A' }}>
            <div className="container">
                <div className="section-label">
                    <span className="section-number">04</span>
                    <span className="section-line" />
                    <span className="section-name">Skills</span>
                </div>

                <div className="flex items-start justify-between mb-16 gap-8">
                    <h2
                        className="font-display font-light leading-tight"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#EFEFEC' }}
                    >
                        Technical<br />
                        <span className="italic" style={{ color: '#6B6B76' }}>stack</span>
                    </h2>
                    <div className="hidden lg:block flex-shrink-0" style={{ marginTop: '-16px' }}>
                        <WireframeShape width={200} height={200} />
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
                    style={{ background: 'rgba(255,255,255,0.07)' }}
                >
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className="p-8 reveal"
                            style={{
                                background: '#07070A',
                                transition: 'background 0.2s ease, opacity 0.65s ease-out, transform 0.65s ease-out',
                                transitionDelay: `${index * 0.08}s`,
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#0D0D10')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = '#07070A')}
                        >
                            <h3
                                className="font-sans font-medium text-xs tracking-[0.15em] uppercase mb-6"
                                style={{ color: '#EFEFEC' }}
                            >
                                {group.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, i) => (
                                    <span key={i} className="tag">
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

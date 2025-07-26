import { Code, Palette, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "React, TypeScript, Node.js, Python, and modern frameworks"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized, fast, and scalable solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams and clients"
    }
  ];

  const techStack = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "Figma", "Tailwind CSS", "Three.js"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer and designer with 5+ years of experience 
              creating digital solutions that make a difference. I believe in the power of 
              thoughtful design and clean code to transform businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={skill.title}
                  className="group p-6 bg-gradient-card rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-surface-elevated rounded-2xl p-8 shadow-card">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-6 text-center">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full font-body text-sm font-medium hover:scale-105 transition-transform duration-200"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
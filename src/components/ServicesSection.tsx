import { Laptop, Smartphone, Paintbrush, Rocket, Database, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Laptop,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and responsive design",
      features: ["React & Next.js", "TypeScript", "API Development", "Database Design"],
      price: "From $3,000"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps that deliver native performance",
      features: ["React Native", "iOS & Android", "App Store Deployment", "Performance Optimization"],
      price: "From $5,000"
    },
    {
      icon: Paintbrush,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that users love and businesses need",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "From $2,000"
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience",
      features: ["Site Audits", "Performance Tuning", "SEO Optimization", "Core Web Vitals"],
      price: "From $1,500"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable server architecture and robust API development",
      features: ["RESTful APIs", "GraphQL", "Database Design", "Cloud Deployment"],
      price: "From $2,500"
    },
    {
      icon: Shield,
      title: "Consulting",
      description: "Technical guidance and strategic planning for your projects",
      features: ["Architecture Review", "Tech Stack Selection", "Team Training", "Code Review"],
      price: "From $150/hr"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Services
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, I provide comprehensive digital solutions 
              tailored to your specific needs and business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group relative p-8 bg-gradient-card rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="font-body text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-lg font-bold text-primary">
                        {service.price}
                      </span>
                      <Button variant="3d" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="font-body text-muted-foreground mb-8">
              Need something custom? Let's discuss your project requirements.
            </p>
            <Button 
              variant="3d" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
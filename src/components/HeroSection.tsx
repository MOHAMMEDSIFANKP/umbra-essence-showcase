import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 15, 23, 0.8), rgba(15, 15, 23, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading text-6xl md:text-8xl font-bold leading-tight">
            <span className="block text-foreground mb-2">Activate</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Your Brand
            </span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack developer & designer crafting digital experiences that 
            transform ideas into powerful, scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="hero"
              onClick={scrollToAbout}
              className="group"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </Button>
            
            <Button 
              variant="3d-outline" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
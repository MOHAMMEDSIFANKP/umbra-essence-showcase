import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-elevated border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-heading text-2xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Alex Morgan
                </span>
              </div>
              <p className="font-body text-muted-foreground mt-2">
                Full-Stack Developer & Designer
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="font-body text-muted-foreground flex items-center justify-center md:justify-end">
                Made with 
                <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
                and lots of coffee
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                © {currentYear} Alex Morgan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
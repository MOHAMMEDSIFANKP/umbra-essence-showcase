import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   phone: "",
   enquiry: "",
 });

 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();
 const sheeturl = import.meta.env.VITE_SHEET_URL;

 const handleChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value,
   });
 };

 const handleSubmit = async (e) => {
   e.preventDefault();
   setLoading(true);

   try {
     console.log("Submitting to:", sheeturl);
     console.log("Form Data:", JSON.stringify(formData));

     await fetch(sheeturl, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       mode: "no-cors",
       body: JSON.stringify(formData),
     });
     console.log(formData);

     // Ensure success response from API

     toast.success("Message sent successfully! 🎉");
     setFormData({
       name: "",
       email: "",
       phone: "",
       enquiry: "",
     });

     setTimeout(() => {
       navigate("/");
     }, 2000);
   } catch (error) {
     console.error("Error submitting form:", error);
     toast.error("Failed to send location. Please try again.");
   } finally {
     setLoading(false);
   }
 };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "devxtechnology.in@gmail.com",
      href: "mailto:devxtechnology.in@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9946840416",
      href: "tel:+919946840416"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your project to life? I'd love to hear about your
              ideas and discuss how we can create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Send a Message
                </h3>
                <p className="font-body text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-body text-sm font-medium text-foreground mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body text-sm font-medium text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body text-sm font-medium text-foreground mb-2"
                  >
                    phone * (Please include country code)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="Phone number Including country code"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry"
                    className="block font-body text-sm font-medium text-foreground mb-2"
                  >
                    Enquiry *
                  </label>
                  <textarea
                    id="enquiry"
                    name="enquiry"
                    required
                    rows={6}
                    value={formData.enquiry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="3d"
                  size="xl"
                  className="w-full group"
                >
                  <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Get In Touch
                </h3>
                <p className="font-body text-muted-foreground">
                  Prefer to reach out directly? You can find me through any of
                  these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center p-4 bg-gradient-card rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-body text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="font-body font-medium text-foreground">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="pt-8">
                <h4 className="font-heading text-xl font-bold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gradient-card rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow ${social.color}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 bg-gradient-card rounded-2xl shadow-card">
                <h4 className="font-heading text-xl font-bold text-foreground mb-2">
                  Response Time
                </h4>
                <p className="font-body text-muted-foreground text-sm">
                  I typically respond to all inquiries within 24 hours. For
                  urgent projects, feel free to call directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
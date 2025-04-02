
import { MessageSquare, Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would be implemented here
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-ko-primary/10 dark:bg-ko-primary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in <span className="text-gradient">Touch</span></h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Schedule a demo or discuss how we can help with your AI and automation needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-ko-secondary/20 dark:bg-ko-secondary/30 text-ko-secondary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">info@kosoluciones.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-ko-accent/20 dark:bg-ko-accent/30 text-ko-accent">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-ko-primary/20 dark:bg-ko-primary/30 text-ko-primary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">AI Chatbot</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our AI assistant is available 24/7 to answer your questions
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-2 border-ko-secondary text-ko-secondary hover:bg-ko-secondary/10"
                  >
                    Chat with AI
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 glassmorphism rounded-xl">
              <h4 className="font-semibold mb-2">Join our community</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for the latest updates on AI, automation, and training opportunities.
              </p>
              
              <form className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-white/50 dark:bg-gray-900/50"
                />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
          
          <div className="bg-white/50 dark:bg-ko-dark/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-6">Request a Demo</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe"
                    className="bg-white/80 dark:bg-gray-900/80"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com"
                    className="bg-white/80 dark:bg-gray-900/80"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Your company name"
                    className="bg-white/80 dark:bg-gray-900/80"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-1">
                    Interest Area
                  </label>
                  <select 
                    id="interest" 
                    className="w-full rounded-md border border-input bg-white/80 dark:bg-gray-900/80 px-3 py-2 text-sm ring-offset-background"
                  >
                    <option>On-Premise AI Solutions</option>
                    <option>Enterprise Automation</option>
                    <option>Training & Upskilling</option>
                    <option>Secure IT Infrastructure</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your needs..."
                  rows={4}
                  className="bg-white/80 dark:bg-gray-900/80"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-ko-secondary to-ko-accent hover:opacity-90"
              >
                Request Demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100/50 dark:bg-gray-900/50 pt-16 pb-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">KO Soluciones</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#solutions" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">On-Premise AI</a></li>
              <li><a href="#solutions" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Enterprise Automation</a></li>
              <li><a href="#solutions" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Cursos Training</a></li>
              <li><a href="#solutions" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">IT Infrastructure</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Whitepapers</a></li>
              <li><a href="#case-studies" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ko-secondary to-ko-accent mr-2"></div>
            <span className="font-bold text-lg">KO Soluciones</span>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} KO Soluciones Generales. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

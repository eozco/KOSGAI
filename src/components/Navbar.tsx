
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-ko-dark/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ko-secondary to-ko-accent mr-2"></div>
            <span className="text-gradient font-bold">KO Soluciones</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="px-3 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="px-3 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                About
              </a>
              <a href="#solutions" className="px-3 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                Solutions
              </a>
              <a href="#case-studies" className="px-3 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                Case Studies
              </a>
              <a href="#blog" className="px-3 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                Blog
              </a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Right side - CTA and Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
            <Button className="ml-4 hidden sm:block bg-gradient-to-r from-ko-primary to-ko-secondary hover:opacity-90 transition-opacity">
              Request Demo
            </Button>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-ko-dark border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#about"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#solutions"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              Solutions
            </a>
            <a 
              href="#case-studies"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              Case Studies
            </a>
            <a 
              href="#blog"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              Blog
            </a>
            <a 
              href="#contact"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-ko-primary to-ko-secondary hover:opacity-90">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

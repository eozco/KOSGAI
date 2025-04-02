import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-ko-dark/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 ml-2">
              <a href="#home" className="px-2 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                {t("home")}
              </a>
              <a href="#about" className="px-2 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                {t("about")}
              </a>
              <a href="#solutions" className="px-2 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                {t("solutions")}
              </a>
              <a href="#case-studies" className="px-2 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                {t("case-studies")}
              </a>
              <a href="#blog" className="px-2 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                {t("blog")}
              </a>
              <a href="#contact" className="px-2 py-2 text-sm font-medium hover:text-ko-secondary transition-colors duration-200">
                {t("contact")}
              </a>
            </div>
          </div>

          {/* Right side - Language Toggle, Theme Toggle, CTA */}
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button className="ml-2 hidden sm:block bg-gradient-to-r from-ko-primary to-ko-secondary hover:opacity-90 transition-opacity">
              {t("request_demo")}
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
              {t("home")}
            </a>
            <a 
              href="#about"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              {t("about")}
            </a>
            <a 
              href="#solutions"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              {t("solutions")}
            </a>
            <a 
              href="#case-studies"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              {t("case-studies")}
            </a>
            <a 
              href="#blog"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              {t("blog")}
            </a>
            <a 
              href="#contact"
              className="block px-3 py-2 text-base font-medium hover:text-ko-secondary"
              onClick={toggleMenu}
            >
              {t("contact")}
            </a>
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-ko-primary to-ko-secondary hover:opacity-90">
                {t("request_demo")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

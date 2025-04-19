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

  const navLinks = [
    { href: "#home", label: "home" },
    { href: "#about", label: "about" },
    { href: "#solutions", label: "solutions" },
    { href: "#case-studies", label: "case-studies" },
    { href: "#blog", label: "blog" },
    { href: "#contact", label: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-purple-100/20 dark:border-purple-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 ml-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  {t(link.label)}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Language Toggle, Theme Toggle, CTA */}
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button 
              className="ml-2 hidden sm:block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                window.setTimeout(() => {
                  (window as any).toast && (window as any).toast({
                    title: t("request_demo"),
                    description: t("We'll be in touch soon!"),
                  });
                }, 700);
              }}
            >
              {t("request_demo")}
            </Button>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-purple-100/20 dark:border-purple-900/20">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-200"
              onClick={toggleMenu}
            >
              {t(link.label)}
            </a>
          ))}
          <div className="pt-2">
            <Button className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                window.setTimeout(() => {
                  (window as any).toast && (window as any).toast({
                    title: t("request_demo"),
                    description: t("We'll be in touch soon!"),
                  });
                }, 700);
              }}
            >
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

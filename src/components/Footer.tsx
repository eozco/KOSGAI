import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100/50 dark:bg-gray-900/50 pt-16 pb-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Inbloqs</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">{t("about_us")}</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">{t("contact")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t("solutions")}</h3>
            <ul className="space-y-2">
              <li><a href="#solutions" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">{t("on_premise_ai")}</a></li>
              <li><a href="#solutions" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">{t("enterprise_automation")}</a></li>
              <li><a href="#solutions" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">{t("capacitaciones")}</a></li>
              <li><a href="#solutions" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">{t("it_infrastructure")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t("resources")}</h3>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">{t("blog")}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">{t("whitepapers")}</a></li>
              <li><a href="#case-studies" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">{t("case_studies")}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-ko-secondary transition-colors">{t("documentation")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t("contact_info")}</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@inbloqs.com" className="hover:text-inbloqs-secondary transition-colors">
                  info@inbloqs.com
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+523313195542" className="hover:text-ko-secondary transition-colors">
                  +52 331 319 5542
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Guadalajara, México
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo />
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
            &copy; {currentYear} KO Soluciones Generales. {t("rights_reserved")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          <div>
            <img 
              src="/logo-inbloqs.png" 
              alt="Inbloqs" 
              className="h-8 w-auto mb-6 dark:invert dark:brightness-200"
            />
            <p className="text-gray-400 mb-6">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/inbloqs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/inbloqs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/inbloqs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t("footer.company")}</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t("footer.about_us")}
                </a>
              </li>
              <li>
                <a 
                  href="#solutions" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t("footer.solutions")}
                </a>
              </li>
              <li>
                <a 
                  href="#case-studies" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t("footer.case_studies")}
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t("footer.blog")}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t("footer.services")}</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#solutions" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t("footer.on_premise_ai")}
                </a>
              </li>
              <li>
                <a 
                  href="#solutions" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t("footer.enterprise_automation")}
                </a>
              </li>
              <li>
                <a 
                  href="#training" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t("footer.training")}
                </a>
              </li>
              <li>
                <a 
                  href="#solutions" 
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t("footer.secure_infrastructure")}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t("footer.contact")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-400">info@inbloqs.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-400">+52 331 319 5542</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-400">Guadalajara, México</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-900/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Inbloqs. {t("footer.rights_reserved")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
              >
                {t("footer.privacy_policy")}
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
              >
                {t("footer.terms_of_service")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

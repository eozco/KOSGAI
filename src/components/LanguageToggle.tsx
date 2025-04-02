
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="font-medium flex items-center gap-1 transition-all hover:bg-gradient-to-r hover:from-ko-secondary/20 hover:to-ko-primary/20"
    >
      <Globe className="h-4 w-4" />
      <motion.span
        key={language}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {language === "en" ? "ES" : "EN"}
      </motion.span>
    </Button>
  );
};

export default LanguageToggle;

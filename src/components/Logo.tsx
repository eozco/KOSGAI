
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="flex-shrink-0 text-xl flex items-center">
      <motion.div 
        className="w-8 h-8 rounded-full bg-gradient-to-r from-ko-secondary to-ko-accent flex items-center justify-center mr-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-bold text-white text-xs">KOSG</span>
      </motion.div>
      <span className="text-gradient font-bold">KO Soluciones</span>
    </div>
  );
};

export default Logo;

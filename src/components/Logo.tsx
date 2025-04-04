import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link to="/" className="flex-shrink-0 flex items-center">
      <motion.div 
        className="h-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src="/logo-inbloqs.png" 
          alt="Inbloqs" 
          className="h-8 w-auto dark:invert dark:brightness-200"
        />
      </motion.div>
    </Link>
  );
};

export default Logo;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link to="/" className="flex-shrink-0 flex items-center">
      <motion.div 
        className="w-10 h-10 rounded-full bg-gradient-to-r from-ko-secondary to-ko-accent flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Logo;

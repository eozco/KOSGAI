import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-12 h-12 rounded-xl overflow-hidden"
      >
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/5 rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white/5 rounded-tl-full" />
        
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear"
          }}
        />
        
        {/* Dark mode adjustments */}
        <div className="absolute inset-0 dark:bg-black/20" />
      </motion.div>
    </Link>
  );
};

export default Logo;

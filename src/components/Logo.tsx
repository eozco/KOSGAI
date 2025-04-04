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
        <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:hidden">
          <path d="M12.8 25.6H6.4V6.4H12.8V25.6Z" fill="url(#paint0_linear)" />
          <path d="M25.6 25.6H19.2V6.4H25.6V25.6Z" fill="url(#paint1_linear)" />
          <path d="M38.4 6.4H32V25.6H38.4V6.4Z" fill="url(#paint2_linear)" />
          <path d="M51.2 25.6H44.8V6.4H51.2V25.6Z" fill="url(#paint3_linear)" />
          <path d="M64 6.4H57.6V25.6H64V6.4Z" fill="url(#paint4_linear)" />
          <text x="72" y="22" className="text-2xl font-bold" fill="#1F2937">inbloqs</text>
          <defs>
            <linearGradient id="paint0_linear" x1="6.4" y1="16" x2="12.8" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7C3AED" />
              <stop offset="1" stopColor="#6D28D9" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="19.2" y1="16" x2="25.6" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="paint2_linear" x1="32" y1="16" x2="38.4" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A78BFA" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="paint3_linear" x1="44.8" y1="16" x2="51.2" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C4B5FD" />
              <stop offset="1" stopColor="#A78BFA" />
            </linearGradient>
            <linearGradient id="paint4_linear" x1="57.6" y1="16" x2="64" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DDD6FE" />
              <stop offset="1" stopColor="#C4B5FD" />
            </linearGradient>
          </defs>
        </svg>
        <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden dark:block">
          <path d="M12.8 25.6H6.4V6.4H12.8V25.6Z" fill="url(#paint0_linear_dark)" />
          <path d="M25.6 25.6H19.2V6.4H25.6V25.6Z" fill="url(#paint1_linear_dark)" />
          <path d="M38.4 6.4H32V25.6H38.4V6.4Z" fill="url(#paint2_linear_dark)" />
          <path d="M51.2 25.6H44.8V6.4H51.2V25.6Z" fill="url(#paint3_linear_dark)" />
          <path d="M64 6.4H57.6V25.6H64V6.4Z" fill="url(#paint4_linear_dark)" />
          <text x="72" y="22" className="text-2xl font-bold" fill="#F9FAFB">inbloqs</text>
          <defs>
            <linearGradient id="paint0_linear_dark" x1="6.4" y1="16" x2="12.8" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="paint1_linear_dark" x1="19.2" y1="16" x2="25.6" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A78BFA" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="paint2_linear_dark" x1="32" y1="16" x2="38.4" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C4B5FD" />
              <stop offset="1" stopColor="#A78BFA" />
            </linearGradient>
            <linearGradient id="paint3_linear_dark" x1="44.8" y1="16" x2="51.2" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DDD6FE" />
              <stop offset="1" stopColor="#C4B5FD" />
            </linearGradient>
            <linearGradient id="paint4_linear_dark" x1="57.6" y1="16" x2="64" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EDE9FE" />
              <stop offset="1" stopColor="#DDD6FE" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </Link>
  );
};

export default Logo;

import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Zap, Server, Lock } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Lock className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
      title: t("private_secure"),
      description: t("private_secure_desc"),
      gradient: "from-violet-600/20 via-purple-600/20 to-indigo-600/20"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: t("powerful_accessible"),
      description: t("powerful_accessible_desc"),
      gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20"
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: t("integrated_automated"),
      description: t("integrated_automated_desc"),
      gradient: "from-indigo-600/20 via-violet-600/20 to-purple-600/20"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: t("compliance_security"),
      description: t("compliance_security_desc"),
      gradient: "from-blue-600/20 via-indigo-600/20 to-violet-600/20"
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {t("about_title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t("company_desc")}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 dark:from-violet-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

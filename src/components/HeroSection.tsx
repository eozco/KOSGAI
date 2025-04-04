import { ArrowRight, Server, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ParticleNetwork from "./ParticleNetwork";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useLanguage();
  const [demoRequested, setDemoRequested] = useState(false);

  const handleDeployAIClick = () => {
    // Scroll to solutions section
    document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
    toast({
      title: "AI Deployment Info",
      description: "Contact us to learn more about deploying AI locally in your organization.",
    });
  };

  const handleExploreAutomationClick = () => {
    // Scroll to automation section within solutions
    document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
    toast({
      title: "Enterprise Automation",
      description: "Discover how our n8n workflows can automate your business processes.",
    });
  };

  const handleJoinCursosClick = () => {
    // Scroll to training section
    document.getElementById("training")?.scrollIntoView({ behavior: "smooth" });
    toast({
      title: "Cursos Learning Platform",
      description: "Join our comprehensive AI training programs.",
    });
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
      title: t("private_secure"),
      description: t("private_secure_desc")
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: t("powerful_accessible"),
      description: t("powerful_accessible_desc")
    },
    {
      icon: <Server className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: t("integrated_automated"),
      description: t("integrated_automated_desc")
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" />
      
      {/* Particle network background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40">
        <ParticleNetwork />
      </div>

      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            {t("hero_title")}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200"
          >
            {t("hero_subtitle")}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            {t("hero_description")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300"
            >
              {t("deploy_ai")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-500/50 dark:border-purple-400/50 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300"
            >
              {t("explore_automation")}
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 dark:from-violet-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

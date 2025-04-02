import { ArrowRight, Server, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

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

  return (
    <section 
      id="home" 
      className="min-h-screen pt-16 relative flex flex-col justify-center overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-ko-secondary/10 dark:bg-ko-secondary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-ko-accent/10 dark:bg-ko-accent/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 py-16 mx-auto text-center">
        {/* Eyebrow text with glow */}
        <div className="mb-4 inline-block px-4 py-1 rounded-full bg-ko-primary/10 dark:bg-ko-primary/20 text-ko-primary dark:text-ko-light font-medium text-sm">
          {t("hero_subtitle")}
        </div>

        {/* Main heading with gradient effect */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {t("hero_title")} <br className="hidden sm:block" />
          {t("hero_future")}
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          {t("hero_description")}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handleDeployAIClick}
            className="bg-ko-primary hover:bg-ko-primary/90 text-white px-8 py-6 text-lg"
          >
            {t("deploy_ai")}
          </Button>
          <Button
            onClick={handleExploreAutomationClick}
            variant="outline"
            className="border-ko-accent text-ko-accent hover:bg-ko-accent/10 px-8 py-6 text-lg"
          >
            {t("explore_automation")}
          </Button>
          <Button
            onClick={handleJoinCursosClick}
            variant="outline"
            className="border-ko-primary text-ko-primary hover:bg-ko-primary/10 px-8 py-6 text-lg"
          >
            {t("join_cursos")}
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/50 dark:bg-ko-dark/50 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:shadow-lg transition-all hover:border-ko-secondary/50">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-ko-secondary/20 dark:bg-ko-secondary/30 flex items-center justify-center">
              <Server className="w-6 h-6 text-ko-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("onprem_ai_title")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("feature_private_ai")}
            </p>
          </div>
          
          <div className="bg-white/50 dark:bg-ko-dark/50 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:shadow-lg transition-all hover:border-ko-accent/50">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-ko-accent/20 dark:bg-ko-accent/30 flex items-center justify-center">
              <Zap className="w-6 h-6 text-ko-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("automation_title")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("feature_ai_workflows")}
            </p>
          </div>
          
          <div className="bg-white/50 dark:bg-ko-dark/50 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:shadow-lg transition-all hover:border-ko-primary/50">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-ko-primary/20 dark:bg-ko-primary/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-ko-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t("infrastructure_title")}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t("feature_encryption")}
            </p>
          </div>
        </div>
        
        {/* AI Model Visualization */}
        <div className="mt-16 relative">
          <div className="glassmorphism rounded-xl p-4 md:p-8 max-w-4xl mx-auto overflow-hidden">
            <h3 className="text-xl font-semibold mb-2">{t("realtime_ai_models")}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{t("realtime_ai_models_desc")}</p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {["Llama 3", "DeepSeek", "Mistral", "Koboldcpp"].map((model) => (
                <div 
                  key={model}
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-ko-primary/20 to-ko-secondary/20 dark:from-ko-primary/30 dark:to-ko-secondary/30 text-sm font-medium animate-pulse-glow"
                >
                  {model}
                </div>
              ))}
            </div>
            
            <div className="mt-6 h-20 w-full bg-black/5 dark:bg-white/5 rounded-lg flex items-center justify-center">
              <div className="h-4 w-3/4 bg-gradient-to-r from-ko-primary to-ko-secondary opacity-60 rounded-full animate-pulse"></div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ko-secondary/30 dark:bg-ko-secondary/50 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-ko-accent/30 dark:bg-ko-accent/50 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

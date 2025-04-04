import { ArrowRight, Server, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import ParticleNetwork from "./ParticleNetwork";

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
    <section className="relative min-h-screen overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/10" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-400/10 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" />
      
      {/* Particle network background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40">
        <ParticleNetwork />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {t("hero_title")}
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            {t("hero_subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 text-lg px-8"
            >
              {t("request_demo")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-500/50 dark:border-purple-400/50 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 text-lg px-8"
            >
              {t("learn_more")}
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Shield className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
              title: t("hero_feature_1_title"),
              description: t("hero_feature_1_desc"),
              gradient: "from-violet-600/20 via-purple-600/20 to-indigo-600/20 dark:from-violet-500/30 dark:via-purple-500/30 dark:to-indigo-500/30"
            },
            {
              icon: <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
              title: t("hero_feature_2_title"),
              description: t("hero_feature_2_desc"),
              gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20 dark:from-purple-500/30 dark:via-pink-500/30 dark:to-rose-500/30"
            },
            {
              icon: <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
              title: t("hero_feature_3_title"),
              description: t("hero_feature_3_desc"),
              gradient: "from-indigo-600/20 via-violet-600/20 to-purple-600/20 dark:from-indigo-500/30 dark:via-violet-500/30 dark:to-purple-500/30"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className={`p-8 relative overflow-hidden bg-gradient-to-br ${feature.gradient}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-indigo-500/10 dark:from-violet-400/20 dark:via-purple-400/20 dark:to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="mb-4 p-3 rounded-xl bg-white/70 dark:bg-black/30 backdrop-blur-xl shadow-lg shadow-purple-500/5 group-hover:shadow-purple-500/20 transition-shadow duration-300 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

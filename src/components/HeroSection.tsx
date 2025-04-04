import { ArrowRight, Server, Shield, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { ParticleNetwork } from "./ParticleNetwork";

const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [demoRequested, setDemoRequested] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDemoRequest = () => {
    navigate("/contact");
    toast.success("Redirecting to contact form...");
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
      icon: Shield,
      title: t("private_secure"),
      description: t("private_secure_desc"),
      gradient: "from-violet-500 via-purple-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: t("powerful_accessible"),
      description: t("powerful_accessible_desc"),
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      icon: Server,
      title: t("integrated_automated"),
      description: t("integrated_automated_desc"),
      gradient: "from-indigo-500 via-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-background py-20 dark:bg-gray-900">
      <ParticleNetwork className="absolute inset-0 z-0" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-violet-500/30 to-purple-500/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {t("hero_title")}
            </span>
            <br />
            <span className="mt-2 block text-4xl text-foreground dark:text-gray-200">
              {t("hero_subtitle")}
            </span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            {t("hero_description")}
          </p>

          <div className="mb-16 flex justify-center gap-4">
            <button
              onClick={handleDemoRequest}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 p-0.5 font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-indigo-500 dark:text-white dark:focus:ring-purple-800"
            >
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                {t("request_demo")}
              </span>
            </button>
            
            <button
              onClick={() => handleScrollToSection("solutions")}
              className="rounded-lg border border-purple-500 px-5 py-2.5 text-purple-500 transition-all hover:bg-purple-500 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900"
            >
              {t("explore_automation")}
            </button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-gray-200 bg-white/50 p-6 backdrop-blur-lg transition-all hover:border-purple-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50"
              >
                <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-r ${feature.gradient} p-3 text-white`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground dark:text-gray-200">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

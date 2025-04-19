import { useLanguage } from "@/contexts/LanguageContext";
import { Server, Workflow, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SolutionsSection = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: <Server className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
      title: t("onprem_ai_title"),
      description: t("onprem_ai_desc"),
      features: [
        t("feature_private_ai"),
        t("feature_secure_chatbots"),
        t("feature_rag"),
        t("feature_doc_analysis")
      ],
      gradient: "from-violet-600/20 via-purple-600/20 to-indigo-600/20",
      buttonText: t("deploy_ai")
    },
    {
      icon: <Workflow className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: t("automation_title"),
      description: t("automation_desc"),
      features: [
        t("feature_ai_workflows"),
        t("feature_microsoft"),
        t("feature_pipelines"),
        t("feature_custom_workflows")
      ],
      gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
      buttonText: t("explore_automation")
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: t("infrastructure_title"),
      description: t("infrastructure_desc"),
      features: [
        t("feature_hosting"),
        t("feature_docker"),
        t("feature_encryption"),
        t("feature_architecture")
      ],
      gradient: "from-indigo-600/20 via-violet-600/20 to-purple-600/20",
      buttonText: t("learn_more")
    }
  ];

  return (
    <section id="solutions" className="relative py-20 overflow-hidden">
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
            {t("solutions_title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("solutions_subtitle")}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 dark:from-violet-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 w-fit">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline"
                  className="w-full border-2 border-purple-500/50 dark:border-purple-400/50 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300"
                  onClick={() => {
                    if (solution.buttonText === t("training_title") || solution.title === t("training_title")) {
                      document.getElementById("training")?.scrollIntoView({ behavior: "smooth" });
                      setTimeout(() => {
                        (window as any).toast && (window as any).toast({
                          title: t("training_title"),
                          description: t("training_desc"),
                        });
                      }, 700);
                    } else {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      setTimeout(() => {
                        (window as any).toast && (window as any).toast({
                          title: t("request_demo"),
                          description: t("We'll be in touch soon!"),
                        });
                      }, 700);
                    }
                  }}
                >
                  {solution.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;

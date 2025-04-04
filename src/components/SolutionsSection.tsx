import { useLanguage } from "@/contexts/LanguageContext";
import { Server, Workflow, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: <Server className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
      title: t("solutions.onprem_ai.title"),
      description: t("solutions.onprem_ai.desc"),
      features: t("solutions.onprem_ai.features").split('\n'),
      gradient: "from-violet-600/20 via-purple-600/20 to-indigo-600/20",
      buttonText: t("solutions.learn_more")
    },
    {
      icon: <Workflow className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: t("solutions.automation.title"),
      description: t("solutions.automation.desc"),
      features: t("solutions.automation.features").split('\n'),
      gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
      buttonText: t("solutions.explore_automation")
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: t("solutions.infrastructure.title"),
      description: t("solutions.infrastructure.desc"),
      features: t("solutions.infrastructure.features").split('\n'),
      gradient: "from-indigo-600/20 via-violet-600/20 to-purple-600/20",
      buttonText: t("solutions.contact_us")
    }
  ];

  return (
    <section id="solutions" className="relative py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/10" />
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {t("solutions.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("solutions.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className={`p-8 relative overflow-hidden bg-gradient-to-br ${solution.gradient} dark:opacity-30`}>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-indigo-500/10 dark:from-violet-400/20 dark:via-purple-400/20 dark:to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="mb-4 p-3 rounded-xl bg-white/70 dark:bg-black/30 backdrop-blur-xl shadow-lg shadow-purple-500/5 group-hover:shadow-purple-500/20 transition-shadow duration-300 inline-block">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {solution.description}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300 group/item">
                      <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300"
                >
                  {solution.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

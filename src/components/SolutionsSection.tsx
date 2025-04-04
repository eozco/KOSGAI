import { Shield, Zap, Server, Lock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export function SolutionsSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const solutions = [
    {
      icon: Server,
      title: t("onprem_ai_title"),
      description: t("onprem_ai_desc"),
      features: [
        t("feature_private_ai"),
        t("feature_secure_chatbots"),
        t("feature_rag"),
        t("feature_doc_analysis")
      ],
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      buttonText: t("request_demo")
    },
    {
      icon: Zap,
      title: t("automation_title"),
      description: t("automation_desc"),
      features: [
        t("feature_ai_workflows"),
        t("feature_microsoft"),
        t("feature_pipelines"),
        t("feature_custom_workflows")
      ],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      buttonText: t("request_demo")
    },
    {
      icon: Shield,
      title: t("infrastructure_title"),
      description: t("infrastructure_desc"),
      features: [
        t("feature_hosting"),
        t("feature_docker"),
        t("feature_encryption"),
        t("feature_architecture")
      ],
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      buttonText: t("request_demo")
    }
  ];

  const handleDemoRequest = () => {
    navigate("/contact");
  };

  return (
    <section id="solutions" className="relative overflow-hidden bg-background py-20 dark:bg-gray-900">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-violet-500/30 to-purple-500/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {t("solutions_title")}
            </span>
          </h2>
          
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            {t("solutions_subtitle")}
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-gray-200 bg-white/50 p-6 backdrop-blur-lg transition-all hover:border-purple-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50"
              >
                <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-r ${solution.gradient} p-3 text-white`}>
                  <solution.icon className="h-6 w-6" />
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-foreground dark:text-gray-200">
                  {solution.title}
                </h3>
                
                <p className="mb-6 text-muted-foreground">
                  {solution.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {solution.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-muted-foreground transition-transform hover:translate-x-2"
                    >
                      <div className={`mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${solution.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleDemoRequest}
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 p-0.5 font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-indigo-500 dark:text-white dark:focus:ring-purple-800"
                >
                  <span className="relative w-full rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                    {solution.buttonText}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

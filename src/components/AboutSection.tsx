import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Zap, Server, Lock } from "lucide-react";

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
      icon: <Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: t("local_deployment"),
      description: t("local_deployment_desc"),
      gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20"
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: t("enterprise_ready"),
      description: t("enterprise_ready_desc"),
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
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {t("about_title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t("company_desc")}
          </p>
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("our_mission")}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("mission_statement")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className={`p-8 relative overflow-hidden bg-gradient-to-br ${feature.gradient} dark:opacity-30`}>
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

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <div className="p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-indigo-600/20 dark:from-violet-500/30 dark:via-purple-500/30 dark:to-indigo-500/30" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {t("local_ai_title")}
                </h3>
                <div className="prose prose-lg dark:prose-invert">
                  <pre className="whitespace-pre-line text-gray-600 dark:text-gray-300 font-mono bg-gray-50/50 dark:bg-gray-900/50 rounded-xl p-6">
                    {t("local_ai_list")}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

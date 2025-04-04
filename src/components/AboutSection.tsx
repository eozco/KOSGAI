import { Shield, Zap, Server, Lock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

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

  const techStacks = [
    {
      title: t("ai_models"),
      list: t("ai_models_list").split("\n"),
      gradient: "from-violet-500 via-purple-500 to-indigo-500"
    },
    {
      title: t("local_ai"),
      list: t("local_ai_list").split("\n"),
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      title: t("automation_stack"),
      list: t("automation_list").split("\n"),
      gradient: "from-indigo-500 via-purple-500 to-pink-500"
    },
    {
      title: t("security_stack"),
      list: t("security_list").split("\n"),
      gradient: "from-pink-500 via-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 dark:bg-gray-900">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-violet-500/30 to-purple-500/30 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {t("about_title")}
            </span>
          </h2>
          
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            {t("company_desc")}
          </p>

          <h3 className="mb-4 text-2xl font-semibold text-foreground dark:text-gray-200">
            {t("our_mission")}
          </h3>
          
          <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
            {t("mission_statement")}
          </p>

          <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

          <h3 className="mb-8 text-2xl font-semibold text-foreground dark:text-gray-200">
            {t("tech_stack")}
          </h3>

          <div className="grid gap-8 sm:grid-cols-2">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-gray-200 bg-white/50 p-6 backdrop-blur-lg transition-all hover:border-purple-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50"
              >
                <h4 className={`mb-4 bg-gradient-to-r ${stack.gradient} bg-clip-text text-xl font-semibold text-transparent`}>
                  {stack.title}
                </h4>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  {stack.list.map((item, i) => (
                    <li key={i} className="transition-transform hover:translate-x-2">
                      {item.replace("• ", "")}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

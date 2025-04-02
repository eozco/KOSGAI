import { Cpu, Database, Lock, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-ko-secondary/10 dark:bg-ko-secondary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("about_title")}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t("company_desc")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t("our_mission")}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t("mission_statement")}
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-ko-secondary/20 dark:bg-ko-secondary/30 text-ko-secondary">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("private_secure")}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("private_secure_desc")}
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-ko-accent/20 dark:bg-ko-accent/30 text-ko-accent">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("powerful_accessible")}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("powerful_accessible_desc")}
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-ko-primary/20 dark:bg-ko-primary/30 text-ko-primary">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("integrated_automated")}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("integrated_automated_desc")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-6">{t("tech_stack")}</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/30 dark:bg-ko-dark/30 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <Database className="w-5 h-5 text-ko-secondary mr-2" />
                    <h4 className="font-semibold">{t("ai_models")}</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    {t("ai_models_list").split("\n").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/30 dark:bg-ko-dark/30 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <Cpu className="w-5 h-5 text-ko-accent mr-2" />
                    <h4 className="font-semibold">{t("local_ai")}</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    {t("local_ai_list").split("\n").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/30 dark:bg-ko-dark/30 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <Workflow className="w-5 h-5 text-ko-primary mr-2" />
                    <h4 className="font-semibold">{t("automation_stack")}</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    {t("automation_list").split("\n").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/30 dark:bg-ko-dark/30 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <Lock className="w-5 h-5 text-ko-secondary mr-2" />
                    <h4 className="font-semibold">{t("security_stack")}</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    {t("security_list").split("\n").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
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

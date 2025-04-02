import { Server, Workflow, BookOpen, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SolutionCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  iconColor
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  features: string[],
  iconColor: string
}) => {
  return (
    <div className="bg-white/50 dark:bg-ko-dark/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all group">
      <div className={`w-12 h-12 mb-4 rounded-full ${iconColor} flex items-center justify-center`}>
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <span className="w-1.5 h-1.5 bg-ko-secondary rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SolutionsSection = () => {
  const { t } = useLanguage();
  
  const solutions = [
    {
      icon: Server,
      title: t("onprem_ai_title"),
      description: t("onprem_ai_desc"),
      iconColor: "bg-ko-secondary/20 text-ko-secondary dark:bg-ko-secondary/30",
      features: [
        t("feature_private_ai"),
        t("feature_secure_chatbots"),
        t("feature_rag"),
        t("feature_doc_analysis")
      ]
    },
    {
      icon: Workflow,
      title: t("automation_title"),
      description: t("automation_desc"),
      iconColor: "bg-ko-accent/20 text-ko-accent dark:bg-ko-accent/30",
      features: [
        t("feature_ai_workflows"),
        t("feature_microsoft"),
        t("feature_pipelines"),
        t("feature_custom_workflows")
      ]
    },
    {
      icon: BookOpen,
      title: t("training_title"),
      description: t("training_desc"),
      iconColor: "bg-ko-primary/20 text-ko-primary dark:bg-ko-primary/30",
      features: [
        t("feature_masterclasses"),
        t("feature_hands_on"),
        t("feature_certification"),
        t("feature_learning")
      ]
    },
    {
      icon: Shield,
      title: t("infrastructure_title"),
      description: t("infrastructure_desc"),
      iconColor: "bg-ko-secondary/20 text-ko-secondary dark:bg-ko-secondary/30",
      features: [
        t("feature_hosting"),
        t("feature_docker"),
        t("feature_encryption"),
        t("feature_architecture")
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-ko-accent/10 dark:bg-ko-accent/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("solutions_title")}</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t("solutions_subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              iconColor={solution.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

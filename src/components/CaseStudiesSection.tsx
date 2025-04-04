import { BarChart, Users, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudy = ({ 
  title, 
  company, 
  description, 
  metrics 
}: { 
  title: string, 
  company: string, 
  description: string, 
  metrics: { icon: React.ElementType, label: string, value: string }[]
}) => {
  return (
    <div className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
      <div className="h-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-indigo-500/5 dark:from-violet-400/10 dark:via-purple-400/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-8 relative">
        <div className="mb-6">
          <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mb-2">{company}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{title}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">{description}</p>
        
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="flex flex-col items-center p-4 rounded-xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-purple-100/50 dark:border-purple-900/50 group-hover:border-purple-300 dark:group-hover:border-purple-700 transition-all duration-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 dark:from-violet-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 mb-3">
                  <Icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="font-bold text-2xl text-gray-900 dark:text-white mb-1">{metric.value}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CaseStudiesSection = () => {
  const { t } = useLanguage();
  
  const caseStudies = [
    {
      title: t("case_study_1_subtitle"),
      company: t("case_study_1_title"),
      description: t("case_study_1_desc"),
      metrics: [
        { icon: BarChart, label: t("efficiency"), value: "87%" },
        { icon: Users, label: t("adoption"), value: "100%" },
        { icon: Clock, label: t("time_saved"), value: "65%" },
      ]
    },
    {
      title: t("case_study_2_subtitle"),
      company: t("case_study_2_title"),
      description: t("case_study_2_desc"),
      metrics: [
        { icon: BarChart, label: t("cost_savings"), value: "42%" },
        { icon: Users, label: t("departments"), value: "5+" },
        { icon: Clock, label: t("hours_week"), value: "120+" },
      ]
    },
    {
      title: t("case_study_3_subtitle"),
      company: t("case_study_3_title"),
      description: t("case_study_3_desc"),
      metrics: [
        { icon: BarChart, label: t("accuracy"), value: "94%" },
        { icon: Users, label: t("daily_users"), value: "150+" },
        { icon: Clock, label: t("response_time"), value: "<3s" },
      ]
    },
    {
      title: t("case_study_4_subtitle"),
      company: t("case_study_4_title"),
      description: t("case_study_4_desc"),
      metrics: [
        { icon: BarChart, label: t("completion"), value: "92%" },
        { icon: Users, label: t("staff_trained"), value: "1200+" },
        { icon: Clock, label: t("training_time"), value: "50h" },
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {t("case_studies_title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("case_studies_subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudy
              key={index}
              title={study.title}
              company={study.company}
              description={study.description}
              metrics={study.metrics}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

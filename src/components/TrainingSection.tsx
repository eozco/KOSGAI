import { BookOpen, Clock, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface TrainingProgram {
  title: string;
  level: string;
  duration: string;
  format: string;
  modules: string[];
  color: string;
  icon: React.ReactNode;
}

const TrainingSection = () => {
  const { t, language } = useLanguage();

  const programs = [
    {
      key: "training_program_1",
      color: "bg-gradient-to-br from-purple-900/30 to-purple-600/30 dark:from-purple-800/40 dark:to-purple-500/40",
      icon: <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
    },
    {
      key: "training_program_2",
      color: "bg-gradient-to-br from-indigo-900/30 to-indigo-600/30 dark:from-indigo-800/40 dark:to-indigo-500/40",
      icon: <Layers className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
    },
    {
      key: "training_program_3",
      color: "bg-gradient-to-br from-violet-900/30 to-violet-600/30 dark:from-violet-800/40 dark:to-violet-500/40",
      icon: <Users className="w-8 h-8 text-violet-600 dark:text-violet-400" />
    },
    {
      key: "training_program_4",
      color: "bg-gradient-to-br from-purple-900/30 to-purple-600/30 dark:from-purple-800/40 dark:to-purple-500/40",
      icon: <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {t("training_section_title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t("training_section_subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const data = t(program.key) as any;
            return (
              <div key={program.key} className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-100 dark:border-purple-900 hover:shadow-xl hover:shadow-purple-500/10 transition-all">
                <div className={cn("p-6", program.color)}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 rounded-full bg-white/50 dark:bg-black/30 backdrop-blur-sm">
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{data.title}</h3>
                    </div>
                    <Badge variant="secondary" className="bg-white/80 dark:bg-gray-900/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                      {data.level}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="text-gray-900 dark:text-white">{t("training_duration")}:</strong> {data.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="text-gray-900 dark:text-white">{t("training_format")}:</strong> {data.format}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">{t("training_modules")}</h4>
                    <ul className="space-y-1">
                      {data.modules.map((module: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-purple-500 dark:bg-purple-400 rounded-full mr-2"></span>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-purple-500 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                    >
                      {t("training_details")}
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                    >
                      {t("training_register")}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;

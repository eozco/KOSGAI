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
      color: "bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-indigo-600/20 dark:from-violet-500/30 dark:via-purple-500/30 dark:to-indigo-500/30",
      icon: <BookOpen className="w-8 h-8 text-violet-600 dark:text-violet-400" />
    },
    {
      key: "training_program_2",
      color: "bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-violet-600/20 dark:from-blue-500/30 dark:via-indigo-500/30 dark:to-violet-500/30",
      icon: <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      key: "training_program_3",
      color: "bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-600/20 dark:from-purple-500/30 dark:via-pink-500/30 dark:to-rose-500/30",
      icon: <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
    },
    {
      key: "training_program_4",
      color: "bg-gradient-to-br from-indigo-600/20 via-violet-600/20 to-purple-600/20 dark:from-indigo-500/30 dark:via-violet-500/30 dark:to-purple-500/30",
      icon: <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {t("training_section_title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("training_section_subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const data = t(program.key) as any;
            return (
              <div key={program.key} 
                className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-100/50 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className={cn("p-8 relative overflow-hidden", program.color)}>
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-indigo-500/10 dark:from-violet-400/20 dark:via-purple-400/20 dark:to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="mr-4 p-3 rounded-xl bg-white/70 dark:bg-black/30 backdrop-blur-xl shadow-lg shadow-purple-500/5 group-hover:shadow-purple-500/20 transition-shadow duration-300">
                        {program.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {data.title}
                      </h3>
                    </div>
                    <Badge className="bg-white/90 dark:bg-gray-900/90 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50 shadow-sm">
                      {data.level}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="text-gray-900 dark:text-white font-medium">{t("training_duration")}:</strong> {data.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        <strong className="text-gray-900 dark:text-white font-medium">{t("training_format")}:</strong> {data.format}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">{t("training_modules")}</h4>
                    <ul className="space-y-2">
                      {data.modules.map((module: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300 group/item">
                          <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300"></span>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-purple-500/50 dark:border-purple-400/50 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300"
                    >
                      {t("training_details")}
                    </Button>
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300"
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

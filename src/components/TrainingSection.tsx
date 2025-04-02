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
      color: "bg-gradient-to-r from-ko-secondary/20 to-ko-accent/20 dark:from-ko-secondary/30 dark:to-ko-accent/30",
      icon: <BookOpen className="w-8 h-8 text-ko-secondary" />
    },
    {
      key: "training_program_2",
      color: "bg-gradient-to-r from-ko-primary/20 to-ko-secondary/20 dark:from-ko-primary/30 dark:to-ko-secondary/30",
      icon: <Layers className="w-8 h-8 text-ko-primary" />
    },
    {
      key: "training_program_3",
      color: "bg-gradient-to-r from-ko-accent/20 to-ko-primary/20 dark:from-ko-accent/30 dark:to-ko-primary/30",
      icon: <Users className="w-8 h-8 text-ko-accent" />
    },
    {
      key: "training_program_4",
      color: "bg-gradient-to-r from-ko-secondary/20 to-ko-accent/20 dark:from-ko-secondary/30 dark:to-ko-accent/30",
      icon: <Clock className="w-8 h-8 text-ko-secondary" />
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-ko-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("training_section_title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("training_section_subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const data = t(program.key) as any;
            return (
              <div key={program.key} className="bg-white/50 dark:bg-ko-dark/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
                <div className={cn("p-6", program.color)}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 rounded-full bg-white/30 dark:bg-black/20">
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-bold">{data.title}</h3>
                    </div>
                    <Badge className="bg-white/70 dark:bg-black/30">
                      {data.level}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-ko-secondary" />
                      <span className="text-sm">
                        <strong>{t("training_duration")}:</strong> {data.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1 text-ko-secondary" />
                      <span className="text-sm">
                        <strong>{t("training_format")}:</strong> {data.format}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">{t("training_modules")}</h4>
                    <ul className="space-y-1">
                      {data.modules.map((module: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-ko-secondary rounded-full mr-2"></span>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="text-ko-secondary border-ko-secondary hover:bg-ko-secondary/10">
                      {t("training_details")}
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-ko-secondary to-ko-accent hover:opacity-90">
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

import { BookOpen, Clock, Users, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

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

  const trainingPrograms: TrainingProgram[] = [
    {
      title: t("training_program_1_title"),
      level: language === "en" ? "Advanced" : "Avanzado",
      duration: language === "en" ? "3 days" : "3 días",
      format: language === "en" ? "In-person / Virtual" : "Presencial / Virtual",
      modules: [
        language === "en" ? "Introduction to private AI deployment" : "Introducción a la implementación de IA privada",
        language === "en" ? "Fine-tuning LLMs for specific use cases" : "Ajuste fino de LLMs para casos de uso específicos",
        language === "en" ? "Optimizing model performance" : "Optimización del rendimiento del modelo",
        language === "en" ? "Security best practices" : "Mejores prácticas de seguridad"
      ],
      color: "bg-gradient-to-r from-ko-secondary/20 to-ko-accent/20 dark:from-ko-secondary/30 dark:to-ko-accent/30",
      icon: <BookOpen className="w-8 h-8 text-ko-secondary" />
    },
    {
      title: t("training_program_2_title"),
      level: language === "en" ? "Intermediate" : "Intermedio",
      duration: language === "en" ? "2 days" : "2 días",
      format: language === "en" ? "Virtual" : "Virtual",
      modules: [
        language === "en" ? "RAG system architecture" : "Arquitectura de sistemas RAG",
        language === "en" ? "Vector databases & embeddings" : "Bases de datos vectoriales y embeddings",
        language === "en" ? "Building knowledge retrieval systems" : "Construcción de sistemas de recuperación de conocimiento",
        language === "en" ? "Integration with enterprise systems" : "Integración con sistemas empresariales"
      ],
      color: "bg-gradient-to-r from-ko-primary/20 to-ko-secondary/20 dark:from-ko-primary/30 dark:to-ko-secondary/30",
      icon: <Layers className="w-8 h-8 text-ko-primary" />
    },
    {
      title: t("training_program_3_title"),
      level: language === "en" ? "Beginner to Intermediate" : "Principiante a Intermedio",
      duration: language === "en" ? "2 days" : "2 días",
      format: language === "en" ? "Virtual / Self-paced" : "Virtual / A su ritmo",
      modules: [
        language === "en" ? "n8n basics & workflow design" : "Conceptos básicos de n8n y diseño de flujos de trabajo",
        language === "en" ? "Integrating AI models in workflows" : "Integración de modelos de IA en flujos de trabajo",
        language === "en" ? "Automating common business processes" : "Automatización de procesos comerciales comunes",
        language === "en" ? "Monitoring & maintenance" : "Monitoreo y mantenimiento"
      ],
      color: "bg-gradient-to-r from-ko-accent/20 to-ko-primary/20 dark:from-ko-accent/30 dark:to-ko-primary/30",
      icon: <Users className="w-8 h-8 text-ko-accent" />
    },
    {
      title: t("training_program_4_title"),
      level: language === "en" ? "Intermediate" : "Intermedio",
      duration: language === "en" ? "2 days" : "2 días",
      format: language === "en" ? "Virtual" : "Virtual",
      modules: [
        language === "en" ? "AI security fundamentals" : "Fundamentos de seguridad en IA",
        language === "en" ? "Data protection & privacy" : "Protección de datos y privacidad",
        language === "en" ? "Compliance frameworks for AI" : "Marcos de cumplimiento para IA",
        language === "en" ? "Security auditing & testing" : "Auditoría y pruebas de seguridad"
      ],
      color: "bg-gradient-to-r from-ko-secondary/20 to-ko-accent/20 dark:from-ko-secondary/30 dark:to-ko-accent/30",
      icon: <Clock className="w-8 h-8 text-ko-secondary" />
    }
  ];

  return (
    <section id="training" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-ko-primary/10 dark:bg-ko-primary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("training_section_title")} <span className="text-gradient">& Upskilling</span></h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t("training_section_subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="bg-white/50 dark:bg-ko-dark/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
              <div className={`p-6 ${program.color}`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mr-4 p-2 rounded-full bg-white/30 dark:bg-black/20">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold">{program.title}</h3>
                  </div>
                  <Badge variant="outline" className="bg-white/70 dark:bg-black/30">
                    {program.level}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-ko-secondary" />
                    <span className="text-sm">
                      <strong>{t("training_duration")}:</strong> {program.duration}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-ko-secondary" />
                    <span className="text-sm">
                      <strong>{t("training_format")}:</strong> {program.format}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">{t("training_modules")}</h4>
                  <ul className="space-y-1">
                    {program.modules.map((module, idx) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;

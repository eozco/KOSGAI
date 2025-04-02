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
      title: language === "en" ? "Advanced AI Implementation" : "Implementación Avanzada de IA",
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
      title: language === "en" ? "RAG Systems Architecture" : "Arquitectura de Sistemas RAG",
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
      title: language === "en" ? "n8n and AI Workflows" : "n8n y Flujos de Trabajo con IA",
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
      title: language === "en" ? "AI Security and Compliance" : "Seguridad y Cumplimiento en IA",
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-ko-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === "en" ? "Training & Upskilling" : "Capacitaciones: Formación en IA Empresarial & Upskilling"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {language === "en" 
              ? "Comprehensive training programs to develop expertise in AI and automation within your organization"
              : "Programas de formación integrales para desarrollar experiencia en IA y automatización en su organización"
            }
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
                    {language === "en" ? "Details" : "Detalles"}
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-ko-secondary to-ko-accent hover:opacity-90">
                    {language === "en" ? "Register" : "Registrarse"}
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


import { BarChart, Users, Clock } from "lucide-react";

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
    <div className="bg-white/50 dark:bg-ko-dark/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all group">
      <div className="h-3 bg-gradient-to-r from-ko-secondary to-ko-accent"></div>
      <div className="p-6">
        <div className="mb-4">
          <p className="text-ko-primary font-medium text-sm">{company}</p>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">{description}</p>
        
        <div className="grid grid-cols-3 gap-2">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="flex flex-col items-center p-2 rounded-lg bg-gray-100/60 dark:bg-gray-800/60">
                <Icon className="w-5 h-5 text-ko-secondary mb-1" />
                <span className="font-bold text-lg">{metric.value}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "AI-Powered Document Processing",
      company: "Global Financial Institution",
      description: "Implemented on-premise Llama model for secure document processing, reducing manual review time while maintaining data privacy compliance.",
      metrics: [
        { icon: BarChart, label: "Efficiency", value: "87%" },
        { icon: Users, label: "Adoption", value: "100%" },
        { icon: Clock, label: "Time Saved", value: "65%" },
      ]
    },
    {
      title: "Automated Workflow Transformation",
      company: "Manufacturing Enterprise",
      description: "Deployed n8n workflows with AI decision nodes to streamline operations across supply chain and inventory management processes.",
      metrics: [
        { icon: BarChart, label: "Cost Savings", value: "42%" },
        { icon: Users, label: "Departments", value: "5+" },
        { icon: Clock, label: "Hours/Week", value: "120+" },
      ]
    },
    {
      title: "Secure AI Assistant Deployment",
      company: "Legal Services Provider",
      description: "Implemented RAG-powered knowledge base assistant using Koboldcpp and fine-tuned Mistral model for internal legal research.",
      metrics: [
        { icon: BarChart, label: "Accuracy", value: "94%" },
        { icon: Users, label: "Daily Users", value: "150+" },
        { icon: Clock, label: "Response Time", value: "<3s" },
      ]
    },
    {
      title: "Enterprise AI Training Program",
      company: "Technology Conglomerate",
      description: "Developed custom Cursos learning paths for technical and non-technical staff, enabling organization-wide AI literacy and adoption.",
      metrics: [
        { icon: BarChart, label: "Completion", value: "92%" },
        { icon: Users, label: "Staff Trained", value: "1200+" },
        { icon: Clock, label: "Training Time", value: "50h" },
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-ko-primary/10 dark:bg-ko-primary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Client <span className="text-gradient">Success Stories</span></h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world implementations and results from our enterprise solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
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

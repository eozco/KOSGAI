
import { Server, Workflow, BookOpen, Shield } from "lucide-react";

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
  const solutions = [
    {
      icon: Server,
      title: "On-Prem AI & Business Intelligence",
      description: "Deploy AI models within your secure infrastructure for complete data control.",
      iconColor: "bg-ko-secondary/20 text-ko-secondary dark:bg-ko-secondary/30",
      features: [
        "Private AI deployments with Llama, DeepSeek, Mistral",
        "Secure, self-hosted AI chatbots & assistants",
        "RAG-powered AI for internal knowledge retrieval",
        "Enterprise document & email analysis with AI insights"
      ]
    },
    {
      icon: Workflow,
      title: "Enterprise Automation with n8n",
      description: "Connect AI capabilities with your business operations through intelligent workflows.",
      iconColor: "bg-ko-accent/20 text-ko-accent dark:bg-ko-accent/30",
      features: [
        "AI-enhanced automation workflows for departments",
        "Secure Microsoft 365 & SharePoint integration",
        "Automated data pipelines connecting AI models",
        "Custom workflow development & integration"
      ]
    },
    {
      icon: BookOpen,
      title: "Cursos: Training & Upskilling",
      description: "Empower your teams with the knowledge to leverage AI and automation.",
      iconColor: "bg-ko-primary/20 text-ko-primary dark:bg-ko-primary/30",
      features: [
        "Masterclasses on Private AI, RAG & Fine-Tuning",
        "Hands-on training with various AI technologies",
        "Enterprise AI certification programs",
        "Customized learning paths for organizations"
      ]
    },
    {
      icon: Shield,
      title: "Secure IT Infrastructure & Local AI",
      description: "Build robust foundations for your AI and automation initiatives.",
      iconColor: "bg-ko-secondary/20 text-ko-secondary dark:bg-ko-secondary/30",
      features: [
        "On-prem, cloud, and hybrid AI hosting solutions",
        "Docker & Kubernetes orchestration for scaling",
        "End-to-end data encryption & security protocols",
        "Privacy-first architecture design & implementation"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our <span className="text-gradient">Solutions & Services</span></h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and automation solutions tailored for enterprise needs
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

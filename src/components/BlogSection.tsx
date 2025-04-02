
import { CalendarClock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPost = ({ 
  title, 
  category, 
  excerpt, 
  date, 
  imageColor 
}: { 
  title: string, 
  category: string, 
  excerpt: string, 
  date: string,
  imageColor: string
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white/50 dark:bg-ko-dark/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
      <div className={`h-48 ${imageColor} flex items-center justify-center`}>
        <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-black/20"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 rounded-full bg-ko-secondary/20 dark:bg-ko-secondary/30 text-ko-secondary text-xs font-medium">
            {category}
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <CalendarClock className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{excerpt}</p>
        <a href="#blog" className="text-ko-secondary hover:text-ko-primary transition-colors text-sm font-medium">
          {t("read_more")} →
        </a>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const { t, language } = useLanguage();
  
  const blogPosts = {
    en: [
      {
        title: "Fine-tuning Llama 3 for Enterprise Use Cases",
        category: "AI Development",
        date: "May 15, 2023",
        excerpt: "Learn how to fine-tune Llama 3 models for specific business domains while maintaining high performance on limited hardware resources.",
        imageColor: "bg-gradient-to-r from-ko-secondary/30 to-ko-accent/30 dark:from-ko-secondary/40 dark:to-ko-accent/40"
      },
      {
        title: "Building Secure RAG Systems with Private Data",
        category: "Security",
        date: "June 2, 2023",
        excerpt: "Strategies for implementing Retrieval Augmented Generation while ensuring data never leaves your secure infrastructure.",
        imageColor: "bg-gradient-to-r from-ko-primary/30 to-ko-secondary/30 dark:from-ko-primary/40 dark:to-ko-secondary/40"
      },
      {
        title: "Automating Microsoft 365 Workflows with n8n and AI",
        category: "Automation",
        date: "June 23, 2023",
        excerpt: "Step-by-step guide to creating powerful Microsoft 365 automation workflows enhanced with AI decision-making capabilities.",
        imageColor: "bg-gradient-to-r from-ko-accent/30 to-ko-primary/30 dark:from-ko-accent/40 dark:to-ko-primary/40"
      }
    ],
    es: [
      {
        title: "Ajuste fino de Llama 3 para casos de uso empresarial",
        category: "Desarrollo IA",
        date: "15 Mayo, 2023",
        excerpt: "Aprenda a ajustar modelos Llama 3 para dominios empresariales específicos manteniendo un alto rendimiento en recursos de hardware limitados.",
        imageColor: "bg-gradient-to-r from-ko-secondary/30 to-ko-accent/30 dark:from-ko-secondary/40 dark:to-ko-accent/40"
      },
      {
        title: "Construyendo sistemas RAG seguros con datos privados",
        category: "Seguridad",
        date: "2 Junio, 2023",
        excerpt: "Estrategias para implementar Generación Aumentada por Recuperación asegurando que los datos nunca salgan de su infraestructura segura.",
        imageColor: "bg-gradient-to-r from-ko-primary/30 to-ko-secondary/30 dark:from-ko-primary/40 dark:to-ko-secondary/40"
      },
      {
        title: "Automatización de flujos de trabajo de Microsoft 365 con n8n e IA",
        category: "Automatización",
        date: "23 Junio, 2023",
        excerpt: "Guía paso a paso para crear potentes flujos de trabajo de automatización de Microsoft 365 mejorados con capacidades de toma de decisiones con IA.",
        imageColor: "bg-gradient-to-r from-ko-accent/30 to-ko-primary/30 dark:from-ko-accent/40 dark:to-ko-primary/40"
      }
    ]
  };

  const currentPosts = language === 'en' ? blogPosts.en : blogPosts.es;

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-ko-accent/10 dark:bg-ko-accent/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("blog_title")} <span className="text-gradient">Insights Hub</span></h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t("blog_subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              category={post.category}
              excerpt={post.excerpt}
              date={post.date}
              imageColor={post.imageColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

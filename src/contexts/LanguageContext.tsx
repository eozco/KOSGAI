
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "home": "Home",
    "about": "About",
    "solutions": "Solutions",
    "case-studies": "Case Studies",
    "blog": "Blog",
    "contact": "Contact",
    "request_demo": "Request Demo",
    
    // Hero Section
    "hero_title": "Enterprise AI & Automation",
    "hero_subtitle": "Secure. Scalable. Local.",
    
    // About Section
    "about_title": "About",
    "company_desc": "Our Mission",
    
    // Solutions Section
    "solutions_title": "Our Solutions & Services",
    "solutions_subtitle": "Comprehensive AI and automation solutions tailored for enterprise needs",
    "onprem_ai_title": "On-Prem AI & Business Intelligence",
    "onprem_ai_desc": "Deploy AI models within your secure infrastructure for complete data control.",
    "automation_title": "Enterprise Automation with n8n",
    "automation_desc": "Connect AI capabilities with your business operations through intelligent workflows.",
    "training_title": "Capacitaciones: Training & Upskilling",
    "training_desc": "Empower your teams with the knowledge to leverage AI and automation.",
    "infrastructure_title": "Secure IT Infrastructure & Local AI",
    "infrastructure_desc": "Build robust foundations for your AI and automation initiatives.",
    
    // Features
    "feature_private_ai": "Private AI deployments with Llama, DeepSeek, Mistral",
    "feature_secure_chatbots": "Secure, self-hosted AI chatbots & assistants",
    "feature_rag": "RAG-powered AI for internal knowledge retrieval",
    "feature_doc_analysis": "Enterprise document & email analysis with AI insights",
    "feature_ai_workflows": "AI-enhanced automation workflows for departments",
    "feature_microsoft": "Secure Microsoft 365 & SharePoint integration",
    "feature_pipelines": "Automated data pipelines connecting AI models",
    "feature_custom_workflows": "Custom workflow development & integration",
    "feature_masterclasses": "Masterclasses on Private AI, RAG & Fine-Tuning",
    "feature_hands_on": "Hands-on training with various AI technologies",
    "feature_certification": "Enterprise AI certification programs",
    "feature_learning": "Customized learning paths for organizations",
    "feature_hosting": "On-prem, cloud, and hybrid AI hosting solutions",
    "feature_docker": "Docker & Kubernetes orchestration for scaling",
    "feature_encryption": "End-to-end data encryption & security protocols",
    "feature_architecture": "Privacy-first architecture design & implementation",
    
    // Case Studies
    "case_studies_title": "Client Success Stories",
    "case_studies_subtitle": "Real-world implementations and results from our enterprise solutions",
    "efficiency": "Efficiency",
    "adoption": "Adoption",
    "time_saved": "Time Saved",
    "cost_savings": "Cost Savings",
    "departments": "Departments",
    "hours_week": "Hours/Week",
    "accuracy": "Accuracy",
    "daily_users": "Daily Users",
    "response_time": "Response Time",
    "completion": "Completion",
    "staff_trained": "Staff Trained",
    "training_time": "Training Time",
    
    // Blog
    "blog_title": "Blog & Insights Hub",
    "blog_subtitle": "Expert perspectives on AI, automation, and secure infrastructure",
    "read_more": "Read more",
    "view_all_posts": "View all blog posts",
    
    // Contact
    "contact_title": "Get in Touch",
    "contact_subtitle": "Schedule a demo or discuss how we can help with your AI and automation needs",
    "contact_info": "Contact Information",
    "email_us": "Email Us",
    "call_us": "Call Us",
    "join_community": "Join our community",
    "newsletter_desc": "Subscribe to our newsletter for the latest updates on AI, automation, and training opportunities.",
    "subscribe": "Subscribe",
    "your_email": "Your email address",
    "request_demo_form": "Request a Demo",
    "full_name": "Full Name",
    "email_address": "Email Address",
    "company": "Company",
    "your_company": "Your company name",
    "interest_area": "Interest Area",
    "message": "Message",
    "message_placeholder": "Tell us about your needs...",
    "form_success": "Thank you! Your message has been sent successfully.",
    "form_error": "There was an error submitting your form. Please try again.",
    
    // Training
    "training_section_title": "Capacitaciones: Enterprise AI Training",
    "training_section_subtitle": "Comprehensive training programs to build AI and automation expertise within your organization",
    "training_program_1": "Private AI Masterclass",
    "training_program_2": "RAG System Implementation",
    "training_program_3": "Enterprise Automation with n8n",
    "training_program_4": "AI Security & Compliance",
    "training_duration": "Duration",
    "training_level": "Level",
    "training_format": "Format",
    "training_modules": "Modules",
    "training_details": "View Details",
    "training_register": "Register Interest",
    
    // Footer
    "about_us": "About Us",
    "on_premise_ai": "On-Premise AI",
    "enterprise_automation": "Enterprise Automation",
    "capacitaciones": "Capacitaciones Training",
    "it_infrastructure": "IT Infrastructure",
    "resources": "Resources",
    "whitepapers": "Whitepapers",
    "case_studies": "Case Studies",
    "documentation": "Documentation",
    "legal": "Legal",
    "privacy_policy": "Privacy Policy",
    "terms_of_service": "Terms of Service",
    "cookie_policy": "Cookie Policy",
    "gdpr_compliance": "GDPR Compliance",
    "rights_reserved": "All rights reserved"
  },
  
  es: {
    // Navbar
    "home": "Inicio",
    "about": "Nosotros",
    "solutions": "Soluciones",
    "case-studies": "Casos de Éxito",
    "blog": "Blog",
    "contact": "Contacto",
    "request_demo": "Solicitar Demo",
    
    // Hero Section
    "hero_title": "IA Empresarial y Automatización",
    "hero_subtitle": "Seguro. Escalable. Local.",
    
    // About Section
    "about_title": "Nosotros",
    "company_desc": "Nuestra Misión",
    
    // Solutions Section
    "solutions_title": "Nuestras Soluciones y Servicios",
    "solutions_subtitle": "Soluciones integrales de IA y automatización adaptadas a las necesidades empresariales",
    "onprem_ai_title": "IA Local e Inteligencia Empresarial",
    "onprem_ai_desc": "Implemente modelos de IA dentro de su infraestructura segura para un control total de datos.",
    "automation_title": "Automatización Empresarial con n8n",
    "automation_desc": "Conecte las capacidades de IA con sus operaciones comerciales mediante flujos de trabajo inteligentes.",
    "training_title": "Capacitaciones: Formación y Mejora de Habilidades",
    "training_desc": "Capacite a sus equipos con el conocimiento para aprovechar la IA y la automatización.",
    "infrastructure_title": "Infraestructura de TI Segura e IA Local",
    "infrastructure_desc": "Construya bases robustas para sus iniciativas de IA y automatización.",
    
    // Features
    "feature_private_ai": "Implementaciones privadas de IA con Llama, DeepSeek, Mistral",
    "feature_secure_chatbots": "Chatbots y asistentes de IA seguros y autogestionados",
    "feature_rag": "IA potenciada con RAG para recuperación de conocimiento interno",
    "feature_doc_analysis": "Análisis de documentos y correos con IA empresarial",
    "feature_ai_workflows": "Flujos de trabajo de automatización mejorados con IA para departamentos",
    "feature_microsoft": "Integración segura con Microsoft 365 y SharePoint",
    "feature_pipelines": "Conductos de datos automatizados que conectan modelos de IA",
    "feature_custom_workflows": "Desarrollo e integración de flujos de trabajo personalizados",
    "feature_masterclasses": "Clases magistrales sobre IA privada, RAG y afinación de modelos",
    "feature_hands_on": "Capacitación práctica con diversas tecnologías de IA",
    "feature_certification": "Programas de certificación de IA empresarial",
    "feature_learning": "Rutas de aprendizaje personalizadas para organizaciones",
    "feature_hosting": "Soluciones de alojamiento de IA en local, nube e híbridas",
    "feature_docker": "Orquestación Docker y Kubernetes para escalar",
    "feature_encryption": "Protocolos de cifrado y seguridad de extremo a extremo",
    "feature_architecture": "Diseño e implementación de arquitectura centrada en la privacidad",
    
    // Case Studies
    "case_studies_title": "Casos de Éxito de Clientes",
    "case_studies_subtitle": "Implementaciones en el mundo real y resultados de nuestras soluciones empresariales",
    "efficiency": "Eficiencia",
    "adoption": "Adopción",
    "time_saved": "Tiempo Ahorrado",
    "cost_savings": "Ahorro de Costos",
    "departments": "Departamentos",
    "hours_week": "Horas/Semana",
    "accuracy": "Precisión",
    "daily_users": "Usuarios Diarios",
    "response_time": "Tiempo de Respuesta",
    "completion": "Finalización",
    "staff_trained": "Personal Capacitado",
    "training_time": "Tiempo de Formación",
    
    // Blog
    "blog_title": "Blog y Centro de Conocimiento",
    "blog_subtitle": "Perspectivas expertas sobre IA, automatización e infraestructura segura",
    "read_more": "Leer más",
    "view_all_posts": "Ver todas las entradas del blog",
    
    // Contact
    "contact_title": "Contáctenos",
    "contact_subtitle": "Programe una demo o converse sobre cómo podemos ayudar con sus necesidades de IA y automatización",
    "contact_info": "Información de Contacto",
    "email_us": "Envíenos un Correo",
    "call_us": "Llámenos",
    "join_community": "Únase a nuestra comunidad",
    "newsletter_desc": "Suscríbase a nuestro boletín para recibir las últimas actualizaciones sobre IA, automatización y oportunidades de capacitación.",
    "subscribe": "Suscribirse",
    "your_email": "Su dirección de correo",
    "request_demo_form": "Solicitar una Demostración",
    "full_name": "Nombre Completo",
    "email_address": "Correo Electrónico",
    "company": "Empresa",
    "your_company": "Nombre de su empresa",
    "interest_area": "Área de Interés",
    "message": "Mensaje",
    "message_placeholder": "Cuéntenos sobre sus necesidades...",
    "form_success": "¡Gracias! Su mensaje ha sido enviado exitosamente.",
    "form_error": "Hubo un error al enviar su formulario. Por favor intente nuevamente.",
    
    // Training
    "training_section_title": "Capacitaciones: Formación en IA Empresarial",
    "training_section_subtitle": "Programas de formación integrales para desarrollar experiencia en IA y automatización en su organización",
    "training_program_1": "Masterclass de IA Privada",
    "training_program_2": "Implementación de Sistemas RAG",
    "training_program_3": "Automatización Empresarial con n8n",
    "training_program_4": "Seguridad y Conformidad en IA",
    "training_duration": "Duración",
    "training_level": "Nivel",
    "training_format": "Formato",
    "training_modules": "Módulos",
    "training_details": "Ver Detalles",
    "training_register": "Registrar Interés",
    
    // Footer
    "about_us": "Sobre Nosotros",
    "on_premise_ai": "IA Local",
    "enterprise_automation": "Automatización Empresarial",
    "capacitaciones": "Capacitaciones",
    "it_infrastructure": "Infraestructura TI",
    "resources": "Recursos", 
    "whitepapers": "Documentos Técnicos",
    "case_studies": "Casos de Éxito",
    "documentation": "Documentación",
    "legal": "Legal",
    "privacy_policy": "Política de Privacidad",
    "terms_of_service": "Términos de Servicio",
    "cookie_policy": "Política de Cookies",
    "gdpr_compliance": "Cumplimiento GDPR",
    "rights_reserved": "Todos los derechos reservados"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    return storedLanguage || (navigator.language.startsWith('es') ? 'es' : 'en');
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

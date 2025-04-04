import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

type TranslationValue = string | string[];

interface Translations {
  [key: string]: TranslationValue;
}

interface LanguageTranslations {
  en: Translations;
  es: Translations;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: LanguageTranslations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.solutions": "Solutions",
    "nav.case_studies": "Case Studies",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.request_demo": "Request Demo",
    
    // Hero Section
    "hero.title": "Enterprise AI & Automation",
    "hero.subtitle": "Secure. Scalable. Local.",
    "hero.description": "Empower your business with private AI, automation, and secure on-premise solutions that put you in control of your data and workflows.",
    "hero.future": "for the Future",
    "hero.deploy_ai": "Deploy your AI locally",
    "hero.explore_automation": "Explore enterprise automation",
    "hero.join_cursos": "Join Cursos learning platform",
    
    // About Section
    "about.title": "About Inbloqs",
    "about.company_desc": "Empowering businesses with private AI, automation, and secure on-premise solutions.",
    "about.mission": "Our Mission",
    "about.mission_statement": "At Inbloqs, we're committed to democratizing AI and automation technologies for enterprises of all sizes. We believe that AI should be:",
    "about.private_secure": "Private & Secure",
    "about.private_secure_desc": "Your data stays within your infrastructure, never leaving your control.",
    "about.local_deployment": "Local Deployment",
    "about.local_deployment_desc": "Deploy AI models within your secure infrastructure for complete data control.",
    "about.enterprise_ready": "Enterprise Ready",
    "about.enterprise_ready_desc": "Scalable solutions designed for enterprise needs and compliance requirements.",
    "about.compliance_security": "Compliance & Security",
    "about.compliance_security_desc": "Built with enterprise-grade security and compliance standards in mind.",
    "about.tech_stack": "Our Technology Stack",
    "about.ai_models": "AI Models",
    "about.ai_models_list": "• LLama 3\n• DeepSeek\n• Mistral\n• Fine-tuned local models",
    "about.local_ai": "Local AI Hosting",
    "about.local_ai_list": "• Koboldcpp\n• OpenWebUI\n• Docker & Kubernetes\n• On-premise deployment",
    "about.automation": "Automation",
    "about.automation_list": "• n8n workflows\n• AI-driven decision making\n• Microsoft 365 integration\n• Data pipelines",
    "about.security": "Security",
    "about.security_list": "• End-to-end encryption\n• Privacy-first architecture\n• Secure API integration\n• Role-based access control",
    
    // Solutions Section
    "solutions.title": "Our Solutions & Services",
    "solutions.subtitle": "Comprehensive AI and automation solutions tailored for enterprise needs",
    "solutions.onprem_ai.title": "On-Prem AI & Business Intelligence",
    "solutions.onprem_ai.desc": "Deploy AI models within your secure infrastructure for complete data control.",
    "solutions.onprem_ai.features": "• Private AI deployments\n• Secure data processing\n• Business intelligence\n• Custom model training",
    "solutions.automation.title": "Enterprise Automation with n8n",
    "solutions.automation.desc": "Connect AI capabilities with your business operations through intelligent workflows.",
    "solutions.automation.features": "• Workflow automation\n• AI decision nodes\n• Process optimization\n• Integration services",
    "solutions.infrastructure.title": "Secure IT Infrastructure & Local AI",
    "solutions.infrastructure.desc": "Build robust foundations for your AI and automation initiatives.",
    "solutions.infrastructure.features": "• Secure hosting\n• Infrastructure setup\n• Monitoring & maintenance\n• Security compliance",
    "solutions.learn_more": "Learn More",
    "solutions.explore_automation": "Explore Automation",
    "solutions.contact_us": "Contact Us",
    
    // Features
    "features.private_ai": "Private AI deployments with Llama, DeepSeek, Mistral",
    "features.secure_chatbots": "Secure, self-hosted AI chatbots & assistants",
    "features.rag": "RAG-powered AI for internal knowledge retrieval",
    "features.doc_analysis": "Enterprise document & email analysis with AI insights",
    "features.ai_workflows": "AI-enhanced automation workflows for departments",
    "features.microsoft": "Secure Microsoft 365 & SharePoint integration",
    "features.pipelines": "Automated data pipelines connecting AI models",
    "features.custom_workflows": "Custom workflow development & integration",
    "features.masterclasses": "Masterclasses on Private AI, RAG & Fine-Tuning",
    "features.hands_on": "Hands-on training with various AI technologies",
    "features.certification": "Enterprise AI certification programs",
    "features.learning": "Customized learning paths for organizations",
    "features.hosting": "On-prem, cloud, and hybrid AI hosting solutions",
    "features.docker": "Docker & Kubernetes orchestration for scaling",
    "features.encryption": "End-to-end data encryption & security protocols",
    "features.architecture": "Privacy-first architecture design & implementation",
    
    // Real-time AI Models
    "realtime_ai.title": "Real-time AI Models",
    "realtime_ai.desc": "See our on-premise AI solutions in action",
    
    // Case Studies
    "case_studies.title": "Client Success Stories",
    "case_studies.subtitle": "Real-world implementations and results from our enterprise solutions",
    "case_studies.1.title": "Global Financial Institution",
    "case_studies.1.subtitle": "AI-Powered Document Processing",
    "case_studies.1.desc": "Implemented on-premise Llama model for secure document processing, reducing manual review time while maintaining data privacy compliance.",
    "case_studies.2.title": "Manufacturing Enterprise",
    "case_studies.2.subtitle": "Automated Workflow Transformation",
    "case_studies.2.desc": "Deployed n8n workflows with AI decision nodes to streamline operations across supply chain and inventory management processes.",
    "case_studies.3.title": "Legal Services Provider",
    "case_studies.3.subtitle": "Secure AI Assistant Deployment",
    "case_studies.3.desc": "Implemented RAG-powered knowledge base assistant using Koboldcpp and fine-tuned Mistral model for internal legal research.",
    "case_studies.4.title": "Technology Conglomerate",
    "case_studies.4.subtitle": "Enterprise AI Training Program",
    "case_studies.4.desc": "Developed custom Capacitaciones learning paths for technical and non-technical staff, enabling organization-wide AI literacy and adoption.",
    "case_studies.metrics.efficiency": "Efficiency",
    "case_studies.metrics.adoption": "Adoption",
    "case_studies.metrics.time_saved": "Time Saved",
    "case_studies.metrics.cost_savings": "Cost Savings",
    "case_studies.metrics.departments": "Departments",
    "case_studies.metrics.hours_week": "Hours/Week",
    "case_studies.metrics.accuracy": "Accuracy",
    "case_studies.metrics.daily_users": "Daily Users",
    "case_studies.metrics.response_time": "Response Time",
    "case_studies.metrics.completion": "Completion",
    "case_studies.metrics.staff_trained": "Staff Trained",
    "case_studies.metrics.training_time": "Training Time",
    
    // Blog
    "blog.title": "Blog & Insights Hub",
    "blog.subtitle": "Expert perspectives on AI, automation, and secure infrastructure",
    "blog.read_more": "Read more",
    "blog.view_all_posts": "View all blog posts",
    
    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Schedule a demo or discuss how we can help with your AI and automation needs",
    "contact.info": "Contact Information",
    "contact.email": "Email Us",
    "contact.phone": "Call Us",
    "contact.location": "Location",
    "contact.join_community": "Join our community",
    "contact.newsletter_desc": "Subscribe to our newsletter for the latest updates on AI, automation, and training opportunities.",
    "contact.subscribe": "Subscribe",
    "contact.your_email": "Your email address",
    "contact.request_demo": "Request a Demo",
    "contact.full_name": "Full Name",
    "contact.email_address": "Email Address",
    "contact.company": "Company",
    "contact.your_company": "Your company name",
    "contact.interest_area": "Interest Area",
    "contact.message": "Message",
    "contact.message_placeholder": "Tell us about your needs...",
    "contact.form_success": "Thank you! Your message has been sent successfully.",
    "contact.form_error": "There was an error submitting your form. Please try again.",
    
    // Training
    "training.title": "Training & Upskilling",
    "training.subtitle": "Comprehensive training programs to develop expertise in AI and automation within your organization",
    "training.program_1.title": "Advanced AI Implementation",
    "training.program_1.level": "Advanced",
    "training.program_1.duration": "3 days",
    "training.program_1.format": "In-person / Virtual",
    "training.program_1.modules": [
      "Introduction to private AI deployment",
      "Fine-tuning LLMs for specific use cases",
      "Optimizing model performance",
      "Security best practices"
    ],
    "training.program_2.title": "RAG Systems Architecture",
    "training.program_2.level": "Intermediate",
    "training.program_2.duration": "2 days",
    "training.program_2.format": "Virtual",
    "training.program_2.modules": [
      "RAG system architecture",
      "Vector databases & embeddings",
      "Building knowledge retrieval systems",
      "Integration with enterprise systems"
    ],
    "training.program_3.title": "n8n & AI Workflows",
    "training.program_3.level": "Beginner to Intermediate",
    "training.program_3.duration": "2 days",
    "training.program_3.format": "Virtual / Self-paced",
    "training.program_3.modules": [
      "n8n basics & workflow design",
      "Integrating AI models in workflows",
      "Automating common business processes",
      "Monitoring & maintenance"
    ],
    "training.program_4.title": "AI Security & Compliance",
    "training.program_4.level": "Intermediate",
    "training.program_4.duration": "2 days",
    "training.program_4.format": "Virtual",
    "training.program_4.modules": [
      "AI security fundamentals",
      "Data protection & privacy",
      "Compliance frameworks for AI",
      "Security auditing & testing"
    ],
    "training.duration": "Duration",
    "training.format": "Format",
    "training.modules": "Modules",
    "training.details": "Details",
    "training.register": "Register",
    
    // Footer
    "footer.description": "Empowering businesses with private AI, automation, and secure on-premise solutions.",
    "footer.company": "Company",
    "footer.about_us": "About Us",
    "footer.solutions": "Solutions",
    "footer.case_studies": "Case Studies",
    "footer.blog": "Blog",
    "footer.services": "Services",
    "footer.on_premise_ai": "On-Premise AI",
    "footer.enterprise_automation": "Enterprise Automation",
    "footer.training": "Training",
    "footer.secure_infrastructure": "Secure Infrastructure",
    "footer.contact": "Contact",
    "footer.rights_reserved": "All rights reserved",
    "footer.privacy_policy": "Privacy Policy",
    "footer.terms_of_service": "Terms of Service"
  },
  
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.solutions": "Soluciones",
    "nav.case_studies": "Casos de Éxito",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.request_demo": "Solicitar Demo",
    
    // Hero Section
    "hero.title": "IA Empresarial y Automatización",
    "hero.subtitle": "Seguro. Escalable. Local.",
    "hero.description": "Potencie su negocio con IA privada, automatización y soluciones locales seguras que le dan control total sobre sus datos y flujos de trabajo.",
    "hero.future": "para el Futuro",
    "hero.deploy_ai": "Implemente su IA localmente",
    "hero.explore_automation": "Explore automatización empresarial",
    "hero.join_cursos": "Únase a la plataforma Cursos",
    
    // About Section
    "about.title": "Sobre Inbloqs",
    "about.company_desc": "Empoderamos empresas con IA privada, automatización y soluciones locales seguras.",
    "about.mission": "Nuestra Misión",
    "about.mission_statement": "En Inbloqs, estamos comprometidos a democratizar las tecnologías de IA y automatización para empresas de todos los tamaños. Creemos que la IA debe ser:",
    "about.private_secure": "Privada y Segura",
    "about.private_secure_desc": "Sus datos permanecen dentro de su infraestructura, nunca salen de su control.",
    "about.local_deployment": "Implementación Local",
    "about.local_deployment_desc": "Implemente modelos de IA dentro de su infraestructura segura para un control total de datos.",
    "about.enterprise_ready": "Listo para Empresas",
    "about.enterprise_ready_desc": "Soluciones escalables diseñadas para necesidades empresariales y requisitos de cumplimiento.",
    "about.compliance_security": "Cumplimiento y Seguridad",
    "about.compliance_security_desc": "Construido con estándares de seguridad y cumplimiento de nivel empresarial.",
    "about.tech_stack": "Nuestra Pila Tecnológica",
    "about.ai_models": "Modelos de IA",
    "about.ai_models_list": "• LLama 3\n• DeepSeek\n• Mistral\n• Modelos locales personalizados",
    "about.local_ai": "Hosting de IA Local",
    "about.local_ai_list": "• Koboldcpp\n• OpenWebUI\n• Docker y Kubernetes\n• Implementación local",
    "about.automation": "Automatización",
    "about.automation_list": "• Flujos de trabajo n8n\n• Toma de decisiones impulsada por IA\n• Integración con Microsoft 365\n• Canales de datos",
    "about.security": "Seguridad",
    "about.security_list": "• Encriptación de extremo a extremo\n• Arquitectura centrada en la privacidad\n• Integración API segura\n• Control de acceso basado en roles",
    
    // Solutions Section
    "solutions.title": "Nuestras Soluciones y Servicios",
    "solutions.subtitle": "Soluciones integrales de IA y automatización adaptadas a las necesidades empresariales",
    "solutions.onprem_ai.title": "IA Local e Inteligencia Empresarial",
    "solutions.onprem_ai.desc": "Implemente modelos de IA dentro de su infraestructura segura para un control total de datos.",
    "solutions.onprem_ai.features": "• Implementaciones privadas de IA\n• Procesamiento seguro de datos\n• Inteligencia empresarial\n• Entrenamiento de modelos personalizados",
    "solutions.automation.title": "Automatización Empresarial con n8n",
    "solutions.automation.desc": "Conecte las capacidades de IA con sus operaciones comerciales mediante flujos de trabajo inteligentes.",
    "solutions.automation.features": "• Automatización de flujos de trabajo\n• Nodos de decisión con IA\n• Optimización de procesos\n• Servicios de integración",
    "solutions.infrastructure.title": "Infraestructura de TI Segura e IA Local",
    "solutions.infrastructure.desc": "Construya bases robustas para sus iniciativas de IA y automatización.",
    "solutions.infrastructure.features": "• Alojamiento seguro\n• Configuración de infraestructura\n• Monitoreo y mantenimiento\n• Cumplimiento de seguridad",
    "solutions.learn_more": "Saber Más",
    "solutions.explore_automation": "Explorar Automatización",
    "solutions.contact_us": "Contáctenos",
    
    // Features
    "features.private_ai": "Implementaciones privadas de IA con Llama, DeepSeek, Mistral",
    "features.secure_chatbots": "Chatbots y asistentes de IA seguros y autogestionados",
    "features.rag": "IA potenciada con RAG para recuperación de conocimiento interno",
    "features.doc_analysis": "Análisis de documentos y correos con IA empresarial",
    "features.ai_workflows": "Flujos de trabajo de automatización mejorados con IA para departamentos",
    "features.microsoft": "Integración segura con Microsoft 365 y SharePoint",
    "features.pipelines": "Conductos de datos automatizados que conectan modelos de IA",
    "features.custom_workflows": "Desarrollo e integración de flujos de trabajo personalizados",
    "features.masterclasses": "Clases magistrales sobre IA privada, RAG y afinación de modelos",
    "features.hands_on": "Capacitación práctica con diversas tecnologías de IA",
    "features.certification": "Programas de certificación de IA empresarial",
    "features.learning": "Rutas de aprendizaje personalizadas para organizaciones",
    "features.hosting": "Soluciones de alojamiento de IA en local, nube e híbridas",
    "features.docker": "Orquestación Docker y Kubernetes para escalar",
    "features.encryption": "Protocolos de cifrado y seguridad de extremo a extremo",
    "features.architecture": "Diseño e implementación de arquitectura centrada en la privacidad",
    
    // Real-time AI Models
    "realtime_ai.title": "Modelos de IA en Tiempo Real",
    "realtime_ai.desc": "Vea nuestras soluciones de IA locales en acción",
    
    // Case Studies
    "case_studies.title": "Casos de Éxito de Clientes",
    "case_studies.subtitle": "Implementaciones en el mundo real y resultados de nuestras soluciones empresariales",
    "case_studies.1.title": "Institución Financiera Global",
    "case_studies.1.subtitle": "Procesamiento de Documentos con IA",
    "case_studies.1.desc": "Implementado modelo Llama local para procesamiento seguro de documentos, reduciendo el tiempo de revisión manual mientras se mantiene el cumplimiento de la privacidad de datos.",
    "case_studies.2.title": "Empresa Manufacturera",
    "case_studies.2.subtitle": "Transformación de Flujos de Trabajo Automatizados",
    "case_studies.2.desc": "Desplegado flujos de trabajo n8n con nodos de decisión de IA para optimizar operaciones en cadena de suministro y gestión de inventario.",
    "case_studies.3.title": "Proveedor de Servicios Legales",
    "case_studies.3.subtitle": "Implementación Segura de Asistente de IA",
    "case_studies.3.desc": "Implementado asistente de base de conocimientos potenciado con RAG usando Koboldcpp y modelo Mistral afinado para investigación legal interna.",
    "case_studies.4.title": "Conglomerado Tecnológico",
    "case_studies.4.subtitle": "Programa de Capacitación en IA Empresarial",
    "case_studies.4.desc": "Desarrollado rutas de aprendizaje personalizadas de Capacitaciones para personal técnico y no técnico, permitiendo alfabetización y adopción de IA en toda la organización.",
    "case_studies.metrics.efficiency": "Eficiencia",
    "case_studies.metrics.adoption": "Adopción",
    "case_studies.metrics.time_saved": "Tiempo Ahorrado",
    "case_studies.metrics.cost_savings": "Ahorro de Costos",
    "case_studies.metrics.departments": "Departamentos",
    "case_studies.metrics.hours_week": "Horas/Semana",
    "case_studies.metrics.accuracy": "Precisión",
    "case_studies.metrics.daily_users": "Usuarios Diarios",
    "case_studies.metrics.response_time": "Tiempo de Respuesta",
    "case_studies.metrics.completion": "Finalización",
    "case_studies.metrics.staff_trained": "Personal Capacitado",
    "case_studies.metrics.training_time": "Tiempo de Formación",
    
    // Blog
    "blog.title": "Blog y Centro de Conocimiento",
    "blog.subtitle": "Perspectivas expertas sobre IA, automatización e infraestructura segura",
    "blog.read_more": "Leer más",
    "blog.view_all_posts": "Ver todas las entradas del blog",
    
    // Contact
    "contact.title": "Contáctenos",
    "contact.subtitle": "Programe una demo o discuta cómo podemos ayudarle con sus necesidades de IA y automatización",
    "contact.info": "Información de Contacto",
    "contact.email": "Envíenos un Correo",
    "contact.phone": "Llámenos",
    "contact.location": "Ubicación",
    "contact.join_community": "Únase a nuestra comunidad",
    "contact.newsletter_desc": "Suscríbase a nuestro boletín para recibir las últimas actualizaciones sobre IA, automatización y oportunidades de capacitación.",
    "contact.subscribe": "Suscribirse",
    "contact.your_email": "Su dirección de correo electrónico",
    "contact.request_demo": "Solicitar una Demo",
    "contact.full_name": "Nombre Completo",
    "contact.email_address": "Dirección de Correo",
    "contact.company": "Empresa",
    "contact.your_company": "Nombre de su empresa",
    "contact.interest_area": "Área de Interés",
    "contact.message": "Mensaje",
    "contact.message_placeholder": "Cuéntenos sobre sus necesidades...",
    "contact.form_success": "¡Gracias! Su mensaje ha sido enviado exitosamente.",
    "contact.form_error": "Hubo un error al enviar su formulario. Por favor, inténtelo de nuevo.",
    
    // Training
    "training.title": "Capacitaciones: Formación en IA Empresarial & Upskilling",
    "training.subtitle": "Programas de formación integrales para desarrollar experiencia en IA y automatización en su organización",
    "training.program_1.title": "Implementación Avanzada de IA",
    "training.program_1.level": "Avanzado",
    "training.program_1.duration": "3 días",
    "training.program_1.format": "Presencial / Virtual",
    "training.program_1.modules": [
      "Introducción a la implementación de IA privada",
      "Ajuste fino de LLMs para casos de uso específicos",
      "Optimización del rendimiento del modelo",
      "Mejores prácticas de seguridad"
    ],
    "training.program_2.title": "Arquitectura de Sistemas RAG",
    "training.program_2.level": "Intermedio",
    "training.program_2.duration": "2 días",
    "training.program_2.format": "Virtual",
    "training.program_2.modules": [
      "Arquitectura de sistemas RAG",
      "Bases de datos vectoriales y embeddings",
      "Construcción de sistemas de recuperación de conocimiento",
      "Integración con sistemas empresariales"
    ],
    "training.program_3.title": "n8n y Flujos de Trabajo con IA",
    "training.program_3.level": "Principiante a Intermedio",
    "training.program_3.duration": "2 días",
    "training.program_3.format": "Virtual / A su ritmo",
    "training.program_3.modules": [
      "Conceptos básicos de n8n y diseño de flujos de trabajo",
      "Integración de modelos de IA en flujos de trabajo",
      "Automatización de procesos comerciales comunes",
      "Monitoreo y mantenimiento"
    ],
    "training.program_4.title": "Seguridad y Cumplimiento en IA",
    "training.program_4.level": "Intermedio",
    "training.program_4.duration": "2 días",
    "training.program_4.format": "Virtual",
    "training.program_4.modules": [
      "Fundamentos de seguridad en IA",
      "Protección de datos y privacidad",
      "Marcos de cumplimiento para IA",
      "Auditoría y pruebas de seguridad"
    ],
    "training.duration": "Duración",
    "training.format": "Formato",
    "training.modules": "Módulos",
    "training.details": "Detalles",
    "training.register": "Registrarse",
    
    // Footer
    "footer.description": "Empoderamos empresas con IA privada, automatización y soluciones locales seguras.",
    "footer.company": "Empresa",
    "footer.about_us": "Sobre Nosotros",
    "footer.solutions": "Soluciones",
    "footer.case_studies": "Casos de Éxito",
    "footer.blog": "Blog",
    "footer.services": "Servicios",
    "footer.on_premise_ai": "IA Local",
    "footer.enterprise_automation": "Automatización Empresarial",
    "footer.training": "Capacitación",
    "footer.secure_infrastructure": "Infraestructura Segura",
    "footer.contact": "Contacto",
    "footer.rights_reserved": "Todos los derechos reservados",
    "footer.privacy_policy": "Política de Privacidad",
    "footer.terms_of_service": "Términos de Servicio"
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
    const langTranslations = translations[language];
    const value = langTranslations[key];
    if (Array.isArray(value)) {
      return value.join('\n');
    }
    return value || key;
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

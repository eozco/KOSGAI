import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
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
    "hero_description": "Empower your business with private AI, automation, and secure on-premise solutions that put you in control of your data and workflows.",
    "hero_future": "for the Future",
    "deploy_ai": "Deploy your AI locally",
    "explore_automation": "Explore enterprise automation",
    "join_cursos": "Join Cursos learning platform",
    
    // About Section
    "about_title": "Our Vision",
    "company_desc": "We are committed to democratizing AI access while ensuring digital sovereignty and data privacy. Our mission is to empower organizations of all sizes with secure, ethical, and efficient AI solutions.",
    "our_mission": "Our Mission",
    "mission_statement": "At Inbloqs, we're committed to democratizing AI and automation technologies for enterprises of all sizes. We believe that AI should be:",
    "private_secure": "Private & Secure",
    "private_secure_desc": "Your data stays within your infrastructure, never leaving your control.",
    "powerful_accessible": "Powerful & Accessible",
    "powerful_accessible_desc": "Enterprise-grade AI capabilities without requiring specialized expertise.",
    "integrated_automated": "Integrated & Automated",
    "integrated_automated_desc": "Seamlessly connected to your existing workflows and business processes.",
    "tech_stack": "Our Technology Stack",
    "ai_models": "AI Models",
    "ai_models_list": "• LLama 3\n• DeepSeek\n• Mistral\n• Fine-tuned local models",
    "local_ai": "Local AI Hosting",
    "local_ai_list": "• Koboldcpp\n• OpenWebUI\n• Docker & Kubernetes\n• On-premise deployment",
    "automation_stack": "Automation",
    "automation_list": "• Workflows\n• AI-driven decision making\n• Microsoft 365 integration\n• Data pipelines",
    "security_stack": "Security",
    "security_list": "• End-to-end encryption\n• Privacy-first architecture\n• Secure API integration\n• Role-based access control",
    
    // About Features
    "digital_sovereignty": "Digital Sovereignty",
    "digital_sovereignty_desc": "Ensuring complete control over your AI processes and data with on-premise solutions that maintain independence and security.",
    
    "regulated_sectors": "Regulated Industries",
    "regulated_sectors_desc": "Specialized solutions for highly regulated sectors, enabling AI adoption while ensuring compliance and sensitive data protection.",
    
    "open_innovation": "Open Innovation",
    "open_innovation_desc": "Promoting open-source solutions and collaborative development to drive innovation and transparency in AI implementation.",
    
    "democratizing_ai": "Democratizing AI",
    "democratizing_ai_desc": "Making advanced AI capabilities accessible to organizations of all sizes through scalable and cost-effective solutions.",
    
    // Solutions Section
    "solutions_title": "Our Solutions & Services",
    "solutions_subtitle": "Comprehensive AI and automation solutions tailored for enterprise needs",
    "onprem_ai_title": "On-Prem AI & Business Intelligence",
    "onprem_ai_desc": "Deploy AI models within your secure infrastructure for complete data control.",
    "automation_title": "Enterprise Automation",
    "automation_desc": "Connect AI capabilities with your business operations through intelligent workflows.",
    "training_title": "Training & Upskilling",
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
    
    // Real-time AI Models section
    "realtime_ai_models": "Real-time AI Models",
    "realtime_ai_models_desc": "See our on-premise AI solutions in action",
    
    // Case Studies
    "case_studies_title": "Practical Use Cases",
    "case_studies_subtitle": "Demonstration of our AI solutions capabilities and potential results",
    "case_study_1_title": "Technical Documentation System",
    "case_study_1_subtitle": "Local AI Integration",
    "case_study_1_desc": "Demonstration of local AI model implementation for secure document processing, showing potential time reduction while maintaining data privacy and system integrity.",
    "case_study_2_title": "Enterprise Compliance System",
    "case_study_2_subtitle": "Microsoft 365 & Local AI Integration",
    "case_study_2_desc": "Integration of local AI with Microsoft 365 for technical documentation and compliance systems, ensuring data sovereignty and regulatory compliance.",
    "case_study_3_title": "Public Security Agency",
    "case_study_3_subtitle": "Secure Pattern Analysis",
    "case_study_3_desc": "Implementation of privacy-first AI system for pattern detection in public safety data, ensuring complete data sovereignty and regulatory compliance.",
    "case_study_4_title": "Genetic Variant Analysis & Deployment",
    "case_study_4_subtitle": "Genetic Variant Analysis & Deployment",
    "case_study_4_desc": "Demonstration of a secure, AI-powered system for genetic variant analysis and deployment, capable of detecting anomalies and threats in real time without compromising data privacy.",
    "efficiency": "Processing Speed",
    "adoption": "Data Coverage",
    "time_saved": "Time Reduction",
    "cost_savings": "Cost Reduction",
    "capacity": "User Capacity",
    "hours_week": "Weekly Hours Saved",
    "accuracy": "Detection Accuracy",
    "daily_users": "Daily Users",
    "response_time": "Response Time",
    "completion": "Task Completion",
    "staff_trained": "Staff Trained",
    "training_time": "Implementation Time",
    
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
    "location": "Location",
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
    "training_section_title": "Training & Upskilling",
    "training_section_subtitle": "Comprehensive training programs to develop expertise in AI and automation within your organization",
    "training_program_1": {
      "title": "Advanced AI Implementation",
      "level": "Advanced",
      "duration": "2 weeks",
      "format": "Virtual",
      "modules": [
        "Introduction to private AI deployment",
        "Fine-tuning LLMs for specific use cases",
        "Optimizing model performance",
        "Security best practices"
      ]
    },
    "training_program_2": {
      "title": "RAG Systems Architecture",
      "level": "Intermediate",
      "duration": "1 week",
      "format": "Virtual",
      "modules": [
        "RAG system architecture",
        "Vector databases & embeddings",
        "Building knowledge retrieval systems",
        "Integration with enterprise systems"
      ]
    },
    "training_program_3": {
      "title": "n8n & AI Workflows",
      "level": "Intermediate",
      "duration": "1 week",
      "format": "Virtual",
      "modules": [
        "n8n basics & workflow design",
        "Integrating AI models in workflows",
        "Automating common business processes",
        "Monitoring & maintenance"
      ]
    },
    "training_program_4": {
      "title": "AI Security & Compliance",
      "level": "Advanced",
      "duration": "2 weeks",
      "format": "Virtual",
      "modules": [
        "AI security fundamentals",
        "Data protection & privacy",
        "Compliance frameworks for AI",
        "Security auditing & testing"
      ]
    },
    "training_duration": "Duration",
    "training_format": "Format",
    "training_modules": "Modules",
    "training_details": "Details",
    "training_register": "Register",
    
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
    "rights_reserved": "All rights reserved",
    "compliance_security": "Compliance & Security",
    "compliance_security_desc": "Enterprise-grade security and compliance frameworks for AI deployments.",
    success_stories: {
      title: "Practical Use Cases",
      subtitle: "Demostraciones prácticas de nuestras soluciones de IA",
      stories: [
        {
          title: "Local AI Integration",
          description: "Demostración de soluciones de IA local para procesamiento seguro y privado de datos",
          metrics: {
            efficiency: "90%",
            accuracy: "95%",
            users: "500+",
            time: "3 meses"
          }
        },
        {
          title: "Microsoft 365 Integration",
          description: "Demostración de integración de IA local con Microsoft 365 para documentación técnica y cumplimiento",
          metrics: {
            efficiency: "85%",
            accuracy: "92%",
            users: "1000+",
            time: "4 meses"
          }
        },
        {
          title: "AI-Powered Automation",
          description: "Demostración de automatización impulsada por IA para procesos empresariales",
          metrics: {
            efficiency: "95%",
            accuracy: "98%",
            users: "2000+",
            time: "6 meses"
          }
        }
      ]
    },
    metrics: {
      efficiency: "Processing Speed",
      capacity: "User Capacity",
      time_saved: "Time Reduction",
      accuracy: "Detection Accuracy",
      response_time: "Response Time",
      hours_week: "Weekly Hours Saved"
    }
  },
  
  es: {
    // Navbar
    "home": "Inicio",
    "about": "Nosotros",
    "solutions": "Soluciones",
    "case-studies": "Casos de Uso Práctico",
    "blog": "Blog",
    "contact": "Contacto",
    "request_demo": "Solicitar Demo",
    
    // Hero Section
    "hero_title": "IA Empresarial y Automatización",
    "hero_subtitle": "Seguro. Escalable. Local.",
    "hero_description": "Potencie su negocio con IA privada, automatización y soluciones locales seguras que le dan control total sobre sus datos y flujos de trabajo.",
    "hero_future": "para el Futuro",
    "deploy_ai": "Implemente su IA localmente",
    "explore_automation": "Explore automatización empresarial",
    "join_cursos": "Únase a la plataforma Cursos",
    
    // About Section
    "about_title": "Nuestra Visión",
    "company_desc": "Estamos comprometidos con la democratización del acceso a la IA mientras aseguramos la soberanía digital y privacidad de datos. Nuestra misión es empoderar a organizaciones de todos los tamaños con soluciones de IA seguras, éticas y eficientes.",
    "our_mission": "Nuestra Misión",
    "mission_statement": "En Inbloqs, estamos comprometidos a democratizar las tecnologías de IA y automatización para empresas de todos los tamaños. Creemos que la IA debe ser:",
    "private_secure": "Privada y Segura",
    "private_secure_desc": "Sus datos permanecen dentro de su infraestructura, nunca salen de su control.",
    "powerful_accessible": "Potente y Accesible",
    "powerful_accessible_desc": "Capacidades de IA de nivel empresarial sin requerir conocimientos especializados.",
    "integrated_automated": "Integrada y Automatizada",
    "integrated_automated_desc": "Conectada perfectamente con sus flujos de trabajo y procesos comerciales existentes.",
    "tech_stack": "Nuestra Pila Tecnológica",
    "ai_models": "Modelos de IA",
    "ai_models_list": "• LLama 3\n• DeepSeek\n• Mistral\n• Modelos locales personalizados",
    "local_ai": "Hosting de IA Local",
    "local_ai_list": "• Koboldcpp\n• OpenWebUI\n• Docker y Kubernetes\n• Implementación local",
    "automation_stack": "Automatización",
    "automation_list": "• Flujos de trabajo\n• Toma de decisiones impulsada por IA\n• Integración con Microsoft 365\n• Canales de datos",
    "security_stack": "Seguridad",
    "security_list": "• Encriptación de extremo a extremo\n• Arquitectura centrada en la privacidad\n• Integración API segura\n• Control de acceso basado en roles",
    
    // About Features
    "digital_sovereignty": "Soberanía Digital",
    "digital_sovereignty_desc": "Garantizando control total sobre tus procesos de IA y datos con soluciones on-premise que mantienen la independencia y seguridad.",
    
    "regulated_sectors": "Sectores Regulados",
    "regulated_sectors_desc": "Soluciones especializadas para sectores altamente regulados, facilitando la adopción de IA mientras se asegura el cumplimiento y la protección de datos sensibles.",
    
    "open_innovation": "Innovación Abierta",
    "open_innovation_desc": "Promoviendo soluciones de código abierto y desarrollo colaborativo para impulsar la innovación y transparencia en la implementación de IA.",
    
    "democratizing_ai": "Democratizando la IA",
    "democratizing_ai_desc": "Haciendo las capacidades avanzadas de IA accesibles a organizaciones de todos los tamaños mediante soluciones escalables y rentables.",
    
    // Solutions Section
    "solutions_title": "Nuestras Soluciones y Servicios",
    "solutions_subtitle": "Soluciones integrales de IA y automatización adaptadas a las necesidades empresariales",
    "onprem_ai_title": "IA Local e Inteligencia Empresarial",
    "onprem_ai_desc": "Implemente modelos de IA dentro de su infraestructura segura para un control total de datos.",
    "automation_title": "Automatización Empresarial",
    "automation_desc": "Conecte las capacidades de IA con sus operaciones comerciales mediante flujos de trabajo inteligentes.",
    "training_title": "Training & Upskilling",
    "training_desc": "Empower your teams with the knowledge to leverage AI and automation.",
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
    
    // Real-time AI Models section
    "realtime_ai_models": "Modelos de IA en Tiempo Real",
    "realtime_ai_models_desc": "Vea nuestras soluciones de IA locales en acción",
    
    // Case Studies
    "case_studies_title": "Casos de Uso Práctico",
    "case_studies_subtitle": "Demostración de capacidades y resultados potenciales de nuestras soluciones de IA",
    "case_study_1_title": "Sistema de Documentación Técnica",
    "case_study_1_subtitle": "Integración de IA Local",
    "case_study_1_desc": "Demostración de implementación de modelo de IA local para procesamiento seguro de documentos, mostrando la reducción potencial de tiempo mientras se mantiene la privacidad de datos e integridad del sistema.",
    "case_study_2_title": "Sistema de Cumplimiento Empresarial",
    "case_study_2_subtitle": "Integración de Microsoft 365 y IA Local",
    "case_study_2_desc": "Demostración de integración de IA local con Microsoft 365 para documentación técnica y sistemas de cumplimiento, asegurando soberanía de datos y conformidad regulatoria.",
    "case_study_3_title": "Agencia de Seguridad Pública",
    "case_study_3_subtitle": "Análisis Seguro de Patrones",
    "case_study_3_desc": "Demostración de sistema de IA centrado en la privacidad para detección de patrones en datos de seguridad pública, asegurando soberanía completa de datos y cumplimiento regulatorio.",
    "case_study_4_title": "Análisis y Despliegue Variantes Genéticas",
    "case_study_4_subtitle": "Análisis y Despliegue Variantes Genéticas",
    "case_study_4_desc": "Demostración de un sistema seguro de análisis y despliegue de variantes genéticas potenciado por IA, capaz de detectar anomalías y amenazas en tiempo real sin comprometer la privacidad de los datos.",
    "efficiency": "Velocidad de Proceso",
    "adoption": "Cobertura de Datos",
    "time_saved": "Reducción de Tiempo",
    "cost_savings": "Reducción de Costos",
    "capacity": "Capacidad de Usuarios",
    "hours_week": "Horas Semanales Ahorradas",
    "accuracy": "Precisión de Detección",
    "daily_users": "Usuarios Diarios",
    "response_time": "Tiempo de Respuesta",
    "completion": "Completitud de Tareas",
    "staff_trained": "Personal Capacitado",
    "training_time": "Tiempo de Implementación",
    
    // Blog
    "blog_title": "Blog y Centro de Conocimiento",
    "blog_subtitle": "Perspectivas expertas sobre IA, automatización e infraestructura segura",
    "read_more": "Leer más",
    "view_all_posts": "Ver todas las entradas del blog",
    
    // Contact
    "contact_title": "Contáctenos",
    "contact_subtitle": "Programe una demo o discuta cómo podemos ayudarle con sus necesidades de IA y automatización",
    "contact_info": "Información de Contacto",
    "email_us": "Envíenos un Correo",
    "call_us": "Llámenos",
    "location": "Ubicación",
    "join_community": "Únase a nuestra comunidad",
    "newsletter_desc": "Suscríbase a nuestro boletín para recibir las últimas actualizaciones sobre IA, automatización y oportunidades de capacitación.",
    "subscribe": "Suscribirse",
    "your_email": "Su dirección de correo electrónico",
    "request_demo_form": "Solicitar una Demo",
    "full_name": "Nombre Completo",
    "email_address": "Dirección de Correo",
    "company": "Empresa",
    "your_company": "Nombre de su empresa",
    "interest_area": "Área de Interés",
    "message": "Mensaje",
    "message_placeholder": "Cuéntenos sobre sus necesidades...",
    "form_success": "¡Gracias! Su mensaje ha sido enviado exitosamente.",
    "form_error": "Hubo un error al enviar su formulario. Por favor, inténtelo de nuevo.",
    
    // Training
    "training_section_title": "Capacitaciones: Formación en IA Empresarial & Upskilling",
    "training_section_subtitle": "Programas de formación integrales para desarrollar experiencia en IA y automatización en su organización",
    "training_program_1": {
      "title": "Implementación Avanzada de IA",
      "level": "Avanzado",
      "duration": "2 semanas",
      "format": "Virtual",
      "modules": [
        "Introducción a la implementación de IA privada",
        "Ajuste fino de LLMs para casos de uso específicos",
        "Optimización del rendimiento del modelo",
        "Mejores prácticas de seguridad"
      ]
    },
    "training_program_2": {
      "title": "Arquitectura de Sistemas RAG",
      "level": "Intermedio",
      "duration": "1 semana",
      "format": "Virtual",
      "modules": [
        "Arquitectura de sistemas RAG",
        "Bases de datos vectoriales y embeddings",
        "Construcción de sistemas de recuperación de conocimiento",
        "Integración con sistemas empresariales"
      ]
    },
    "training_program_3": {
      "title": "n8n & Flujos de Trabajo con IA",
      "level": "Intermedio",
      "duration": "1 semana",
      "format": "Virtual",
      "modules": [
        "Conceptos básicos de n8n y diseño de flujos de trabajo",
        "Integración de modelos de IA en flujos de trabajo",
        "Automatización de procesos comerciales comunes",
        "Monitoreo y mantenimiento"
      ]
    },
    "training_program_4": {
      "title": "Seguridad y Cumplimiento en IA",
      "level": "Avanzado",
      "duration": "2 semanas",
      "format": "Virtual",
      "modules": [
        "Fundamentos de seguridad en IA",
        "Protección de datos y privacidad",
        "Marcos de cumplimiento para IA",
        "Auditoría y pruebas de seguridad"
      ]
    },
    "training_duration": "Duración",
    "training_format": "Formato",
    "training_modules": "Módulos",
    "training_details": "Detalles",
    "training_register": "Registrarse",
    
    // Footer
    "about_us": "Sobre Nosotros",
    "on_premise_ai": "IA Local",
    "enterprise_automation": "Automatización Empresarial",
    "capacitaciones": "Capacitaciones",
    "it_infrastructure": "Infraestructura TI",
    "resources": "Recursos", 
    "whitepapers": "Documentos Técnicos",
    "case_studies": "Casos de Uso Práctico",
    "documentation": "Documentación",
    "legal": "Legal",
    "privacy_policy": "Política de Privacidad",
    "terms_of_service": "Términos de Servicio",
    "cookie_policy": "Política de Cookies",
    "gdpr_compliance": "Cumplimiento GDPR",
    "rights_reserved": "Todos los derechos reservados",
    "compliance_security": "Cumplimiento y Seguridad",
    "compliance_security_desc": "Marcos de seguridad y cumplimiento de nivel empresarial para implementaciones de IA.",
    success_stories: {
      title: "Casos de Uso Práctico",
      subtitle: "Demostraciones prácticas de nuestras soluciones de IA",
      stories: [
        {
          title: "Local AI Integration",
          description: "Demostración de soluciones de IA local para procesamiento seguro y privado de datos",
          metrics: {
            efficiency: "90%",
            accuracy: "95%",
            users: "500+",
            time: "3 meses"
          }
        },
        {
          title: "Microsoft 365 Integration",
          description: "Demostración de integración de IA local con Microsoft 365 para documentación técnica y cumplimiento",
          metrics: {
            efficiency: "85%",
            accuracy: "92%",
            users: "1000+",
            time: "4 meses"
          }
        },
        {
          title: "AI-Powered Automation",
          description: "Demostración de automatización impulsada por IA para procesos empresariales",
          metrics: {
            efficiency: "95%",
            accuracy: "98%",
            users: "2000+",
            time: "6 meses"
          }
        }
      ]
    },
    metrics: {
      efficiency: "Velocidad de Proceso",
      capacity: "Capacidad de Usuarios",
      time_saved: "Reducción de Tiempo",
      accuracy: "Precisión de Detección",
      response_time: "Tiempo de Respuesta",
      hours_week: "Horas Semanales Ahorradas",
      efficiency_improvement: "Mejora de Eficiencia",
      process_automation_rate: "Tasa de Automatización de Procesos",
      error_reduction: "Reducción de Errores",
      document_accuracy: "Precisión Documental",
      processing_speed: "Velocidad de Procesamiento",
      cost_savings: "Ahorro de Costos",
      response_accuracy: "Precisión de Respuesta",
      customer_satisfaction: "Satisfacción del Cliente",
      deployment_time: "Tiempo de Despliegue",
      result_accuracy: "Precisión de Resultados",
      data_processing_efficiency: "Eficiencia en el Procesamiento de Datos"
    }
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

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        return key;
      }
    }
    
    return value;
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

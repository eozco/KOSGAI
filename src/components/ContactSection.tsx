
import { useState } from "react";
import { MessageSquare, Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { submitContactForm, submitSubscription } from "@/services/emailService";

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "On-Premise AI Solutions",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      // Clear form on success
      setFormData({
        name: "",
        email: "",
        company: "",
        interest: "On-Premise AI Solutions",
        message: ""
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    
    setIsSubmitting(true);
    try {
      await submitSubscription({ email: subscribeEmail });
      setSubscribeEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-ko-primary/10 dark:bg-ko-primary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("contact_title")} <span className="text-gradient">Touch</span></h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t("contact_subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">{t("contact_info")}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-ko-secondary/20 dark:bg-ko-secondary/30 text-ko-secondary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{t("email_us")}</h4>
                  <p className="text-gray-600 dark:text-gray-400">info@kosoluciones.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-ko-accent/20 dark:bg-ko-accent/30 text-ko-accent">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{t("call_us")}</h4>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-ko-primary/20 dark:bg-ko-primary/30 text-ko-primary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{t("ai_chatbot")}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("ai_chatbot_desc")}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-2 border-ko-secondary text-ko-secondary hover:bg-ko-secondary/10"
                  >
                    {t("chat_with_ai")}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 glassmorphism rounded-xl">
              <h4 className="font-semibold mb-2">{t("join_community")}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {t("newsletter_desc")}
              </p>
              
              <form className="flex gap-2" onSubmit={handleSubscribe}>
                <Input 
                  type="email" 
                  placeholder={t("your_email")}
                  className="bg-white/50 dark:bg-gray-900/50"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  required
                />
                <Button type="submit" disabled={isSubmitting}>
                  {t("subscribe")}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="bg-white/50 dark:bg-ko-dark/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-6">{t("request_demo_form")}</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t("full_name")}
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="bg-white/80 dark:bg-gray-900/80"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {t("email_address")}
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="john@company.com"
                    className="bg-white/80 dark:bg-gray-900/80"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    {t("company")}
                  </label>
                  <Input 
                    id="company"
                    name="company"
                    placeholder={t("your_company")}
                    className="bg-white/80 dark:bg-gray-900/80"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-1">
                    {t("interest_area")}
                  </label>
                  <select 
                    id="interest"
                    name="interest"
                    className="w-full rounded-md border border-input bg-white/80 dark:bg-gray-900/80 px-3 py-2 text-sm ring-offset-background"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option>On-Premise AI Solutions</option>
                    <option>Enterprise Automation</option>
                    <option>Training & Upskilling</option>
                    <option>Secure IT Infrastructure</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {t("message")}
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder={t("message_placeholder")}
                  rows={4}
                  className="bg-white/80 dark:bg-gray-900/80"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-ko-secondary to-ko-accent hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : t("request_demo")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

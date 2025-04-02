import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { submitContactForm, submitSubscription, ContactFormData } from "@/services/emailService";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");

  // Define form schema with Zod
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    company: z.string().min(1, {
      message: "Company name is required.",
    }),
    interest: z.string(),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }),
  });

  // Initialize form with react-hook-form and zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "On-Premise AI Solutions",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Convert the form values to ContactFormData to ensure all required fields are present
      const contactData: ContactFormData = {
        name: values.name,
        email: values.email,
        company: values.company,
        interest: values.interest,
        message: values.message
      };
      
      await submitContactForm(contactData);
      form.reset();
      toast({
        title: t("form_success"),
        description: t("form_success"),
      });
    } catch (error) {
      toast({
        title: t("form_error"),
        description: t("form_error"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Newsletter subscription handler
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    
    setIsSubmitting(true);
    try {
      await submitSubscription({ email: subscribeEmail });
      setSubscribeEmail("");
      toast({
        title: t("form_success"),
        description: "Thank you for subscribing to our newsletter!",
      });
    } catch (error) {
      toast({
        title: t("form_error"),
        description: t("form_error"),
        variant: "destructive",
      });
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("contact_title")}</h2>
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
                  <p className="text-gray-600 dark:text-gray-400">info@kosolucionesgenerales.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-ko-accent/20 dark:bg-ko-accent/30 text-ko-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{t("call_us")}</h4>
                  <p className="text-gray-600 dark:text-gray-400">+52 331 319 5542</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 rounded-full bg-ko-primary/20 dark:bg-ko-primary/30 text-ko-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{t("location")}</h4>
                  <p className="text-gray-600 dark:text-gray-400">Guadalajara, México</p>
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
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("full_name")}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="bg-white/80 dark:bg-gray-900/80" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("email_address")}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@company.com" 
                            className="bg-white/80 dark:bg-gray-900/80" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("company")}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t("your_company")} 
                            className="bg-white/80 dark:bg-gray-900/80" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("interest_area")}</FormLabel>
                        <FormControl>
                          <select 
                            className="w-full rounded-md border border-input bg-white/80 dark:bg-gray-900/80 px-3 py-2 text-sm ring-offset-background"
                            {...field}
                          >
                            <option>On-Premise AI Solutions</option>
                            <option>Enterprise Automation</option>
                            <option>Training & Upskilling</option>
                            <option>Secure IT Infrastructure</option>
                            <option>Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("message")}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t("message_placeholder")} 
                          rows={4}
                          className="bg-white/80 dark:bg-gray-900/80" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-ko-secondary to-ko-accent hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : t("request_demo")}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


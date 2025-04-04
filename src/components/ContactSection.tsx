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
    <section id="contact" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {t("contact_title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("contact_subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white">{t("contact_info")}</h3>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="mr-4 p-3 rounded-xl bg-violet-900/30 text-violet-400 group-hover:bg-violet-900/50 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">{t("email_us")}</h4>
                  <p className="text-gray-400">info@inbloqs.com</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mr-4 p-3 rounded-xl bg-purple-900/30 text-purple-400 group-hover:bg-purple-900/50 transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">{t("call_us")}</h4>
                  <p className="text-gray-400">+52 331 319 5542</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="mr-4 p-3 rounded-xl bg-indigo-900/30 text-indigo-400 group-hover:bg-indigo-900/50 transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">{t("location")}</h4>
                  <p className="text-gray-400">Guadalajara, México</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-900/50 hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <h4 className="font-semibold text-xl mb-3 text-white">{t("join_community")}</h4>
              <p className="text-gray-400 mb-6">
                {t("newsletter_desc")}
              </p>
              
              <form className="flex gap-3" onSubmit={handleSubscribe}>
                <Input 
                  type="email" 
                  placeholder={t("your_email")}
                  className="bg-gray-900/90 border-purple-900 focus:border-purple-500"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300"
                >
                  {t("subscribe")}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-900/50 hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8 text-white">{t("request_demo_form")}</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t("full_name")}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="bg-gray-900/90 border-purple-900 focus:border-purple-500" 
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
                        <FormLabel className="text-white">{t("email_address")}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@company.com" 
                            className="bg-gray-900/90 border-purple-900 focus:border-purple-500" 
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
                        <FormLabel className="text-white">{t("company")}</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t("your_company")} 
                            className="bg-gray-900/90 border-purple-900 focus:border-purple-500" 
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
                        <FormLabel className="text-white">{t("interest_area")}</FormLabel>
                        <FormControl>
                          <select 
                            className="w-full rounded-md border border-purple-900 bg-gray-900/90 px-3 py-2 text-sm ring-offset-background focus:border-purple-500"
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
                      <FormLabel className="text-white">{t("message")}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t("message_placeholder")} 
                          rows={4}
                          className="bg-gray-900/80 border-purple-900 focus:border-purple-500" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300"
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


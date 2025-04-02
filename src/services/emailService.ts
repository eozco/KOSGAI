import { toast } from "@/components/ui/use-toast";

interface EmailData {
  to: string;
  subject: string;
  body: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

interface SubscriptionData {
  email: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // In a real implementation, this would send the email using an API
    // For now, we'll simulate a successful email send
    console.log("Email would be sent with data:", data);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  const emailData: EmailData = {
    to: "info@kosolucionesgenerales.com",
    subject: `Demo Request from ${formData.name} - ${formData.company}`,
    body: `
      Name: ${formData.name}
      Email: ${formData.email}
      Company: ${formData.company}
      Interest Area: ${formData.interest}
      Message: ${formData.message}
    `
  };
  
  const success = await sendEmail(emailData);
  
  if (success) {
    toast({
      title: "Form submitted successfully",
      description: "We'll be in touch soon!",
    });
  } else {
    toast({
      title: "Error submitting form",
      description: "Please try again later or contact us directly.",
      variant: "destructive",
    });
  }
  
  return success;
};

export const submitSubscription = async (data: SubscriptionData): Promise<boolean> => {
  const emailData: EmailData = {
    to: "info@kosoluciones.com",
    subject: "New Newsletter Subscription",
    body: `New subscription from: ${data.email}`
  };
  
  const success = await sendEmail(emailData);
  
  if (success) {
    toast({
      title: "Subscription successful",
      description: "Thank you for subscribing to our newsletter!",
    });
  } else {
    toast({
      title: "Error subscribing",
      description: "Please try again later.",
      variant: "destructive",
    });
  }
  
  return success;
};

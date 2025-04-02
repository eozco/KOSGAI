
import { Cpu, Database, Lock, Workflow } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-ko-secondary/10 dark:bg-ko-secondary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About <span className="text-gradient">KO Soluciones Generales</span></h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Empowering businesses with private AI, automation, and secure on-premise solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                At KO Soluciones Generales, we're committed to democratizing AI and automation technologies for enterprises of all sizes. We believe that AI should be:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-ko-secondary/20 dark:bg-ko-secondary/30 text-ko-secondary">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Private & Secure</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Your data stays within your infrastructure, never leaving your control.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-ko-accent/20 dark:bg-ko-accent/30 text-ko-accent">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Powerful & Accessible</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise-grade AI capabilities without requiring specialized expertise.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-ko-primary/20 dark:bg-ko-primary/30 text-ko-primary">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Integrated & Automated</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Seamlessly connected to your existing workflows and business processes.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Our Technology Stack</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/30 dark:bg-ko-dark/30 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <Database className="w-5 h-5 text-ko-secondary mr-2" />
                    <h4 className="font-semibold">AI Models</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• LLama 3</li>
                    <li>• DeepSeek</li>
                    <li>• Mistral</li>
                    <li>• Fine-tuned local models</li>
                  </ul>
                </div>
                
                <div className="bg-white/30 dark:bg-ko-dark/30 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <Cpu className="w-5 h-5 text-ko-accent mr-2" />
                    <h4 className="font-semibold">Local AI Hosting</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Koboldcpp</li>
                    <li>• OpenWebUI</li>
                    <li>• Docker & Kubernetes</li>
                    <li>• On-premise deployment</li>
                  </ul>
                </div>
                
                <div className="bg-white/30 dark:bg-ko-dark/30 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <Workflow className="w-5 h-5 text-ko-primary mr-2" />
                    <h4 className="font-semibold">Automation</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• n8n workflows</li>
                    <li>• AI-driven decision making</li>
                    <li>• Microsoft 365 integration</li>
                    <li>• Data pipelines</li>
                  </ul>
                </div>
                
                <div className="bg-white/30 dark:bg-ko-dark/30 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center mb-3">
                    <Lock className="w-5 h-5 text-ko-secondary mr-2" />
                    <h4 className="font-semibold">Security</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• End-to-end encryption</li>
                    <li>• Privacy-first architecture</li>
                    <li>• Secure API integration</li>
                    <li>• Role-based access control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

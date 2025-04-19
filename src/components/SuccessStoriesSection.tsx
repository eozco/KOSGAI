import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Cloud, 
  Database, 
  CheckCircle, 
  Clock, 
  Zap,
  FileText, 
  BarChart
} from 'lucide-react';

export default function SuccessStoriesSection() {
  const { t } = useLanguage();

  const stories = [
    {
      icon: FileText,
      title: t('case_study_1_title'),
      subtitle: t('case_study_1_subtitle'),
      description: t('case_study_1_desc'),
      metrics: [
        { icon: Zap, label: "Efficiency Improvement", value: "75%" },
        { icon: Clock, label: "Process Automation Rate", value: "85%" },
        { icon: CheckCircle, label: "Error Reduction", value: "40%" }
      ],
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Cloud,
      title: t('case_study_2_title'),
      subtitle: t('case_study_2_subtitle'),
      description: t('case_study_2_desc'),
      metrics: [
        { icon: Zap, label: "Document Accuracy", value: "89%" },
        { icon: Clock, label: "Processing Speed", value: "2x faster" },
        { icon: BarChart, label: "Cost Savings", value: "$10K/year" }
      ],
      gradient: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: Shield,
      title: t('case_study_3_title'),
      subtitle: t('case_study_3_subtitle'),
      description: t('case_study_3_desc'),
      metrics: [
        { icon: CheckCircle, label: "Response Accuracy", value: "92%" },
        { icon: Clock, label: "Avg. Response Time", value: "<5s" },
        { icon: Zap, label: "Customer Satisfaction", value: "4.8/5" }
      ],
      gradient: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: Database,
      title: t('case_study_4_title'),
      subtitle: t('case_study_4_subtitle'),
      description: t('case_study_4_desc'),
      metrics: [
        { icon: Zap, label: "Data Processing Efficiency", value: "85%" },
        { icon: BarChart, label: "Deployment Time", value: "2 weeks" },
        { icon: CheckCircle, label: "Result Accuracy", value: "97%" }
      ],
      gradient: 'from-indigo-500/20 to-indigo-600/20'
    }
  ];

  return (
    <section id="success" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Pulsing Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4"
          >
            {t('case_studies_title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-12"
          >
            {t('case_studies_subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${story.gradient} flex items-center justify-center mb-6`}>
                  <story.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{story.title}</h3>
                <h4 className="text-md text-purple-400 mb-4">{story.subtitle}</h4>
                <p className="text-gray-300 mb-6">{story.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <metric.icon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-400">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
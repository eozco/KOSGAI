import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import TrainingSection from '@/components/TrainingSection';
import Footer from '@/components/Footer';
import ParticleNetwork from '@/components/ParticleNetwork';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  // Change the page title
  useEffect(() => {
    document.title = "Inbloqs | Enterprise AI & Automation";
  }, []);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <ParticleNetwork />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SolutionsSection />
          <TrainingSection />
          <CaseStudiesSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;


import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleNetwork from '@/components/ParticleNetwork';

const Index = () => {
  // Change the page title
  useEffect(() => {
    document.title = "KO Soluciones Generales | Enterprise AI & Automation";
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <ParticleNetwork />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <CaseStudiesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { VillageStructure } from './components/VillageStructure';
import { DemographicsSection } from './components/DemographicsSection';
import { NewsSection } from './components/NewsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Set document title
    document.title = 'Desa Tangkisanpos - Kec. Jogonalan, Kab. Klaten';
    
    // Load Google Font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navigation />
      <HeroSection />
      <ProfileSection />
      <VillageStructure />
      <DemographicsSection />
      <NewsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

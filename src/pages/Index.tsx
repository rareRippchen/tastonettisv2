import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { VideoSection } from "@/components/video-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

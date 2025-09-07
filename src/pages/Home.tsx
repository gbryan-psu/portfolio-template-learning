import { StarBackground } from '../components/starBackground';
import { Navbar } from '../components/navbar';
import { HomeSection } from '../components/homeSection';
import { AboutSection } from '../components/aboutSection';
import { SkillsSection } from '../components/skillsSection';
import { ProjectsSection } from '../components/projectsSection';
import { ContactSection } from '../components/contactSection';
import { Footer } from '../components/footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

import { StarBackground } from '../components/starBackground';
import { Navbar } from '../components/navbar';
import { HomeSection } from '../components/homeSection';
import { AboutSection } from '../components/aboutSection';
import { SkillsSection } from '../components/skillsSection';
import { ProjectsSection } from '../components/projectsSection';

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      {/* Main Content */}
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      {/* Footer */}
    </div>
  );
};

import { ThemeToggle } from '../components/themeToggle';
import { StarBackground } from '../components/starBackground';
import { Navbar } from '../components/navbar';
import { HomeSection } from '../components/homeSection';
import { AboutSection } from '../components/aboutSection';

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      {/* Main Content */}
      <main>
        <HomeSection />
        <AboutSection />
      </main>
      {/* Footer */}
    </div>
  );
};

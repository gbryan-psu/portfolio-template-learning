import { useState } from 'react';
import { cn } from '../lib/utils';

type Skill = {
  name: string;
  level: number;
  category: string;
};

const skills: Skill[] = [
  // --- Frontend ---
  { name: 'HTML/CSS', level: 70, category: 'frontend' },
  { name: 'JavaScript', level: 65, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'React', level: 55, category: 'frontend' },
  { name: 'TailwindCSS', level: 60, category: 'frontend' },

  // --- Backend ---
  { name: 'Node.js', level: 40, category: 'backend' },
  { name: 'Python', level: 45, category: 'backend' },

  // --- Testing / Quality ---
  { name: 'Playwright', level: 85, category: 'testing' },
  { name: 'Testing Methodologies', level: 70, category: 'testing' }, // black/white box, regression, etc

  // --- DevOps / Cloud ---
  { name: 'Azure DevOps', level: 60, category: 'devops' },
  { name: 'CI/CD Pipelines', level: 60, category: 'devops' },
  { name: 'Application Insights', level: 50, category: 'devops' },

  // --- Tooling ---
  { name: 'Git/GitHub', level: 65, category: 'tooling' },
  { name: 'VS Code', level: 80, category: 'tooling' },
  { name: 'ESLint/Prettier', level: 65, category: 'tooling' },
];

const categories = ['all', 'frontend', 'backend', 'testing', 'devops', 'tooling'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-primary/30'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-primary/20 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-small muted-foreground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

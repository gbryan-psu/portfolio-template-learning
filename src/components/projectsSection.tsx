import { Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Robot Car Project',
    description:
      'A keyboard-controlled RC car built with Raspberry Pi and C. Features multiple driving modes, including self-driving with infrared sensors, and uses multithreading for motor control.',
    image: '/projects/roboCar.jpg',
    tags: ['Raspberry Pi', 'C', 'Multithreading', 'RTOS'],
  },
  {
    id: 2,
    title: 'Playwright Automation Framework',
    description:
      'A scalable, TypeScript-based Playwright framework for end-to-end testing. Built with the Page Object Model, it supports reusable fixtures, CI/CD integration, and team onboarding.',
    image: '/projects/pwLogo.jpg',
    tags: ['TypeScript', 'Playwright', 'Automation', 'Testing'],
  },
  {
    id: 3,
    title: 'Web Development Project',
    description:
      'A personal portfolio site built with React, TypeScript, and Vite. Highlights responsive design, interactive features, and a focus on clean, maintainable code.',
    image: '/projects/portfolioProj.jpg',
    tags: ['TypeScript', 'Vite', 'React', 'Web Development'],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on over the years. Each project showcases my
          skills and expertise in various technologies and methodologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
            >
              <div className="aspect-[4/3] bg-primary/20 flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover:nth-1 object-contain w-full h-full transition-transform duration-300 rounded-md group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs border border-primary/80 font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-1 ">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 p-4">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/gbryan-psu"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Checkout My GitHub <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

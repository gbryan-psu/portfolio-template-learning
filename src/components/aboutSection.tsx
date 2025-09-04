import { Briefcase, Code, User } from 'lucide-react';
import { DownloadIcon } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Quality Engineer Transitioning to Developer
            </h3>
            <p className="text-muted-foreground">
              With 4 years of experience as a Software Quality Engineer, I have honed my skills in
              ensuring the delivery of high-quality software products. My journey has recently led
              me to explore new opportunities in software development, where I can leverage my
              testing expertise, and passion for programming to build robust applications.
            </p>
            <p className="text-muted-foreground">
              I am proficient in TypeScript, Playwright, and React, and I am eager to contribute to
              innovative projects that challenge my skills and allow me to grow as a developer.
            </p>
            <p className="text-muted-foreground">
              I hold a degree in Computer Engineering, which has given me a strong foundation in
              both hardware programming and software development. By combining my understanding of
              hardware with my professional experience as a Software Quality Engineer, I bring a
              unique perspective to front-end web and application development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
              <a
                href="docs/GDB-Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                <DownloadIcon className="inline-block mr-1" />
                Download Resumé
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    I specialize in modern web development with TypeScript, React, and Playwright. I
                    build clean, reusable components and robust testing frameworks to ensure quality
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    I build with TailwindCSS for a modern, responsive design. My quality engineering
                    background drives my focus on user-friendly, accessible interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    I drive projects from start to finish using agile practices, including designing
                    and maintaining a Playwright testing framework in TypeScript. I also mentor
                    quality engineers, ensuring our solutions scale and deliver lasting value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

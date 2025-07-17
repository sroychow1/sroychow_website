import Project from './Project';

interface ResearchProps {
  projects: {
    title: string;
    description: string;
    paperLink?: string;
    githubLink?: string;
    posterLink?: string;
    devpostLink?: string;
    youtubeLink?: string;
    date: string;
    coauthors?: string[];
  }[];
}

const Research = ({ projects }: ResearchProps) => {
  return (
    <section className="max-w-4xl mx-auto px-4">
      {/* <h2 className="text-4xl font-bold mb-8 text-left">Research and Projects</h2> */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Research; 
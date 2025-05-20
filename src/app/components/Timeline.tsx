import Experience from './Experience';

interface TimelineProps {
  experiences: {
    imageUrl: string;
    title: string;
    description: string;
    company: string;
    date: string;
  }[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-left">Experience</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
        
        {/* Experiences */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              <Experience {...experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 
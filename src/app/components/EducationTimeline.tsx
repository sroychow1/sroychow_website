import Education from './Education';

interface EducationTimelineProps {
  education: {
    imageUrl: string;
    degree: string;
    school: string;
    description: string;
    date: string;
  }[];
}

const EducationTimeline = ({ education }: EducationTimelineProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-left">Education</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
        
        {/* Education entries */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <Education {...edu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline; 
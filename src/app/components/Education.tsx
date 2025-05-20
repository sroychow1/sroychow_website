import Image from 'next/image';

interface EducationProps {
  imageUrl: string;
  degree: string;
  school: string;
  description: string;
  date: string;
}

const Education = ({ imageUrl, degree, school, description, date }: EducationProps) => {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${school} logo`}
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{degree}</h3>
        <p className="text-gray-600 font-medium">{school}</p>
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Education; 
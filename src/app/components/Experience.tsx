import Image from 'next/image';

interface ExperienceProps {
  imageUrl: string;
  title: string;
  description: string;
  company: string;
  date: string;
}

const Experience = ({ imageUrl, title, description, company, date }: ExperienceProps) => {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${company} logo`}
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 font-medium">{company}</p>
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Experience; 
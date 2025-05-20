import { FaGithub, FaFilePdf, FaGoogleDrive, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';

interface ProjectProps {
  title: string;
  description: string;
  paperLink?: string;
  githubLink?: string;
  posterLink?: string;
  devpostLink?: string;
  youtubeLink?: string;
  date: string;
  coauthors?: string[];
}

const Project = ({ title, description, paperLink, githubLink, posterLink, devpostLink, youtubeLink, date, coauthors }: ProjectProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          {coauthors && (
            <p className="text-sm text-gray-500">
              Co-authors: {coauthors.join(', ')}
            </p>
          )}
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="flex gap-3">
          {paperLink && (
            <a
              href={paperLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              title="View Paper"
            >
              <FaFilePdf className="w-5 h-5" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              title="View on GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {posterLink && (
            <a
              href={posterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors"
              title="View Poster"
            >
              <FaGoogleDrive className="w-5 h-5" />
            </a>
          )}
          {devpostLink && (
            <a
              href={devpostLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              title="View on Devpost"
            >
             <FaExternalLinkAlt size={20} />
            </a>
          )}
          {youtubeLink && (
            <a
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors"
              title="Watch on YouTube"
            >
              <FaYoutube size={20} />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Project; 
'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  const socialItems = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/sroychow1', 
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/shoumik-roychowdhury-519a471a9/', 
    },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full shadow-lg px-8 py-4">
      <div className="flex items-center space-x-6">
        {socialItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label={item.name}
            >
              <Icon className="w-7 h-7" />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default SocialLinks; 
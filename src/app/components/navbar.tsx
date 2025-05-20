'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Bio', path: '/' },
    { name: 'CV', path: '/' },
    { name: 'Contact', path: '/' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full shadow-lg px-6 py-3">
      <div className="flex items-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`text-sm font-medium transition-colors duration-200 ${
              pathname === item.path
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 
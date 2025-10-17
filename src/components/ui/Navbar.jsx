// src/components/ui/Navbar.jsx
import React from 'react';
import { useTheme } from '../../hooks/useTheme'; // Correct import path
import Button from './Button';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold gradient-text">
              Jane Odawa
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="!p-2"
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="outline"
                size="sm"
                className="!p-2"
              >
                ☰
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
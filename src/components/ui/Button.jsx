// src/components/ui/Button.jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4';
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-300 dark:focus:ring-primary-700',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:focus:ring-gray-600',
    accent: 'bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-300 dark:focus:ring-accent-700',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-300 dark:focus:ring-red-700',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-white'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
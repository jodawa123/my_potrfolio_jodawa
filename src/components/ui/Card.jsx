// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  ...props 
}) => {
  const baseClasses = 'rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm overflow-hidden';
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-lg hover:scale-105' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
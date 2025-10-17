// src/hooks/useTheme.js
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// Custom hook for using theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
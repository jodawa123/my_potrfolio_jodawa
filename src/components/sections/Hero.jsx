// src/components/sections/Hero.jsx
import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Button from '../ui/Button';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-400 to-accent-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          JO
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-5 max-w-2xl mx-auto leading-relaxed">Hello there 👋🏾</p>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
           I'm  {portfolioData.personalInfo.name} <br /> <span className="gradient-text mb-6">{portfolioData.personalInfo.title} </span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.personalInfo.catchy}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-300 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
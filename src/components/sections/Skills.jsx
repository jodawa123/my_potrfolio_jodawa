// src/components/sections/Skills.jsx
import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Card from '../ui/Card';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend Development', skills: portfolioData.skills.frontend, color: 'primary' },
    { title: 'Backend Development', skills: portfolioData.skills.backend, color: 'accent' },
    { title: 'Mobile Development', skills: portfolioData.skills.mobile, color: 'primary' },
    { title: 'Cloud & DevOps', skills: portfolioData.skills.cloud, color: 'accent' },
    { title: 'Tools', skills: portfolioData.skills.tools, color: 'primary' },
    { title: 'Machine Learning', skills: portfolioData.skills.ml, color: 'accent' },
   
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 border-primary-200 dark:border-primary-700',
      accent: 'bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200 border-accent-200 dark:border-accent-700'
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} hover className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
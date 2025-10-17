// src/components/sections/Experience.jsx
import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import Card from '../ui/Card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-primary-200 dark:bg-primary-800"></div>
              )}
              
              <div className="flex items-start space-x-6 mb-12">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>
                </div>

                {/* Experience content */}
                <Card className="flex-1 p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
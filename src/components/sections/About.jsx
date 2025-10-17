// src/components/sections/About.jsx
import React from "react";
import { portfolioData } from "../../data/portfolioData";
import Button from "../ui/Button"; // adjust path if needed
import profileImg from "../../assets/me2.jpg"; // replace with your image

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {portfolioData.about.info}
            </p>

            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={profileImg}
              alt="Jane Odawa"
              className="w-80 h-80 object-cover rounded-2xl shadow-lg ring-4 ring-primary-200 dark:ring-primary-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

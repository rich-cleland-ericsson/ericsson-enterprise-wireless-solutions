import React from 'react';

interface SectionProps {
  component: {
    title: string;
    description: string;
  };
  index: number;
}

const Section: React.FC<SectionProps> = ({ component, index }) => {
  return (
    <div key={index} className="py-8 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {component.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {component.description}
        </p>
      </div>
    </div>
  );
};

export default Section;

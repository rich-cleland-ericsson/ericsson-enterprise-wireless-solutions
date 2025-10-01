import React from 'react';

interface DefaultComponentProps {
  component: any;
  index: number;
}

const DefaultComponent: React.FC<DefaultComponentProps> = ({
  component,
  index,
}) => {
  return (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-lg p-6 mb-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {component.title || `Component: ${component._content_type_uid}`}
      </h3>
      <div className="text-gray-600">
        <pre className="text-sm bg-gray-50 p-4 rounded overflow-x-auto">
          {JSON.stringify(component, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DefaultComponent;

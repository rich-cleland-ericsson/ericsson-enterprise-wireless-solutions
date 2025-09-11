import React from 'react';

interface RenderComponentsProps {
  pageComponents: any[];
  contentTypeUid: string;
  entryUid: string;
  locale: string;
  blogPost?: boolean;
}

const RenderComponents: React.FC<RenderComponentsProps> = ({
  pageComponents,
  contentTypeUid,
  entryUid,
  locale,
}) => {
  if (!pageComponents || pageComponents.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            No Content Found
          </h1>
          <p className="text-gray-600">
            This page doesn&apos;t have any content components yet.
          </p>
        </div>
      </div>
    );
  }

  // TODO: WE NEED TO ADD COMPONENTS TO LOAD FOR EACH SWITCH CASE
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-ericsson-dark-blue">
      {pageComponents.map((component: any, index: number) => {
        // This is a basic renderer - you would typically have specific components for each type
        switch (component._content_type_uid) {
          case 'hero_banner':
            return (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 mb-8 rounded-lg"
              >
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {component.title}
                  </h1>
                  <p className="text-xl mb-8 max-w-2xl mx-auto">
                    {component.description}
                  </p>
                  {component.button && (
                    <a
                      href={component.button.href}
                      className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      {component.button.title}
                    </a>
                  )}
                </div>
              </div>
            );

          case 'section':
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

          default:
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 mb-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {component.title ||
                    `Component: ${component._content_type_uid}`}
                </h3>
                <div className="text-gray-600">
                  <pre className="text-sm bg-gray-50 p-4 rounded overflow-x-auto">
                    {JSON.stringify(component, null, 2)}
                  </pre>
                </div>
              </div>
            );
        }
      })}
    </div>
  );
};

export default RenderComponents;

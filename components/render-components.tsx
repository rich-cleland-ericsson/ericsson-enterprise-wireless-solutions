import React from 'react';
import ThreeColumnHomePage from './blocks/ThreeColumnHomePage';
import CallToAction from './blocks/CallToAction';
import RecentPostBlog from './blocks/RecentPostBlog';
import NewFiftyFifty from './blocks/NewFiftyFifty';
import HeroBlock from './blocks/HeroBlock';
import SectionTitle from './blocks/SectionTitle';
import BlogBody from './blocks/BlogBody';
import Section from './blocks/Section';
import DefaultComponent from './blocks/DefaultComponent';

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

  return (
    <div className="flex flex-col">
      {pageComponents.map((component: any, index: number) => {
        const componentType = Object.keys(component)[0];
        const componentData = component[componentType];

        // This is a basic renderer - you would typically have specific components for each type
        switch (componentType) {
          case 'three_column_home_page':
            return (
              <ThreeColumnHomePage key={index} componentData={componentData} />
            );
          case 'call_to_action':
            return <CallToAction key={index} componentData={componentData} />;
          case 'recent_post_blog':
            return <RecentPostBlog key={index} componentData={componentData} />;
          case 'new_fifty_fifty':
            return <NewFiftyFifty key={index} componentData={componentData} />;
          case 'hero_block':
            return (
              <HeroBlock
                key={index}
                componentData={componentData}
                index={index}
              />
            );
          case 'section_title':
            return <SectionTitle key={index} componentData={componentData} />;
          case 'blog_body':
            return <BlogBody key={index} componentData={componentData} />;

          case 'section':
            return <Section key={index} component={component} index={index} />;

          default:
            return (
              <DefaultComponent
                key={index}
                component={component}
                index={index}
              />
            );
        }
      })}
    </div>
  );
};

export default RenderComponents;

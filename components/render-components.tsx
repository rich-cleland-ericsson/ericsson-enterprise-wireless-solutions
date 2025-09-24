import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselItem,
  CarouselNext,
} from './ui/carousel';
import { Card, CardTitle, CardDescription, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { clsx } from 'clsx';

function calcPosition(position: string) {
  const pos = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  return pos[position as keyof typeof pos] || 'text-left';
}

function calcStyle(style: string) {
  const setStyle = {
    h1: 'text-4xl font-semibold',
    h2: 'text-2xl font-semibold',
    h3: 'text-xl font-semibold',
    h4: 'text-md font-semibold',
    h5: 'text-sm font-semibold',
    h6: 'text-sm font-bold',
  };
  return setStyle[style as keyof typeof setStyle] || 'text-4xl font-semibold';
}

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
    <div className="">
      {pageComponents.map((component: any, index: number) => {
        const componentType = Object.keys(component)[0];
        const componentData = component[componentType];

        // This is a basic renderer - you would typically have specific components for each type
        switch (componentType) {
          case 'three_column_home_page':
            return (
              <div className="flex flex-row container gap-3 mb-10 mt-4">
                {componentData.group.map((card: any) => (
                  <Card
                    key={card._metadata.uid}
                    className="w-1/3 bg-ericsson-gray-2 flex flex-col hover:bg-ericsson-blue hover:text-white text-center p-6"
                  >
                    <CardTitle>{card.card_title}</CardTitle>
                    <div className="mb-10 mt-8 text-xl">
                      {card.card_sub_title}
                    </div>
                    <CardFooter>
                      <Button className="w-full">
                        {card.button_link.title}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            );
          case 'call_to_action':
            return (
              <div className="bg-ericsson-teal py-20">
                <div className="container flex flex-row items-center justify-between">
                  <div className="text-2xl text-white">
                    {componentData.call_to_action_text}
                  </div>
                  <div>
                    <Button>{componentData.cta_text}</Button>
                  </div>
                </div>
              </div>
            );
          case 'recent_post_blog':
            return <div></div>;
          case 'new_fifty_fifty':
            return (
              <div className="flex flex-row items-center container">
                <div>
                  <img src={componentData.col_1_block[0].test_image.file.url} />
                </div>
                <div>
                  <h3 className="text-2xl pb-2">
                    {componentData.col_2_block[0].col_2_card_block.col_2_title}
                  </h3>
                  <div className="text-base pb-6">
                    {
                      componentData.col_2_block[0].col_2_card_block
                        .col_2_description
                    }
                  </div>
                  <Button>
                    {
                      componentData.col_2_block[0].col_2_card_block
                        .col_2_cta_text
                    }
                  </Button>
                </div>
              </div>
            );
          case 'hero_block':
            return (
              <div key={index} className="">
                <Carousel
                  opts={{ align: 'start', loop: true }}
                  className="w-full min-h-[500px]"
                >
                  <CarouselContent>
                    {componentData.hero_slides.map((slide: any) => (
                      <CarouselItem
                        key={slide._metadata.uid}
                        className={clsx(
                          'flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat h-[500px]'
                        )}
                        style={{
                          backgroundImage: slide.background_media?.url
                            ? `url(${slide.background_media.url})`
                            : undefined,
                        }}
                      >
                        <div className="w-full container">
                          <div
                            className={clsx(
                              'flex flex-col items-start justify-center text-white text-4xl w-1/3',
                              calcPosition(slide.text_alignment)
                            )}
                          >
                            {slide.title}
                            {slide.primary_cta && (
                              <Button className="mt-6 bg-white text-black hover:bg-ericsson-gray-2">
                                {slide.primary_cta[0].cta_text}
                              </Button>
                            )}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {componentData.hero_slides.length > 1 && (
                    <>
                      <CarouselPrevious />
                      <CarouselNext />
                    </>
                  )}
                </Carousel>
              </div>
            );
          case 'section_title':
            return (
              <div
                className={clsx(
                  calcPosition(componentData.position),
                  calcStyle(componentData.style),
                  'mt-20 mb-8'
                )}
              >
                {componentData.section_title}
              </div>
            );
          case 'blog_body':
            return (
              <div>
                <div
                  className="px-6 bg-ericsson-blue"
                  dangerouslySetInnerHTML={{
                    __html: componentData.rich_text_editor,
                  }}
                />
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

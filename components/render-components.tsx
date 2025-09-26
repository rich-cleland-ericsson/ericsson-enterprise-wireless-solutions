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
    h1: 'text-3xl font-semi',
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
    <div className="flex flex-col">
      {pageComponents.map((component: any, index: number) => {
        const componentType = Object.keys(component)[0];
        const componentData = component[componentType];

        // This is a basic renderer - you would typically have specific components for each type
        switch (componentType) {
          case 'three_column_home_page':
            return (
              <div className="flex flex-row container gap-5 mb-10 mt-4">
                {componentData.group.map((card: any) => (
                  <Card
                    key={card._metadata.uid}
                    className="w-1/3 bg-ericsson-gray-2 flex flex-col hover:bg-ericsson-blue hover:border-ericsson-blue hover:text-white text-center py-6 px-8"
                  >
                    <CardTitle>{card.card_title}</CardTitle>
                    <div className="mb-10 mt-8 text-xl">
                      {card.card_sub_title}
                    </div>
                    <CardFooter className="mt-auto">
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
            return (
              <div className="bg-white pt-10 pb-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {componentData.reference.map((post: any) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.main_image.url}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 dark:bg-gray-800"
                />
                <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10" />
              </div>
              <div className="flex max-w-xl grow flex-col justify-between">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-400">
                    {post.date}
                  </time>
                  <a
                    href="#"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    {post.title}
                  </a>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <img
                    alt=""
                    src="#"
                    className="size-10 rounded-full bg-gray-100 dark:bg-gray-800"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      <a href="#">
                        <span className="absolute inset-0" />
                        Bob Ross
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">Bob Ross</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
            );
          case 'new_fifty_fifty':
            return (
              <div className="flex flex-row items-center container my-20">
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
                  'mt-20 mb-8 container'
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

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselItem,
  CarouselNext,
} from '../ui/carousel';
import { Button } from '../ui/button';
import { calcPosition } from '@/lib/utils';
import { clsx } from 'clsx';

interface HeroBlockProps {
  componentData: {
    hero_slides: Array<{
      _metadata: { uid: string };
      background_media?: { url: string };
      text_alignment: string;
      title: string;
      primary_cta?: Array<{
        cta_text: string;
      }>;
    }>;
  };
  index: number;
}

const HeroBlock: React.FC<HeroBlockProps> = ({ componentData, index }) => {
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
};

export default HeroBlock;

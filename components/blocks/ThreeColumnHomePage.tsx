import React from 'react';
import { Card, CardTitle, CardFooter } from '../ui/card';
import { Button } from '../ui/button';

interface ThreeColumnHomePageProps {
  componentData: {
    group: Array<{
      _metadata: { uid: string };
      card_title: string;
      card_sub_title: string;
      button_link: { title: string };
    }>;
  };
}

const ThreeColumnHomePage: React.FC<ThreeColumnHomePageProps> = ({
  componentData,
}) => {
  return (
    <div className="flex flex-row container gap-5 mb-10 mt-4">
      {componentData.group.map((card: any) => (
        <Card
          key={card._metadata.uid}
          className="w-1/3 bg-ericsson-gray-2 flex flex-col hover:bg-ericsson-blue hover:border-ericsson-blue hover:text-white text-center py-6 px-8"
        >
          <CardTitle>{card.card_title}</CardTitle>
          <div className="mb-10 mt-8 text-xl">{card.card_sub_title}</div>
          <CardFooter className="mt-auto">
            <Button className="w-full">{card.button_link.title}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ThreeColumnHomePage;

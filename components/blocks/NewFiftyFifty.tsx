import React from 'react';
import { Button } from '../ui/button';

interface NewFiftyFiftyProps {
  componentData: {
    col_1_block: Array<{
      test_image: {
        file: { url: string };
      };
    }>;
    col_2_block: Array<{
      col_2_card_block: {
        col_2_title: string;
        col_2_description: string;
        col_2_cta_text: string;
      };
    }>;
  };
}

const NewFiftyFifty: React.FC<NewFiftyFiftyProps> = ({ componentData }) => {
  return (
    <div className="flex flex-row items-center container my-20">
      <div>
        <img src={componentData.col_1_block[0].test_image.file.url} alt="" />
      </div>
      <div>
        <h3 className="text-2xl pb-2">
          {componentData.col_2_block[0].col_2_card_block.col_2_title}
        </h3>
        <div className="text-base pb-6">
          {componentData.col_2_block[0].col_2_card_block.col_2_description}
        </div>
        <Button>
          {componentData.col_2_block[0].col_2_card_block.col_2_cta_text}
        </Button>
      </div>
    </div>
  );
};

export default NewFiftyFifty;

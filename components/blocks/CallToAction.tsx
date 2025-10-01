import React from 'react';
import { Button } from '../ui/button';

interface CallToActionProps {
  componentData: {
    call_to_action_text: string;
    cta_text: string;
  };
}

const CallToAction: React.FC<CallToActionProps> = ({ componentData }) => {
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
};

export default CallToAction;

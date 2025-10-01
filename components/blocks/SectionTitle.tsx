import React from 'react';
import { calcPosition, calcStyle } from '@/lib/utils';
import { clsx } from 'clsx';

interface SectionTitleProps {
  componentData: {
    position: string;
    style: string;
    section_title: string;
  };
}

const SectionTitle: React.FC<SectionTitleProps> = ({ componentData }) => {
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
};

export default SectionTitle;

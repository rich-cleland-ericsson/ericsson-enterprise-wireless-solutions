import React from 'react';

interface BlogBodyProps {
  componentData: {
    rich_text_editor: string;
  };
}

const BlogBody: React.FC<BlogBodyProps> = ({ componentData }) => {
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
};

export default BlogBody;

import React, { useState } from 'react';
import RenderComponents from '@/components/render-components';
import { getPageRes } from '@/helper';
import { Props, Context } from '@/typescript/pages';

export default function Blog(props: Props) {
  const { page, entryUrl } = props;
  const [getEntry, setEntry] = useState(page);

  return getEntry ? (
    <div>We got content</div>
  ) : (
    <div className="max-w-7xl">
      <h1>No Content Found</h1>
      <p>This page doesn&apos;t have any content components yet.</p>
    </div>
  );
}

export async function getServerSideProps(context: Context) {
  try {
    const entryRes = await getPageRes(context.resolvedUrl);
    return {
      props: {
        entryUrl: context.resolvedUrl,
        page: entryRes || null,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

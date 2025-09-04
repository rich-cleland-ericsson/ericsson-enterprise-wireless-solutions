import React, { useState, useEffect } from 'react';
import { onEntryChange } from '../contentstack-sdk';
import RenderComponents from '../components/render-components';
import { getPageRes } from '../helper';
import Skeleton from 'react-loading-skeleton';
import { Props, Context } from "../typescript/pages";

export default function Home(props: Props) {

  const { page, entryUrl } = props;

  const [getEntry, setEntry] = useState(page);

  async function fetchData() {
    try {
      const entryRes = await getPageRes(entryUrl);
      if (!entryRes) throw new Error('Status code 404');
      setEntry(entryRes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, []);

  return getEntry ? (
    <RenderComponents
      pageComponents={getEntry.page_components}
      contentTypeUid='page'
      entryUid={getEntry.uid}
      locale={getEntry.locale}
    />
  ) : (
    <Skeleton count={3} height={300} />
  );
}

export async function getServerSideProps(context: Context) {
  try {
    const entryRes = await getPageRes(context.resolvedUrl);
    console.log("ENTRY RES", entryRes);
    console.log("CONTEXT", context.resolvedUrl);
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

import React, { useState, useEffect } from 'react';
import { onEntryChange } from '../contentstack-sdk';
import RenderComponents from '../components/render-components';
import { getPageRes } from '../helper';
import Skeleton from 'react-loading-skeleton';
import { Props } from '../typescript/pages';

export default function Page(props: Props) {
  const { page, entryUrl } = props;
  const [getEntry, setEntry] = useState(page);
  console.log('getEntry-[page]', getEntry);

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
  }, [page]);

  return getEntry.modular_blocks ? (
    <RenderComponents
      pageComponents={getEntry.modular_blocks}
      contentTypeUid="page"
      entryUid={getEntry.uid}
      locale={getEntry.locale}
    />
  ) : (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 bg-red-500">
        No Content Found
      </h1>
      <p className="text-gray-600">
        This page doesn&apos;t have any content components yet.
      </p>
    </div>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const entryUrl = params.page.includes('/')
      ? params.page
      : `/${params.page}`;
    const entryRes = await getPageRes(entryUrl);
    // Lets add check for references here.
    // THIS SHOULD LIVE IN THE CALL TO CONTENT STACK SDK, in that hook.
    //TODO: Check if page response has references, make those calls
    //function that looks though JSON and finds "reference",
    //  checks length
    //  Notes: _content_type_uid
    //  Notes: uid
    //  Makes API call to get contentType Entry

    //
    if (!entryRes) throw new Error('404');
    return {
      props: {
        entryUrl: entryUrl,
        page: entryRes,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

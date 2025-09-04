import { addEditableTags } from "@contentstack/utils";
import { Page, BlogPosts } from "../typescript/pages";
import getConfig from "next/config";
import { FooterProps, HeaderProps } from "../typescript/layout";
import { getEntry, getEntryByUrl } from "../contentstack-sdk";

const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.CONTENTSTACK_API_KEY
  ? process.env
  : publicRuntimeConfig;

const liveEdit = envConfig.CONTENTSTACK_LIVE_EDIT_TAGS === "true";

// Mock data for missing content types
const mockHeader: HeaderProps = {
  logo: { url: '/contentstack-readme-logo.png', title: 'Contentstack Logo' },
  navigation_menu: [
    { label: 'Home', page_reference: [{ url: '/', title: 'Home', $: { title: {}, url: '/', copyright: '', announcement_text: '', label: {} } }], $: { title: {}, url: '', copyright: '', announcement_text: '', label: {} } }
  ],
  title: 'Contentstack Next.js Starter',
  uid: 'mock-header',
  locale: 'en-us',
  notification_bar: { 
    show_announcement: true,
    announcement_text: 'Welcome to our site!',
    $: { title: {}, url: '', copyright: '', announcement_text: 'Welcome to our site!', label: {} }
  },
  social: { 
    social_links: [{
      title: 'Social',
      href: '#',
      $: { title: {}, url: '#', copyright: '', announcement_text: '', label: {} }
    }],
    social_share: [{
      link: { title: 'Share', href: '#', $: { title: {}, url: '#', copyright: '', announcement_text: '', label: {} } },
      icon: { url: '/contentstack-readme-logo.png', title: 'Contentstack Logo' }
    }]
  },
  navigation: { 
    link: [{
      title: 'Navigation',
      href: '#',
      $: { title: {}, url: '#', copyright: '', announcement_text: '', label: {} }
    }] 
  },
  copyright: '© 2024 Contentstack',
  $: { title: {}, url: '', copyright: '© 2024 Contentstack', announcement_text: '', label: {} }
};

const mockFooter: FooterProps = {
  logo: { url: '/contentstack-readme-logo.png', title: 'Contentstack Logo' },
  title: 'Contentstack Next.js Starter',
  social: { social_links: [{
    title: 'Social',
    href: '#',
    $: { title: {}, url: '#', copyright: '', announcement_text: '', label: {} }
  }], social_share: [{
    link: { title: 'Share', href: '#', $: { title: {}, url: '#', copyright: '', announcement_text: '', label: {} } },
    icon: { url: '/contentstack-readme-logo.png', title: 'Contentstack Logo' } }] },
  navigation: { link: [{
    title: 'Navigation',
    href: '#',
    $: { title: {}, url: '#', copyright: '', announcement_text: '', label: {} }
  }] },
  navigation_menu: [{
    label: 'Footer',
    page_reference: [{ url: '/', title: 'Home', $: { title: {}, url: '/', copyright: '', announcement_text: '', label: {} } }],
    $: { title: {}, url: '', copyright: '', announcement_text: '', label: {} }
  }],
  notification_bar: {
    show_announcement: true,
    announcement_text: 'Footer notification',
    $: { title: {}, url: '', copyright: '', announcement_text: 'Footer notification', label: {} }
  },
  copyright: '© 2024 Contentstack. All rights reserved.',
  uid: 'mock-footer',
  locale: 'en-us',
  $: { title: {}, url: '', copyright: '© 2024 Contentstack. All rights reserved.', announcement_text: '', label: {} }
};

export const getHeaderRes = async (): Promise<HeaderProps> => {
  try {
    const response = (await getEntry({
      contentTypeUid: "header",
      referenceFieldPath: ["navigation_menu.page_reference"],
      jsonRtePath: ["notification_bar.announcement_text"],
    })) as HeaderProps[][];

    liveEdit && addEditableTags(response[0][0], "header", true);
    return response[0][0];
  } catch (error) {
    console.warn('Header content type not found, using mock data');
    return mockHeader;
  }
};

export const getFooterRes = async (): Promise<FooterProps> => {
  try {
    const response = (await getEntry({
      contentTypeUid: "footer",
      referenceFieldPath: undefined,
      jsonRtePath: ["copyright"],
    })) as FooterProps[][];
    liveEdit && addEditableTags(response[0][0], "footer", true);
    return response[0][0];
  } catch (error) {
    console.warn('Footer content type not found, using mock data');
    return mockFooter;
  }
};

export const getAllEntries = async (): Promise<Page[]> => {
  try {
    const response = (await getEntry({
      contentTypeUid: "page",
      referenceFieldPath: undefined,
      jsonRtePath: undefined,
    })) as Page[][];
    liveEdit &&
      response[0].forEach((entry) => addEditableTags(entry, "page", true));
    return response[0];
  } catch (error) {
    console.warn('Page content type not found, returning empty array');
    return [];
  }
};

// Keep your existing getPageRes - this should work for specific pages
export const getPageRes = async (entryUrl: string): Promise<Page> => {
  const response = (await getEntryByUrl({
    contentTypeUid: "page",
    entryUrl,
    referenceFieldPath: ["page_components.from_blog.featured_blogs"],
    jsonRtePath: [
      "page_components.from_blog.featured_blogs.body",
      "page_components.section_with_buckets.buckets.description",
      "page_components.section_with_html_code.description",
    ],
  })) as Page[];
  liveEdit && addEditableTags(response[0], "page", true);
  return response[0];
};

export const getBlogListRes = async (): Promise<BlogPosts[]> => {
  try {
    const response = (await getEntry({
      contentTypeUid: "blog_post",
      referenceFieldPath: ["author", "related_post"],
      jsonRtePath: ["body"],
    })) as BlogPosts[][];
    liveEdit &&
      response[0].forEach((entry) => addEditableTags(entry, "blog_post", true));
    return response[0];
  } catch (error) {
    console.warn('Blog post content type not found, returning empty array');
    return [];
  }
};

export const getBlogPostRes = async (entryUrl: string): Promise<BlogPosts> => {
  const response = (await getEntryByUrl({
    contentTypeUid: "blog_post",
    entryUrl,
    referenceFieldPath: ["author", "related_post"],
    jsonRtePath: ["body", "related_post.body"],
  })) as BlogPosts[];
  liveEdit && addEditableTags(response[0], "blog_post", true);
  return response[0];
};

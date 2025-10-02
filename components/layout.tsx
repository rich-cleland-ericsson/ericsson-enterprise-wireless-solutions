import React from 'react';
import { HeaderProps, FooterProps, PageProps } from '@/typescript/layout';
import Header from '@/components/blocks/Header';

interface LayoutProps {
  header: HeaderProps;
  footer: FooterProps;
  page: PageProps;
  blogPost?: any;
  blogList?: any;
  entries?: any;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  header,
  footer,
  page,
  blogPost,
  blogList,
  entries,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header nav={header} />
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-black border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              {footer?.logo?.url && (
                <img src={footer.logo.url} alt="Logo" className="h-6 w-auto" />
              )}
            </div>

            <div className="flex space-x-6">
              {footer?.social?.social_links?.map(
                (social: any, index: number) => (
                  <a
                    key={index}
                    href={social.link?.url || '#'}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.title}</span>
                    <i className={`fab fa-${social.title?.toLowerCase()}`}></i>
                  </a>
                )
              )}
            </div>
          </div>

          <div className="mt-8 pt-8 text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()}{' '}
              {footer?.copyright || 'Contentstack'}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

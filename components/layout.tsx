import React from 'react';
import { HeaderProps, FooterProps, PageProps } from '../typescript/layout';

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
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              {header?.logo?.url && (
                <img src={header.logo.url} alt="Logo" className="h-8 w-auto" />
              )}
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {header?.navigation_menu?.map((item: any, index: number) => (
                <a
                  key={index}
                  href={item.page_reference?.[0]?.url || '#'}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
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

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
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

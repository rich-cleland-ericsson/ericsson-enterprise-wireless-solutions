import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

// Data for each navigation section
const placesData = [
  { name: 'Office Locations', href: '#', icon: GlobeAltIcon },
  { name: 'Global Presence', href: '#', icon: UsersIcon },
  { name: 'Regional Centers', href: '#', icon: ShieldCheckIcon },
];

const productsData = [
  { name: 'Wireless Solutions', href: '#', icon: ShieldCheckIcon },
  { name: 'Network Equipment', href: '#', icon: GlobeAltIcon },
  { name: 'IoT Products', href: '#', icon: VideoCameraIcon },
];

const peopleData = [
  { name: 'Leadership Team', href: '#', icon: UsersIcon },
  { name: 'Employee Stories', href: '#', icon: UserGroupIcon },
  { name: 'Career Opportunities', href: '#', icon: BriefcaseIcon },
];

const resourcesData = [
  { name: 'Documentation', href: '#', icon: BookOpenIcon },
  { name: 'Support Center', href: '#', icon: InformationCircleIcon },
  { name: 'Community Forum', href: '#', icon: UserGroupIcon },
  { name: 'Training Materials', href: '#', icon: VideoCameraIcon },
];

const recentPosts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    description:
      'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    category: { title: 'Sales', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    description:
      'Optio cum necessitatibus dolor voluptatum provident commodi et.',
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('places');
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { key: 'places', label: 'Places', data: placesData },
    { key: 'products', label: 'Products', data: productsData },
    { key: 'people', label: 'People', data: peopleData },
    { key: 'resources', label: 'Resources', data: resourcesData },
  ];

  const handleButtonClick = (sectionKey: string) => {
    if (isOpen && activeSection === sectionKey) {
      // Same button clicked - close
      setIsOpen(false);
    } else {
      // Different button clicked - close first, then open with new content
      if (isOpen) {
        setIsOpen(false);
        // Use setTimeout to allow close animation to complete before opening new content
        setTimeout(() => {
          setActiveSection(sectionKey);
          setIsOpen(true);
        }, 150); // Half of the close animation duration
      } else {
        // Not open - just open with new content
        setActiveSection(sectionKey);
        setIsOpen(true);
      }
    }
  };

  const renderPanelContent = () => {
    const currentData =
      navigationItems.find((item) => item.key === activeSection)?.data ||
      placesData;

    return (
      <div className="relative bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
            <div>
              <h3 className="text-sm/6 font-medium text-gray-500 dark:text-gray-400 capitalize">
                {activeSection}
              </h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {currentData.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex gap-x-4 py-2 text-sm/6 font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="size-6 flex-none text-gray-400 dark:text-gray-500"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm/6 font-medium text-gray-500 dark:text-gray-400">
                Recent Updates
              </h3>
              <div className="mt-6 flow-root">
                <div className="-my-2">
                  {recentPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="py-2">
                      <a
                        href={post.href}
                        className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <p className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                          {post.title}
                        </p>
                        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                          {post.date}
                        </p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
            <h3 className="sr-only">Recent posts</h3>
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch group"
              >
                <div className="relative flex-none">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="aspect-2/1 w-full rounded-lg bg-gray-100 object-cover sm:aspect-video sm:h-32 lg:h-auto dark:bg-gray-800 group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-gray-900/10 ring-inset dark:ring-white/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4">
                    <time
                      dateTime={post.datetime}
                      className="text-sm/6 text-gray-600 dark:text-gray-400"
                    >
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <h4 className="mt-2 text-sm/6 font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h4>
                  <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Popover className="relative isolate z-50 shadow-sm">
      <div className="bg-black dark:bg-gray-900">
        <div className="flex items-center mx-auto max-w-7xl px-6 lg:px-8">
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 800 800"
            xmlSpace="preserve"
            className="w-[15px] fill-white"
          >
            <g>
              <path d="M692,53.1c-6.9-20.6-21.5-36.6-39.6-45.6c-18-9-39.6-11.2-75.2,0.7L172.9,143c-35.6,11.9-51.6,26.5-60.6,44.6   c-9.1,18-11.2,39.5-4.3,60.2c6.9,20.6,21.5,36.6,39.6,45.6c18,9,39.6,11.2,75.2-0.7l404.3-134.8c35.6-11.8,51.6-26.5,60.6-44.6   C696.8,95.3,698.9,73.8,692,53.1z"></path>
              <path d="M692,302.6c-6.9-20.6-21.5-36.6-39.6-45.6c-18-9-39.6-11.2-75.2,0.7L172.9,392.5   c-35.6,11.9-51.6,26.5-60.6,44.6c-9.1,18-11.2,39.5-4.3,60.2c6.9,20.6,21.5,36.6,39.6,45.6c18,9,39.6,11.2,75.2-0.7l404.3-134.7   c35.6-11.9,51.6-26.5,60.6-44.7C696.8,344.8,698.9,323.3,692,302.6z"></path>
              <path d="M692,552.2c-6.9-20.6-21.5-36.6-39.6-45.6c-18-9-39.6-11.2-75.2,0.7L172.9,642.1   c-35.6,11.9-51.6,26.5-60.6,44.6c-9.1,18-11.2,39.5-4.3,60.2c6.9,20.6,21.5,36.6,39.6,45.6c18,9,39.6,11.2,75.2-0.7L627.1,657   c35.6-11.8,51.6-26.5,60.6-44.6C696.8,594.4,698.9,572.9,692,552.2z"></path>
            </g>
          </svg>
          <span className="text-white ml-4 mr-10 font-bold">
            Enterprise Wireless Solutions
          </span>
          <nav className="flex">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                className={`inline-flex items-center py-5 px-2 gap-x-1 text-sm/6 font-semibold transition-all duration-200 ${
                  isOpen && activeSection === item.key
                    ? 'text-blue-600 dark:text-blue-400 bg-white'
                    : 'text-white hover:text-gray-900 hover:bg-white'
                }`}
                onClick={() => handleButtonClick(item.key)}
              >
                {item.label}
                <ChevronDownIcon
                  aria-hidden="true"
                  className={`size-5 transition-transform duration-200 ${
                    isOpen && activeSection === item.key ? 'rotate-180' : ''
                  }`}
                />
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
            <MagnifyingGlassIcon className="size-5 text-white" />
            <GlobeAltIcon className="size-5 text-white" />
            <a href="#" className="text-sm/6 font-semibold text-white">
              Sign in
            </a>
          </div>
        </div>
      </div>

      {/* Conditional rendering for smooth animations */}
      {isOpen && (
        <PopoverPanel
          static
          className="absolute inset-x-0 top-16 bg-white dark:bg-gray-900 animate-in slide-in-from-top-2 duration-300"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-900 dark:shadow-none dark:ring-white/10"
          />
          {renderPanelContent()}
        </PopoverPanel>
      )}
    </Popover>
  );
}

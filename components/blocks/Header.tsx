import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
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
  ChevronRightIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { HeaderProps } from '@/typescript/layout';

// Data for each navigation section (original top nav)
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

// Different category data for each top nav item
const dropdownCategories = {
  places: {
    industries: {
      label: 'Industries',
      subcategories: [
        { name: 'Public Safety', href: '#' },
        { name: 'Retail', href: '#' },
        { name: 'Restaurants', href: '#' },
        { name: 'Education', href: '#' },
        { name: 'Mass Transit', href: '#' },
        { name: 'Financial Services', href: '#' },
        { name: 'Construction', href: '#' },
        { name: 'Transportation', href: '#' },
        { name: 'Government', href: '#' },
        { name: 'Ports', href: '#' },
        { name: 'Manufacturing', href: '#' },
      ],
    },
    useCases: {
      label: 'Use Cases',
      subcategories: [
        { name: 'Emergency Response', href: '#' },
        { name: 'Asset Tracking', href: '#' },
        { name: 'Fleet Management', href: '#' },
        { name: 'Security Systems', href: '#' },
        { name: 'IoT Integration', href: '#' },
        { name: 'Remote Monitoring', href: '#' },
        { name: 'Data Analytics', href: '#' },
        { name: 'Automation', href: '#' },
      ],
    },
  },
  products: {
    solutions: {
      label: 'Solutions',
      subcategories: [
        { name: 'Wireless Networks', href: '#' },
        { name: 'IoT Platforms', href: '#' },
        { name: 'Security Solutions', href: '#' },
        { name: 'Analytics Tools', href: '#' },
        { name: 'Integration Services', href: '#' },
        { name: 'Support Services', href: '#' },
      ],
    },
    technologies: {
      label: 'Technologies',
      subcategories: [
        { name: '5G Networks', href: '#' },
        { name: 'WiFi 6', href: '#' },
        { name: 'LoRaWAN', href: '#' },
        { name: 'Bluetooth', href: '#' },
        { name: 'Zigbee', href: '#' },
        { name: 'Cellular IoT', href: '#' },
      ],
    },
  },
  people: {
    team: {
      label: 'Our Team',
      subcategories: [
        { name: 'Leadership', href: '#' },
        { name: 'Engineering', href: '#' },
        { name: 'Sales', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Marketing', href: '#' },
        { name: 'Operations', href: '#' },
      ],
    },
    careers: {
      label: 'Careers',
      subcategories: [
        { name: 'Open Positions', href: '#' },
        { name: 'Benefits', href: '#' },
        { name: 'Culture', href: '#' },
        { name: 'Internships', href: '#' },
        { name: 'Remote Work', href: '#' },
        { name: 'Diversity', href: '#' },
      ],
    },
  },
  resources: {
    documentation: {
      label: 'Documentation',
      subcategories: [
        { name: 'API Reference', href: '#' },
        { name: 'User Guides', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Best Practices', href: '#' },
        { name: 'Code Examples', href: '#' },
        { name: 'SDKs', href: '#' },
      ],
    },
    support: {
      label: 'Support',
      subcategories: [
        { name: 'Help Center', href: '#' },
        { name: 'Community Forum', href: '#' },
        { name: 'Contact Support', href: '#' },
        { name: 'Status Page', href: '#' },
        { name: 'Training', href: '#' },
        { name: 'Webinars', href: '#' },
      ],
    },
  },
};

// Right section content for each top nav and category combination
const rightSectionContent = {
  places: {
    industries: {
      title: 'Let us help',
      description:
        'Whether you have a product question or need technical support, our team is here to help you succeed.',
      icon: PhoneIcon,
      ctaText: 'Contact Support',
      ctaHref: '#',
    },
    useCases: {
      title: 'Explore Use Cases',
      description:
        'Discover how our solutions are being used across different industries and applications.',
      icon: VideoCameraIcon,
      ctaText: 'View Case Studies',
      ctaHref: '#',
    },
  },
  products: {
    solutions: {
      title: 'Explore Solutions',
      description:
        'Discover how our wireless solutions can transform your business operations and improve efficiency.',
      icon: VideoCameraIcon,
      ctaText: 'View Case Studies',
      ctaHref: '#',
    },
    technologies: {
      title: 'Learn Technologies',
      description:
        'Understand the technical capabilities and features of our wireless technology stack.',
      icon: InformationCircleIcon,
      ctaText: 'Read Documentation',
      ctaHref: '#',
    },
  },
  people: {
    team: {
      title: 'Meet Our Team',
      description:
        'Get to know the talented individuals who make our company successful.',
      icon: UserGroupIcon,
      ctaText: 'View Team',
      ctaHref: '#',
    },
    careers: {
      title: 'Join Our Team',
      description:
        'Ready to make an impact? Explore career opportunities and learn about our company culture.',
      icon: BriefcaseIcon,
      ctaText: 'View Careers',
      ctaHref: '#',
    },
  },
  resources: {
    documentation: {
      title: 'Learn More',
      description:
        'Access our comprehensive resources to understand how our solutions can benefit your organization.',
      icon: BookOpenIcon,
      ctaText: 'Browse Resources',
      ctaHref: '#',
    },
    support: {
      title: 'Get Support',
      description:
        'Need help? Our support team is here to assist you with any questions or issues.',
      icon: PhoneIcon,
      ctaText: 'Contact Support',
      ctaHref: '#',
    },
  },
};

interface HeaderComponentProps {
  nav?: HeaderProps;
}

export default function Header({ nav }: HeaderComponentProps) {
  const [activeTopNav, setActiveTopNav] = useState('places');
  const [activeCategory, setActiveCategory] = useState('industries');
  const [isOpen, setIsOpen] = useState(false);

  // Original top navigation items
  const topNavigationItems = [
    { key: 'places', label: 'Places', data: placesData },
    { key: 'products', label: 'Products', data: productsData },
    { key: 'people', label: 'People', data: peopleData },
    { key: 'resources', label: 'Resources', data: resourcesData },
  ];

  const handleTopNavClick = (navKey: string) => {
    if (isOpen && activeTopNav === navKey) {
      // Same button clicked - close
      setIsOpen(false);
    } else {
      // Different button clicked - close first, then open with new content
      if (isOpen) {
        setIsOpen(false);
        setTimeout(() => {
          setActiveTopNav(navKey);
          // Reset to first category when switching top nav
          const categories =
            dropdownCategories[navKey as keyof typeof dropdownCategories];
          const firstCategoryKey = Object.keys(categories)[0];
          setActiveCategory(firstCategoryKey);
          setIsOpen(true);
        }, 150);
      } else {
        // Not open - just open with new content
        setActiveTopNav(navKey);
        // Reset to first category when opening
        const categories =
          dropdownCategories[navKey as keyof typeof dropdownCategories];
        const firstCategoryKey = Object.keys(categories)[0];
        setActiveCategory(firstCategoryKey);
        setIsOpen(true);
      }
    }
  };

  const handleCategoryClick = (categoryKey: string) => {
    setActiveCategory(categoryKey);
  };

  const renderPanelContent = () => {
    const currentTopNav = topNavigationItems.find(
      (item) => item.key === activeTopNav
    );
    const categories =
      dropdownCategories[activeTopNav as keyof typeof dropdownCategories];
    const currentCategory =
      categories[activeCategory as keyof typeof categories];
    const rightContent =
      rightSectionContent[activeTopNav as keyof typeof rightSectionContent][
        activeCategory as keyof (typeof rightSectionContent)[typeof activeTopNav]
      ];

    return (
      <div className="relative bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Categories */}
            <div className="col-span-3">
              <div className="space-y-1">
                {Object.entries(categories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => handleCategoryClick(key)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
                      activeCategory === key
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="font-medium">{category.label}</span>
                    <ChevronRightIcon
                      className={`w-4 h-4 ${
                        activeCategory === key ? 'text-white' : 'text-gray-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Middle Subcategories */}
            <div className="col-span-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {currentCategory.subcategories.map((subcategory, index) => (
                  <a
                    key={index}
                    href={subcategory.href}
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {subcategory.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-3 border-l border-gray-200 pl-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                    <rightContent.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {rightContent.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {rightContent.description}
                  </p>
                  <a
                    href={rightContent.ctaHref}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    {rightContent.ctaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Popover className="sticky top-0 z-50 shadow-sm">
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
            {topNavigationItems.map((item) => (
              <button
                key={item.key}
                className={`inline-flex items-center py-5 px-2 gap-x-1 text-sm/6 font-semibold transition-all duration-200 ${
                  isOpen && activeTopNav === item.key
                    ? 'text-blue-600 dark:text-blue-400 bg-white'
                    : 'text-white hover:text-gray-900 hover:bg-white'
                }`}
                onClick={() => handleTopNavClick(item.key)}
              >
                {item.label}
                <ChevronDownIcon
                  aria-hidden="true"
                  className={`size-5 transition-transform duration-200 ${
                    isOpen && activeTopNav === item.key ? 'rotate-180' : ''
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

      {/* Mega Menu Panel */}
      {isOpen && (
        <PopoverPanel
          static
          className="absolute inset-x-0 top-full bg-white dark:bg-gray-900 animate-in slide-in-from-top-2 duration-300 shadow-lg border-gray-200"
        >
          <div className="relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            {renderPanelContent()}
          </div>
        </PopoverPanel>
      )}
    </Popover>
  );
}

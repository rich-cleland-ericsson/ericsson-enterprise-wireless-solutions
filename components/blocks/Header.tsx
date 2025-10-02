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
  ArrowRightIcon,
  ChevronRightIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { HeaderProps } from '@/typescript/layout';

// Type definitions
type TopNavKey = 'places' | 'products' | 'people' | 'resources';

type Subcategory = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type Category = {
  label: string;
  subcategories: Subcategory[];
};

type RightSectionContent = {
  title: string;
  featuredItems: {
    image: string;
    title: string;
    description: string;
  }[];
};

type DropdownCategories = {
  [K in TopNavKey]: {
    [key: string]: Category;
  };
};

type RightSectionContents = {
  [K in TopNavKey]: {
    [key: string]: RightSectionContent;
  };
};

// Data for each navigation section (original top nav)
const placesData: Subcategory[] = [
  { name: 'Office Locations', href: '#', icon: GlobeAltIcon },
  { name: 'Global Presence', href: '#', icon: UsersIcon },
  { name: 'Regional Centers', href: '#', icon: ShieldCheckIcon },
];

const productsData: Subcategory[] = [
  { name: 'Wireless Solutions', href: '#', icon: ShieldCheckIcon },
  { name: 'Network Equipment', href: '#', icon: GlobeAltIcon },
  { name: 'IoT Products', href: '#', icon: VideoCameraIcon },
];

const peopleData: Subcategory[] = [
  { name: 'Leadership Team', href: '#', icon: UsersIcon },
  { name: 'Employee Stories', href: '#', icon: UserGroupIcon },
  { name: 'Career Opportunities', href: '#', icon: BriefcaseIcon },
];

const resourcesData: Subcategory[] = [
  { name: 'Documentation', href: '#', icon: BookOpenIcon },
  { name: 'Support Center', href: '#', icon: InformationCircleIcon },
  { name: 'Community Forum', href: '#', icon: UserGroupIcon },
  { name: 'Training Materials', href: '#', icon: VideoCameraIcon },
];

// Different category data for each top nav item
const dropdownCategories: DropdownCategories = {
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
const rightSectionContent: RightSectionContents = {
  places: {
    industries: {
      title: 'FEATURED ITEMS',
      featuredItems: [
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'Ericsson On-Demand: Liberate your core. Free your business.',
          description:
            'A SaaS-based 5G core, managed by Ericsson and built on Google Cloud. Coming in 2025',
        },
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: '5G changes everything, or nothing.',
          description: "It's up to your OSS/BSS. Sell. Deliver. Get paid.",
        },
      ],
    },
    useCases: {
      title: 'FEATURED ITEMS',
      featuredItems: [
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'Emergency Response Solutions',
          description:
            'Advanced wireless solutions for critical emergency response scenarios.',
        },
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'Asset Tracking Technology',
          description:
            'Real-time asset monitoring and management capabilities.',
        },
      ],
    },
  },
  products: {
    solutions: {
      title: 'FEATURED ITEMS',
      featuredItems: [
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'Wireless Network Solutions',
          description:
            'Comprehensive wireless infrastructure for modern businesses.',
        },
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'IoT Platform Integration',
          description: 'Seamless IoT device management and data analytics.',
        },
      ],
    },
    technologies: {
      title: 'FEATURED ITEMS',
      featuredItems: [
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: '5G Network Technology',
          description:
            'Next-generation wireless connectivity for enterprise applications.',
        },
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'WiFi 6 Solutions',
          description:
            'High-performance wireless networking for modern workplaces.',
        },
      ],
    },
  },
  people: {
    team: {
      title: 'FEATURED ITEMS',
      featuredItems: [
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'Meet Our Leadership Team',
          description:
            'Experienced leaders driving innovation in wireless technology.',
        },
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'Engineering Excellence',
          description:
            'World-class engineering teams building the future of connectivity.',
        },
      ],
    },
    careers: {
      title: 'FEATURED ITEMS',
      featuredItems: [
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'Join Our Team',
          description:
            'Exciting career opportunities in wireless technology and innovation.',
        },
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'Company Culture',
          description: 'A collaborative environment where innovation thrives.',
        },
      ],
    },
  },
  resources: {
    documentation: {
      title: 'FEATURED ITEMS',
      featuredItems: [
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'API Documentation',
          description:
            'Comprehensive guides for integrating with our wireless solutions.',
        },
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'Developer Resources',
          description: 'Tools and resources for building on our platform.',
        },
      ],
    },
    support: {
      title: 'FEATURED ITEMS',
      featuredItems: [
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: '24/7 Support',
          description: 'Round-the-clock technical support for all your needs.',
        },
        {
          image:
            'https://images.contentstack.io/v3/assets/blt6957a1cf484f88d0/bltbc3a8f6bfd93c84b/68700da7de59215a8d04f845/Helpdesk-white.svg',
          title: 'Community Forum',
          description: 'Connect with other users and get expert advice.',
        },
      ],
    },
  },
};

interface HeaderComponentProps {
  nav?: HeaderProps;
}

export default function Header({ nav }: HeaderComponentProps) {
  const [activeTopNav, setActiveTopNav] = useState<TopNavKey>('places');
  const [activeCategory, setActiveCategory] = useState<string>('industries');
  const [isOpen, setIsOpen] = useState(false);

  // Original top navigation items
  const topNavigationItems = [
    { key: 'places' as const, label: 'Places', data: placesData },
    { key: 'products' as const, label: 'Products', data: productsData },
    { key: 'people' as const, label: 'People', data: peopleData },
    { key: 'resources' as const, label: 'Resources', data: resourcesData },
  ];

  const handleTopNavClick = (navKey: TopNavKey) => {
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
          const categories = dropdownCategories[navKey];
          const firstCategoryKey = Object.keys(categories)[0];
          setActiveCategory(firstCategoryKey);
          setIsOpen(true);
        }, 150);
      } else {
        // Not open - just open with new content
        setActiveTopNav(navKey);
        // Reset to first category when opening
        const categories = dropdownCategories[navKey];
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
    const categories = dropdownCategories[activeTopNav];
    const currentCategory = categories[activeCategory];
    const rightContent = rightSectionContent[activeTopNav][activeCategory];

    if (!currentCategory || !rightContent) {
      return null;
    }

    return (
      <div className="relative bg-white dark:bg-gray-900">
        <div className="px-6 py-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Categories */}
            <div className="col-span-3">
              <div>
                {Object.entries(categories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => handleCategoryClick(key)}
                    className={`w-full flex items-center justify-between text-lg px-4 py-3 text-left transition-colors ${
                      activeCategory === key
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="font-medium">{category.label}</span>
                    <ArrowRightIcon
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
                    className="px-3 py-2 text-gray-700 hover:underline transition-colors"
                  >
                    {subcategory.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-3 pl-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 uppercase">
                    {rightContent.title}
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sm flex flex-row items-center text-gray-900 hover:text-gray-700 underline decoration-dashed"
                  >
                    <span>Close</span>
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {rightContent.featuredItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-300 p-4"
                    >
                      <div className="flex space-x-4">
                        <div>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="bg-black p-4 w-16 h-16 object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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
        <div className="flex items-center px-6 lg:px-8">
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
                className={`inline-flex items-center py-5 px-4 gap-x-1 font-thin transition-all duration-200 ${
                  isOpen && activeTopNav === item.key
                    ? 'bg-white'
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
          <div className="relative">{renderPanelContent()}</div>
        </PopoverPanel>
      )}
    </Popover>
  );
}

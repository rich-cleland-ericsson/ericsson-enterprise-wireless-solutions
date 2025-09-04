# Ericsson Enterprise Wireless Solutions

A modern, production-ready starter application built with Next.js 14, TypeScript, Tailwind CSS, and Contentstack CMS. This starter app provides a solid foundation for building headless CMS-powered websites with static generation capabilities and dynamic content updates.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 20.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- **Contentstack account** (free tier available)

## 📦 Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd contentstack-nextjs-starter-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# Contentstack API Configuration
CONTENTSTACK_API_KEY=your_api_key_here
CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
CONTENTSTACK_ENVIRONMENT=your_environment_name_here
CONTENTSTACK_BRANCH=main
CONTENTSTACK_REGION=us

# Optional: Live Preview Configuration
CONTENTSTACK_PREVIEW_TOKEN=your_preview_token_here
CONTENTSTACK_PREVIEW_HOST=rest-preview.contentstack.com
CONTENTSTACK_API_HOST=api.contentstack.com
CONTENTSTACK_APP_HOST=app.contentstack.com
CONTENTSTACK_LIVE_PREVIEW=true
CONTENTSTACK_LIVE_EDIT_TAGS=false

# Content Mode Configuration
CONTENT_MODE=static                    # static | dynamic | hybrid
ENABLE_STATIC_FALLBACK=true           # Enable fallback to static data
ENABLE_DYNAMIC_UPDATES=false          # Enable dynamic content updates
```

### 4. Get Contentstack Credentials

1. **Sign up** for a free Contentstack account at [app.contentstack.com](https://app.contentstack.com)
2. **Create a new stack** or use an existing one
3. **Navigate to Settings > API Keys**
4. **Copy the following values:**
   - **API Key** → `CONTENTSTACK_API_KEY`
   - **Delivery Token** → `CONTENTSTACK_DELIVERY_TOKEN`
   - **Environment** → `CONTENTSTACK_ENVIRONMENT`

## 🎨 Styling

This project uses **Tailwind CSS** for styling. Key features:

- **Utility-first** CSS framework
- **Responsive design** with mobile-first approach
- **Custom components** using Tailwind utilities
- **Dark mode** support (ready to implement)

### Adding Custom Styles

1. **Global styles**: Edit `styles/globals.css`
2. **Component styles**: Use Tailwind classes directly in components
3. **Custom CSS**: Add to `styles/style.css` for complex styles

## 📁 Project Structure

```
contentstack-nextjs-starter-app/
├── components/                 # React components
│   ├── layout.tsx            # Main layout component
│   └── render-components.tsx # Component renderer
├── contentstack-sdk/         # Contentstack SDK configuration
│   ├── index.ts
│   └── utils.ts
├── helper/                   # Helper functions
│   └── index.ts
├── pages/                    # Next.js pages
│   ├── _app.tsx             # App component
│   ├── _document.tsx        # Document component
│   ├── index.tsx            # Home page
│   └── [page].tsx           # Dynamic pages
├── public/                   # Static assets
├── styles/                   # CSS files
│   ├── globals.css          # Global styles with Tailwind
│   ├── style.css            # Custom styles
│   └── third-party.css      # Third-party styles
├── typescript/               # TypeScript type definitions
│   ├── action.ts
│   ├── component.ts
│   ├── layout.ts
│   └── pages.ts
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## 📋 Features

- **Next.js 14** with App Router support
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **Contentstack CMS** integration
- **Static Site Generation** (SSG) support
- **Progressive Web App** (PWA) capabilities
- **Live Preview** support for content editors
- **Responsive Design** with mobile-first approach
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with static generation

## 📱 PWA Features

The app includes Progressive Web App capabilities:

- **Service Worker** for offline functionality
- **Web App Manifest** for installability
- **Responsive design** for all devices
- **Fast loading** with optimized assets

## 📄 License // DO WE NEED THIS?

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

TODO: COME UP WITH PROCESS TO CONTRIBUTE

**Happy coding!** 🎉

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Ericsson Brand Colors - Complete palette from Brand House
      colors: {
        // Dark Colors
        'ericsson-dark-blue': {
          50: '#f0f0ff',
          100: '#e6e6ff',
          200: '#d1d1ff',
          300: '#b3b3ff',
          400: '#8a8aff',
          500: '#000082', // Main Dark Blue
          600: '#000066',
          700: '#00004d',
          800: '#000033',
          900: '#00001a',
          950: '#00000d',
        },
        'ericsson-dark-teal': {
          50: '#f0fdfc',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#0b2d2e', // Main Dark Teal
          600: '#0a2526',
          700: '#081d1e',
          800: '#061516',
          900: '#040d0e',
          950: '#020506',
        },
        'ericsson-dark-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#2d2049', // Main Dark Purple
          600: '#241a3a',
          700: '#1b142b',
          800: '#120e1c',
          900: '#09080d',
          950: '#040206',
        },
        'ericsson-dark-coral': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#3c2121', // Main Dark Coral
          600: '#301a1a',
          700: '#241313',
          800: '#180c0c',
          900: '#0c0505',
          950: '#060202',
        },
        // Main Brand Colors
        'ericsson-blue': {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9ddff',
          300: '#7cc2ff',
          400: '#36a3ff',
          500: '#1174e6', // Main Blue
          600: '#0d5bb8',
          700: '#0c4a96',
          800: '#0f3d7a',
          900: '#123365',
          950: '#0b1f42',
        },
        'ericsson-teal': {
          50: '#f0fdfc',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#23969a', // Main Teal
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#134e4a',
          950: '#042f2e',
        },
        'ericsson-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#976cf4', // Main Purple
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        'ericsson-coral': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#e65d6a', // Main Coral
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        // Light Colors
        'ericsson-light-blue': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#d6e2f5', // Main Light Blue
          600: '#c1d4f0',
          700: '#acc6eb',
          800: '#97b8e6',
          900: '#82aae1',
          950: '#6d9cdc',
        },
        'ericsson-light-teal': {
          50: '#f0fdfc',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#bde0e1', // Main Light Teal
          600: '#a8d4d5',
          700: '#93c8c9',
          800: '#7ebcbd',
          900: '#69b0b1',
          950: '#54a4a5',
        },
        'ericsson-light-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#e0d3fc', // Main Light Purple
          600: '#d1c0fb',
          700: '#c2adfa',
          800: '#b39af9',
          900: '#a487f8',
          950: '#9574f7',
        },
        'ericsson-light-coral': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#efd4d3', // Main Light Coral
          600: '#e8c1c0',
          700: '#e1aead',
          800: '#da9b9a',
          900: '#d38887',
          950: '#cc7574',
        },
        // Additional Brand Colors
        'ericsson-yellow': {
          50: '#fffef0',
          100: '#fffce0',
          200: '#fff8c1',
          300: '#fff298',
          400: '#ffe866',
          500: '#fad22d', // Main Yellow
          600: '#e6c026',
          700: '#cc9e1f',
          800: '#b37d18',
          900: '#996611',
          950: '#66440b',
        },
        'ericsson-orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#e66e19', // Main Orange
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        'ericsson-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#c52a32', // Main Red
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Ericsson Grayscale - Exact values from Brand House
        'ericsson-gray': {
          0: '#ffffff',   // White
          1: '#f2f2f2',   // Gray 5
          2: '#e0e0e0',   // Gray 4
          3: '#a0a0a0',   // Gray 3
          4: '#767676',   // Gray 2
          5: '#242424',   // Gray 1
          6: '#000000',   // Black
        },
        // Primary color aliases for easy access
        primary: '#1174e6',
        secondary: '#23969a',
        accent: '#976cf4',
        highlight: '#e65d6a',
      },
      
      // Typography - Ericsson Hilda Font Family
      fontFamily: {
        'ericsson': [
          'Ericsson Hilda',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        'ericsson-mono': [
          'Ericsson Hilda Mono',
          'JetBrains Mono',
          'Fira Code',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        'sans': [
          'Ericsson Hilda',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      
      // Font Sizes - Based on Brand House specifications
      fontSize: {
        'xs': ['12px', { lineHeight: '20px' }],      // Small text from Brand House
        'sm': ['14px', { lineHeight: '20px' }],      // Main text from Brand House
        'base': ['16px', { lineHeight: '24px' }],    // Large text from Brand House
        'lg': ['20px', { lineHeight: '24px' }],      // Large text from Brand House
        'xl': ['24px', { lineHeight: '32px' }],
        '2xl': ['32px', { lineHeight: '40px' }],
        '3xl': ['40px', { lineHeight: '48px' }],
        '4xl': ['48px', { lineHeight: '56px' }],
        '5xl': ['56px', { lineHeight: '64px' }],
        '6xl': ['64px', { lineHeight: '72px' }],
        '7xl': ['72px', { lineHeight: '80px' }],
        '8xl': ['80px', { lineHeight: '88px' }],
        '9xl': ['96px', { lineHeight: '104px' }],
      },
      
      // Font Weights - Ericsson Hilda weights
      fontWeight: {
        'light': '300',    // Ericsson Hilda Light
        'normal': '400',   // Ericsson Hilda Regular
        'medium': '500',   // Ericsson Hilda Medium
        'bold': '700',     // Ericsson Hilda Bold
      },
      
      // Spacing - Based on Brand House spacing system (16px base unit)
      spacing: {
        '0.5': '2px',      // 0.125rem
        '1': '4px',        // 0.25rem
        '1.5': '6px',      // 0.375rem
        '2': '8px',        // 0.5rem
        '2.5': '10px',     // 0.625rem
        '3': '12px',       // 0.75rem
        '3.5': '14px',     // 0.875rem
        '4': '16px',       // 1rem - Base unit from Brand House
        '5': '20px',       // 1.25rem
        '6': '24px',       // 1.5rem
        '7': '28px',       // 1.75rem
        '8': '32px',       // 2rem - From Brand House
        '9': '36px',       // 2.25rem
        '10': '40px',      // 2.5rem
        '11': '44px',      // 2.75rem
        '12': '48px',      // 3rem - From Brand House
        '14': '56px',      // 3.5rem
        '16': '64px',      // 4rem - From Brand House
        '20': '80px',      // 5rem
        '24': '96px',      // 6rem
        '28': '112px',     // 7rem
        '32': '128px',     // 8rem
        '36': '144px',     // 9rem
        '40': '160px',     // 10rem
        '44': '176px',     // 11rem
        '48': '192px',     // 12rem
        '52': '208px',     // 13rem
        '56': '224px',     // 14rem
        '60': '240px',     // 15rem
        '64': '256px',     // 16rem
        '72': '288px',     // 18rem
        '80': '320px',     // 20rem
        '96': '384px',     // 24rem
      },
      
      // Breakpoints - Ericsson responsive design specifications
      screens: {
        'sm': '320px',    // Small: 320–479px
        'md': '550px',    // Medium: 550–1151px
        'lg': '1152px',   // Large: 1152–1600px
        'xl': '1601px',   // XL: >1601px (for demos on big screens like 80" TV)
      },
      
      // Border Radius - Modern, clean design
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'full': '9999px',
      },
      
      // Box Shadows - Professional, subtle shadows
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'none': 'none',
        // Ericsson-specific shadows using correct blue
        'ericsson': '0 4px 12px 0 rgb(17 116 230 / 0.15)',
        'ericsson-lg': '0 8px 24px 0 rgb(17 116 230 / 0.2)',
        'ericsson-xl': '0 16px 48px 0 rgb(17 116 230 / 0.25)',
      },
      
      // Animation & Transitions
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'ericsson-pulse': 'ericssonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        ericssonPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      
      // Z-Index Scale
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'auto': 'auto',
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },
      
      // Container Configuration
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      
      // Letter Spacing - Based on Brand House typography
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        // Ericsson-specific letter spacing
        'ericsson': '-0.02625em', // From Brand House
        'ericsson-tight': '-0.03em', // From Brand House
      },
    },
  },
  plugins: [
    // Typography plugin for rich text content
    require('@tailwindcss/typography'),
    // Forms plugin for better form styling
    require('@tailwindcss/forms'),
    // Aspect ratio plugin for responsive media
    require('@tailwindcss/aspect-ratio'),
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ericsson-dark-blue': '#000082',
        'ericsson-dark-teal': '#0b2d2e',
        'ericsson-dark-purple': '#2d2049',
        'ericsson-dark-coral': '#3c2121',
        'ericsson-blue': '#1174e6',
        'ericsson-teal': '#23969a',
        'ericsson-purple': '#976cf4',
        'ericsson-coral': '#e65d6a',
        'ericsson-light-blue': '#d6e2f5',
        'ericsson-light-teal': '#bde0e1',
        'ericsson-light-purple': '#e0d3fc',
        'ericsson-light-coral': '#efd4d3',
        'ericsson-yellow': '#fad22d',
        'ericsson-orange': '#e66e19',
        'ericsson-red': '#c52a32',
        'ericsson-gray': {
          0: '#ffffff',
          1: '#f2f2f2',
          2: '#e0e0e0',
          3: '#a0a0a0',
          4: '#767676',
          5: '#242424',
          6: '#000000',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        highlight: '#e65d6a',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      fontFamily: {
        ericsson: [
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
        sans: [
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
      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '20px',
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '20px',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '24px',
          },
        ],
        lg: [
          '20px',
          {
            lineHeight: '24px',
          },
        ],
        xl: [
          '24px',
          {
            lineHeight: '32px',
          },
        ],
        '2xl': [
          '32px',
          {
            lineHeight: '40px',
          },
        ],
        '3xl': [
          '40px',
          {
            lineHeight: '48px',
          },
        ],
        '4xl': [
          '48px',
          {
            lineHeight: '56px',
          },
        ],
        '5xl': [
          '56px',
          {
            lineHeight: '64px',
          },
        ],
        '6xl': [
          '64px',
          {
            lineHeight: '72px',
          },
        ],
        '7xl': [
          '72px',
          {
            lineHeight: '80px',
          },
        ],
        '8xl': [
          '80px',
          {
            lineHeight: '88px',
          },
        ],
        '9xl': [
          '96px',
          {
            lineHeight: '104px',
          },
        ],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
        0.5: '2px',
        1.5: '6px',
        2.5: '10px',
        3.5: '14px',
      },
      screens: {
        sm: '320px',
        md: '550px',
        lg: '1152px',
        xl: '1601px',
      },
      borderRadius: {
        none: '0',
        sm: 'calc(var(--radius) - 4px)',
        DEFAULT: '4px',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT:
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: 'none',
        ericsson: '0 4px 12px 0 rgb(17 116 230 / 0.15)',
        'ericsson-lg': '0 8px 24px 0 rgb(17 116 230 / 0.2)',
        'ericsson-xl': '0 16px 48px 0 rgb(17 116 230 / 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'ericsson-pulse':
          'ericssonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        scaleIn: {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        ericssonPulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
      },
      zIndex: {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
        auto: 'auto',
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        'modal-backdrop': '1040',
        modal: '1050',
        popover: '1060',
        tooltip: '1070',
        toast: '1080',
      },
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
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
        ericsson: '-0.02625em',
        'ericsson-tight': '-0.03em',
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
    require('tailwindcss-animate'),
  ],
};

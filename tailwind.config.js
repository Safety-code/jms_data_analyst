/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Hanken Grotesk"', 'sans-serif'],
        body: ['"Hanken Grotesk"', 'sans-serif'],
        'data-mono': ['"Geist"', 'ui-monospace', 'monospace'],
        'headline-lg': ['"Hanken Grotesk"', 'sans-serif'],
        'headline-md': ['"Hanken Grotesk"', 'sans-serif'],
        'body-lg': ['"Hanken Grotesk"', 'sans-serif'],
        'body-md': ['"Hanken Grotesk"', 'sans-serif'],
        'label-caps': ['"Geist"', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(44px, 6vw, 72px)', { lineHeight: '0.98', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg': ['clamp(32px, 4vw, 44px)', { lineHeight: '1.08', letterSpacing: '-0.01em', fontWeight: '800' }],
        'headline-md': ['26px', { lineHeight: '1.2', fontWeight: '800' }],
        'body-lg': ['20px', { lineHeight: '1.65', fontWeight: '500' }],
        'body-md': ['17px', { lineHeight: '1.65', fontWeight: '500' }],
        'label-caps': ['12px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '800' }],
        'data-mono': ['14px', { lineHeight: '1.5', fontWeight: '600' }],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        sm: '0.625rem',
        md: '0.875rem',
        lg: '1.125rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
      },
      colors: {
        background: '#eef6ff',
        primary: '#0369a1',
        secondary: '#db2777',
        tertiary: '#0891b2',
        accent: '#ec4899',
        surface: {
          DEFAULT: '#f7f9fb',
          bright: '#f7f9fb',
          container: '#eceef0',
          'container-low': '#f2f4f6',
          'container-lowest': '#ffffff',
          'container-high': '#e6e8ea',
          'container-highest': '#e0e3e5',
        },
        'on-surface': {
          DEFAULT: '#191c1e',
          variant: '#45464d',
        },
        'on-background': '#191c1e',
        'secondary-fixed': '#d3e4fe',
        'on-secondary-fixed': '#0b1c30',
        outline: {
          DEFAULT: '#76777d',
          variant: '#c6c6cd',
        },
        'on-primary': {
          fixed: '#131b2e',
        },
        'on-tertiary': {
          container: '#008ebf',
        },
        'surface-tint': '#565e74',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
      },
      boxShadow: {
        soft: '0px 4px 20px rgba(15, 23, 42, 0.04)',
        card: '0px 4px 20px rgba(15, 23, 42, 0.04)',
        level: {
          1: '0px 4px 20px rgba(15,23,42,0.04)',
          2: '0px 10px 30px rgba(15,23,42,0.08)',
        },
      },
      spacing: {
        gutter: '24px',
        'section-gap': '80px',
        'card-padding': '32px',
      },
      maxWidth: {
        'container-max': '1120px',
        '100': '25rem',
      },
    },
  },
  plugins: [],
}

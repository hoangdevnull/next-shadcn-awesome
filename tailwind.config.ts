/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      fontSize: {
        xxs: '0.625rem',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
      screens: {
        xs: '380px',
      },
      flex: {
        full: '0 0 100%',
      },
      width: {
        sidebar: 'var(--w-sidebar)',
      },
      height: {
        header: 'var(--header-h)',
      },
      zIndex: {
        header: 999,
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        surface: 'hsl(var(--surface))',
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: 'hsl(var(--foreground))',
        light: {
          DEFAULT: 'hsl(var(--light))',
          gray: 'hsl(var(--light-gray))',
        },
        primary: {
          DEFAULT: 'hsla(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          purple: 'hsl(var(--primary-purple))',
          gradient:
            'var(--primary-gradient, linear-gradient(134deg, rgba(205, 61, 255, 0.90) 0%, rgba(205, 61, 255, 0.90) 0.01%, #FE10F4 100%, #FE10F4 100%))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        dark: {
          surface: 'hsl(var(--surface))',
          gray: 'hsl(var(--dark-gray))',
          stroke: 'hsl(var(--dark-stroke))',
        },
        white: {
          opacity60: 'hsl(var(--opacity-white-60))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          light: 'hsl(var(--success-light))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          light: 'hsl(var(--error-light))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          light: 'hsl(var(--warning-light))',
        },
        divider: 'hsl(var(--divider))',
      },
      borderRadius: {
        '3xl': 'calc(var(--radius) * 4.5)',
        '2xl': 'calc(var(--radius) * 3)',
        xl: 'calc(var(--radius) * 2)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        haft: '50%',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#F6F5F0',
        ink: '#111211',
        'base-2': '#f0efe9',
        'base-3': '#ebeae4',
      },
      fontFamily: {
        serif: ['"Shippori Mincho"', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;

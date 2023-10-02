/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E1323',
        cardBackground: '#1C204B',
        lila: '#BBC0FF',
        darkLila: '#7078C9',
        orange: '#FF8B64',
        blue: '#55C2E6',
        red: '#FF5E7D',
        green: '#4BCF82',
        violet: '#7335D2',
        yellow: '#F1C75B',
      },
    },
  },
  plugins: [],
}

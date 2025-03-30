// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adjusted Palette for a warmer, slightly deeper beige feel
        'background': '#F5EFE6',   // Main page background (a distinct beige)
        'sidebar': '#FBF8F1',     // Lighter, warm off-white for the sidebar
        'card': '#FFFFFF',        // Pure white for content cards/sections where needed
        'text-primary': '#1A1817', // Very dark brown/black for high contrast text
        'text-secondary': '#736D69',// Muted brown/gray for secondary text
        'border-subtle': '#EAE0D5',// Border color that fits the beige theme
        'accent-blue': '#007AFF',
        'accent-red': '#FF3B30',
        'accent-gold': '#BFA16A', // Gold accent for Reward Status
        'card-dark': '#2C2C2E',
        'card-light-text': '#FFFFFF',
        'progress-bg': '#EAE0D5', // Background for progress bar
        'progress-fill': '#BFA16A', // Fill color for progress bar (gold)
      },
      fontFamily: {
        // Using Manrope - ensure it's imported via Google Fonts
        sans: ['Manrope', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Optional: Add Tailwind forms plugin if you want pre-styled form elements
    // require('@tailwindcss/forms'),
  ],
}
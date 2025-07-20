/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f9fafb',  // gray-50
          dark: '#111827'    // gray-900
        },
        surface: {
          light: '#ffffff',  // white
          dark: '#1f2937'    // gray-800
        },
        primary: {
          light: '#2563eb',  // blue-600
          dark: '#60a5fa'    // blue-400
        },
        primaryHover: {
          light: '#1d4ed8',  // blue-700
          dark: '#93c5fd'    // blue-300
        },
        accent: {
          light: '#6366f1',  // indigo-500
          dark: '#818cf8'    // indigo-400
        },
        text: {
          light: '#1f2937',  // gray-800
          dark: '#f3f4f6'    // gray-100
        },
        secondaryText: {
          light: '#6b7280',  // gray-500
          dark: '#9ca3af'    // gray-400
        },
        border: {
          light: '#e5e7eb',  // gray-200
          dark: '#374151'    // gray-700
        }
      }
    }
  },
  plugins: []
};

// Import the Vite configuration utility
import { defineConfig } from 'vite';

// Import the React plugin for Vite
import react from '@vitejs/plugin-react';

// Export the Vite configuration
export default defineConfig({
  // Specify plugins to enhance Vite's functionality
  plugins: [
    // Enable React support in Vite
    react(),
  ],
});


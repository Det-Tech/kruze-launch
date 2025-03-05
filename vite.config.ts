import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',  // Allow access on all network interfaces
    port: 5173,        // You can change this port if needed
    strictPort: true,  // Ensures the port is not changed automatically if it's occupied
  },
})

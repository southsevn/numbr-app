import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  base: '/numbr-app/',
  plugins: [
    // Allows using React dev server along with building a React application with Vite.
    react(),
    // Allows using the compilterOptions.paths from tsconfig.json
    tsconfigPaths(),
    //Creates a custom SSL certificate for local development
    //Using this plugin requires admin rights on the first dev-mode launch.
    ...(process.env.HTTPS ? [mkcert()] : []),
  ],
  build: {
    target: 'esnext',
  },
  publicDir: './public',
  server: {
    host: true,
  },
})

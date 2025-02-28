import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/github.io/", // Use "/<repo-name>/" if your repo is NOT named Logeshwaran06.github.io
  plugins: [react()],
});

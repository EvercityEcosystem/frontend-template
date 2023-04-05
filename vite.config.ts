import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
    },
  },
  plugins: [react(), tsconfigPaths()],
});

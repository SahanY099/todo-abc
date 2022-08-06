import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const path = require("path");

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@features",
        replacement: path.resolve(__dirname, "./src/features/"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "./src/utils"),
      },
    ],
  },
  // ...
});


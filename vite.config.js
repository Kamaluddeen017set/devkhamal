// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   base: "/devkhamal/",
//   plugins: [react()],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/devkhamal/", // 👈 important! use your repo name
});

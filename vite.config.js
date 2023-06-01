import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import Pages from "vite-plugin-pages";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS(), Pages()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
});

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import UnoCSS from "unocss/vite";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue({
//       script: {
//         defineModel: true,
//       },
//       template: {
//         compilerOptions: {
//           // @ts-ignore
//           isCustomElement: (tag) => ["flex", "grid"].includes(tag) || tag.startsWith("i-"),
//         },
//       },
//     }),
//     UnoCSS(),
//   ],
// });

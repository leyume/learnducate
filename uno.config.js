// uno.config.ts
import { defineConfig, presetAttributify, presetTagify, presetIcons, presetTypography, presetUno, presetWebFonts } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import transformerCompileClass from "@unocss/transformer-compile-class";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      brand: {
        orange: "#F90",
        blue: "#1971F3",
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTagify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Ubuntu",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerCompileClass()],
});

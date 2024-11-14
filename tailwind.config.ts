import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import PluginTypography from "@tailwindcss/typography";
import siteConfig from "./src/config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "mega-blue": siteConfig.colors.megaBlue,
        "mega-blue-dark": siteConfig.colors.megaBlueDark,
      },
      fontFamily: {
        fredoka: ["Fredoka Variable", "sans-serif"],
        sans: ["Arial", "Helvetica", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [PluginTypography],
} satisfies Config;

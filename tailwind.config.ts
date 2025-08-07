import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1850px",
        xl: "1600px",
        lg: "1380px",
        mdbvp: "1280px",
        md: "1100px",
        mds: "800px",
        sml: "650px",
        sm: "480px"
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        "pixel-primary": ["pixelFont", "var(--font-pixel)", "monospace"],
        "pixel-secondary": ["secondpixel", "var(--font-pixel)", "monospace"],
      },
      backgroundImage: {
        "5m": "url('https://i.yapx.cc/YdkNw.png')",
        dao: "url('https://i.yapx.cc/YdkN5.png')",
        twohundr: "url('https://i.yapx.cc/YdkOE.png')",
        five: "url('https://i.yapx.cc/YdkOQ.png')",
        back: "url('https://i.yapx.cc/Ydrk9.png')",
        twoback: "url('https://i.yapx.cc/Ydrr3.png')",
        review: "url('https://i.yapx.cc/YduCZ.png')"
      },
      boxShadow: {
        pixel:
            "4px -4px 0px 0px #4E3B40, -4px -4px 0px 0px #4E3B40, 4px 10px 0px 0px #4E3B40, -4px 10px 0px 0px #4E3B40",
        text:
            "-6px 10px 0px 0px #A5A56F",
        instruments:
            "4px -4px 0px 0px #19464A, -4px -4px 0px 0px #19464A, 4px 10px 0px 0px #19464A, -4px 10px 0px 0px #19464A",
        slider:
            "4px solid #D8ECC4",
        block:
            "-4px 4px 0px 0px #00000040",
        join:
            "4px 4px 0px 0px #503103"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

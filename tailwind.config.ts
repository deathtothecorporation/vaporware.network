import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "810px", // 810px and up
      lg: "1728px", // 1728px and up
    },
    extend: {
      fontSize: {
        opcode: ['9px', {
          lineHeight: '1.1',
        }],
        opxs: [ '9px', {
          lineHeight: "1.3", // 18px - good for small text readability
          letterSpacing: "0.01em", // slightly looser for small text
          fontWeight: "400",
        }
        ],
        opsm: [ '12px', {
          lineHeight: "normal", // 18px - good for small text readability
          letterSpacing: "0.01em", // slightly looser for small text
          fontWeight: "400",
        }],
        opmd: ['16px', {
          lineHeight: "normal", // 25.6px - optimal for body text
          letterSpacing: "-0.011em", // slight tightening for clarity
          fontWeight: "400",
        }],
        "opmd-mobile": ['17px', {
          lineHeight: "normal", // 25.6px - optimal for body text
          letterSpacing: "-0.011em", // slight tightening for clarity
          fontWeight: "400",
        }],
        ophead2: ['22px', {
          lineHeight: "1.3", // 31.2px - good for headers
          letterSpacing: "-0.018em", // tighter for headlines
          fontWeight: "500",
        }],
        oplg: ['24px', {
          lineHeight: "1.3", // 31.2px - good for headers
          letterSpacing: "-0.018em", // tighter for headlines
          fontWeight: "500",
        }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "opfn-sm": "2.25em", // 36px at default font size
        opfn: "3em", // 48px at default font size
        "opfn-lg": "4.5625em", // 73px at default font size
      },
      width: {
        "372": "372px",
        "opfn-xs": "24rem", // 384px
        "opfn-narrow": "651px", // 651px
        "opfn-mid": "49.5rem", // 792px
        opfn: "58.5rem", // 936px
      },
      maxWidth: {
        "opfn-xs": "24rem", // 384px
        "opfn-narrow": "651px", // 651px
        "opfn-mid": "49.5rem", // 792px
        opfn: "58.5rem", // 936px
        "opfn-lg": "64rem",
      },
    },
  },
  plugins: [],
};
export default config;

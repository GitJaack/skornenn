import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "light-blue": "var(--light-blue)",
                "dark-blue": "var(--dark-blue)",
                "dark-gray": "var(--dark-gray)",
            },
            fontFamily: {
                notoSerifJP: ["var(--font-noto-serif-jp)"],
            },
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(0deg, hsla(0, 0%, 100%, 0.88) 88%, hsla(0, 0%, 100%, 0))",
                "ice-effect":
                    "radial-gradient(circle, #fff 51%, hsla(0, 0%, 100%, .204) 100%);",
            },
            boxShadow: {
                articleCard: "0 4px 20px 0 rgba(108, 131, 154, 0.2)",
                articleCardHover: "0 0 20px 0px rgba(135, 206, 250, .5)",
            },
        },
    },
    plugins: [],
} satisfies Config;

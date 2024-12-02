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
                "radial-white":
                    "radial-gradient(ellipse at center, #fff 55%,hsla(0,0%,100%,.204) 100%)",
            },
            boxShadow: {
                articleCard: "-1px 4px 20px 0 rgba(108, 131, 154, 0.2)",
                articleCardHover: "-1px 4px 20px 0 rgba(135, 206, 250, .5)",
                buttonHover: "0 0 25px 10px rgba(135, 206, 250, 0.5)",
            },
        },
    },
    plugins: [],
} satisfies Config;

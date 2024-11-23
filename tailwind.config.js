/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                "max-w-2xl": { max: "1535px" },
                "max-w-xl": { max: "1279px" },
                "max-w-lg": { max: "1023px" },
                "max-w-md": { max: "767px" },
                "max-w-sm": { max: "639px" },
            },
            fontFamily: {
                sans: ["Source Sans Pro", "Arial", "sans-serif"],
                serif: ["Domine"],
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                bounce: {
                    "0%, 100%": { transform: "translateX(0)" },
                    "50%": { transform: "translateX(-15px)" },
                },
            },
        },
        animation: {
            marquee: "marquee 20s linear infinite", // Marquee scroll effect

            bounce: "bounce 0.2s ease infinite",
        },
    },

    plugins: [],
};

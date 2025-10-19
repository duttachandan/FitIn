/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '15px',
            },
        },
        extend: {
            colors: {
                primary: '#F2FF00',
                secondary: '#FFFFFF',
            },
        },
    },
    plugins: [],
}

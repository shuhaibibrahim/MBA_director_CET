module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#F68966",
                secondary: "#CC565C",
                tertiary: "#875A70",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#F68966",
                    dark: "#E67956",
                },
                secondary: {
                    DEFAULT: "#CC565C",
                    dark: "#BC464C",
                },
                tertiary: "#875A70",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

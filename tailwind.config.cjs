/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			google: ['"Product Sans"', "Roboto", "Arial", "sans-serif"],
			googleBold: ['"Product Sans Bold"', "Roboto", "Arial", "sans-serif"],
			fontAlt: ["Roboto", "Helvetica", "Arial", "sans-serif"],
			Roboto: ['Roboto', "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};

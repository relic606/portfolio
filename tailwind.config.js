/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	safelist: [],
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			sky: colors.sky
		}
	},
	plugins: []
};

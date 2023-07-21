/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
	content: {
		relative: true,
		files: [
			"./app/layout.js",
			"./app/page.js",
			"./app/skills/page.js",
			"./app/projects/page.js",
			"./app/components/Header.js"
		]
	},
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

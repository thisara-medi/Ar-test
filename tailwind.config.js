/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				'o2-scroller': 'url(src/assets/O2_Scroller.jpg)'
			}
		},
	},
	plugins: [],
};

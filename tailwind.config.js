module.exports = {
	purge: ['./src/**/*.{tsx,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			typography: (theme) => ({
				default: {
					css: {
						color: theme('colors.gray.900'),
						a: {
							color: theme('colors.blue.700'),
							'&:hover': {
								color: theme('colors.blue.500')
							}
						}
					}
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						a: {
							color: theme('colors.purple.500'),
							'&:hover': {
								color: theme('colors.purple.400')
							}
						},

						h1: {
							color: theme('colors.gray.100')
						},
						h2: {
							color: theme('colors.gray.100')
						},
						h3: {
							color: theme('colors.gray.100')
						},
						h4: {
							color: theme('colors.gray.100')
						},
						h5: {
							color: theme('colors.gray.100')
						},
						h6: {
							color: theme('colors.gray.100')
						},

						strong: {
							color: theme('colors.gray.100')
						},

						code: {
							color: theme('colors.gray.300')
						},

						figcaption: {
							color: theme('colors.gray.500')
						}
					}
				}
			}),
			scale: {
				102.5: '1.025'
			},
			colors: {
				mix: {
					shadow: 'linear-gradient(156deg,#000 30%,#007acc 59%,#9c1fa5 72%,#9c1fa5 89%)'
				},
				slightlyNotWhite: '#ededed',
				base: '#0f0f0f'
			},
			screens: {
				xs: '481px'
			}
		}
	},
	variants: {
		typography: ['dark']
	},
	plugins: [require('@tailwindcss/typography')]
};

/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1056px'
			}
		},
		fontSize: {
			10: ['0.625rem', { letterSpacing: '0.1px' }],
			11: ['0.688rem', { letterSpacing: '0.055px' }],
			12: '0.75rem',
			14: ['0.875rem', { letterSpacing: '-0.084px' }],
			15: ['0.938rem', { letterSpacing: '-0.135px' }],
			16: '1rem',
			18: ['1.125rem', { letterSpacing: '-0.252px' }],
			20: ['1.25rem', { letterSpacing: '-0.34px' }],
			24: ['1.5rem', { letterSpacing: '-0.456px' }],
			32: ['2rem', { letterSpacing: '-0.672px' }],
			40: ['2.5rem', { letterSpacing: '-0.84px' }],
			48: ['3rem', { letterSpacing: '-1.008px' }],
			60: ['3.75rem', { letterSpacing: '-1.26px' }],
			80: ['5rem', { letterSpacing: '-1.68px' }]
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				nanum: ['Nanum Pen Script', 'cursive', ...defaultTheme.fontFamily.sans]
			},
			borderRadius: {
				'4xl': '2rem'
			},
			colors: {
				black: '#0D0D0D',
				onyx: '#181818',
				'dark-gray': '#808080',
				'medium-gray': '#80808080',
				light: {
					gray: '#C5C5C5',
					blue: '#3F64EA6',
					red: '#E93F406E',
					yellow: '#FFB8006E',
					'main-bg': '#FBFBFB',
					'faint-white': '#F3F3F3',
					'card-border': '#EBEBEB',
					'card-bg': '#F6F6F6'
				},
				dark: {
					'main-bg': '#0D0D0D',
					'card-border': '#1E1E1E',
					'white-10': '#FFFFFF1A',
					'white-25': '#FFFFFF40',
					'white-75': '#FFFFFFB2',
					'black-50': '#15151580'
				}
			},
			backgroundImage: {
				'dark-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #131313 100%)'
			}
		}
	},
	plugins: []
};

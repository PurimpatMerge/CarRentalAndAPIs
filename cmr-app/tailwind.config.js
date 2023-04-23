/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",, "./node_modules/tw-elements/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
        fontFamily: {
            'custom': ['Chathura', 'sans-serif', 'Noto Serif SC', 'serif','Noto Sans JP', 'sans-serif','Noto Sans Thai', 'sans-serif'],
        },
        
        keyframes: {
            'fade-in-down': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(-10px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            },
            'fade-out-down': {
                'from': {
                    opacity: '1',
                    transform: 'translateY(0px)'
                },
                'to': {
                    opacity: '0',
                    transform: 'translateY(10px)'
                },
            },
            'fade-in-up': {
                '0%': {
                    opacity: '0',
                    transform: 'translateX(10px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateX(0)'
                },
            },
            'fade-out-up': {
                'from': {
                    opacity: '1',
                    transform: 'translateY(0px)'
                },
                'to': {
                    opacity: '0',
                    transform: 'translateY(10px)'
                },
            }
            
        },
        animation: {
            'fade-in-down': 'fade-in-down 0.5s ease-out',
            'fade-out-down': 'fade-out-down 0.5s ease-out',
            'fade-in-up': 'fade-in-up 0.5s ease-out',
            'fade-out-up': 'fade-out-up 0.5s ease-out'
        }
    },
},
  plugins: [require('tw-elements/dist/plugin')],
}

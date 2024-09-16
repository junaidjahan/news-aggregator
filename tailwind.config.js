import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            backdropBlur: {
                xs: '2px'
            },
            colors: {
                neutral: colors.gray,
                primary: colors.teal,
                secondary: colors.cyan,
                success: colors.green,
                danger: colors.red
            },
            spacing: {
                102: '32rem',
                98: '28rem',
            }
        }
    },
    plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xl: { max: '1400px' },
      lg: { max: '1200px' },
      md: { max: '990px' },
      md: { max: '990px' },
      sm: { max: '767px' },
      xs: { max: '470px' },
      ls: { max: '370px' },
    },
    container: {
      center: true,
      padding: '15px'
    },
    fontFamily: {
      Roboto: 'Roboto'
    },
    extend: {
      colors: {
        body: 'rgb(0, 4, 15)',
        error: 'rgb(243, 68, 68)',
        'purple-custom': 'rgb(89, 47, 244)',
        'hover-purple-custom': 'rgb(80, 43, 212)',
        'white-custom': 'rgb(242, 243, 243)',
        'light-gray-custom': 'rgb(175, 172, 174)',
        'light-neutral-custom': 'rgb(236, 236, 236)',
      },
      translate: {
        1.25: '5px',
      },
      rotate: {
        360: '360deg'
      },
      backgroundColor: {
        body: 'rgb(242, 242, 242)',
        error: 'rgb(243, 68, 68)',
        'hover-error': 'rgb(243, 80, 80)',
        'purple-custom': 'rgb(89, 47, 244)',
        'hover-purple-custom': 'rgb(80, 43, 212)',
        'white-custom': 'rgb(242, 243, 243)',
        'light-gray-custom': 'rgb(175, 172, 174)',
        'light-neutral-custom': 'rgb(236, 236, 236)',
        'hover-light-gray-custom': 'rgb(204, 204, 204)',
        'lock-gray': 'rgba(230, 227, 228, 0.25)',
        'zinc-custome': 'rgba(24, 24, 27, 0.35)',
      },
      fill: {
        'purple-custom': 'rgb(89, 47, 244)',
      },
      inset: {
        'full+0.35': 'calc(100% + 0.35rem)',
        '40%': '40%',
      },
      width: {
        '12.25': '12.25rem',
      },
      height: {
        'screen-80': 'calc(100vh - 5rem)',
        'screen-40': 'calc(100vh - 2.5rem)',
        '4/5vh': '80vh',
        '3.875': '3.875rem',
        'screen-1/2': '50vh',
      },
      maxWidth: {
        20: '20rem',
        30: '30rem',
        40: '40rem',
        87.625: '87.625rem',
        10: '10rem',
        8.75: '8.75rem',
        '1/2': '50%',
      },
      minWidth: {
        20: '20rem',
        9: '9rem',
        6: '1.5rem',
        1.25: '1.25rem',
      },
      maxHeight: {
        50: '50rem',
        45: '45rem',
      },
      minHeight: {
        'screen-80': 'calc(100vh - 5rem)',
        28: '28rem',
        9: '9rem',
        6: '1.5rem',
        1.25: '1.25rem',
      },
      gridTemplateColumns: {
        'minmax(22.5/1fr)': 'repeat(auto-fit, minmax(22.5rem, 1fr))'
      },
      gridColumn: {
        '2/3': '2 / 3',
        '3/-1': '3 / -1',
        '1/2': '1 / 2',
        '2/-1': '2 / -1',
      },
      gridRow: {
        '1/3': '1 / 3'
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
      padding: {
        18: '1.125rem',
        15.625: '15.625rem',
      },
      margin: {
        '-5': '-0.313rem'
      },
      lineHeight: {
        46: '2.875rem'
      },
      boxShadow: {
        'auth': '0 0.25rem 0.625rem rgba(17, 17, 17, 0.05)',
        'header': '0 0.1rem 0.05rem rgba(17, 17, 17, 0.2)',
      },
      fontSize: {
        15: '0.938rem',
        32: '2rem',
      },
      borderColor: {
        'blue-opacity': 'rgba(89, 47, 244, 0.3)',
        'emerald-opacity': 'rgba(16, 185, 129, 0.3)',
        'error-opacity': 'rgba(243, 68, 68, 0.3)',
      },
      fontFamily: {},
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          },
        },
      },
      animation: {
        fakeIn: 'fade-in .3s ease',
      }
    },
  },
  plugins: [],
}


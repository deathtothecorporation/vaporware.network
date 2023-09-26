module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: "class",
  corePlugins: {
    container: true
  },


  plugins: [
    
    function ({ addComponents }) {
      addComponents({

        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1080px', 
          },
          '@screen xl': {
            maxWidth: '1150px',
          },
          '@screen 2xl': {
            maxWidth: '1200px',
          },


        }

      })
    }
  ],

  theme: {

    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
       
        dark: {
          100: '#040c0d', 
          200: '#120906', 
          
        },
       
      },
      fontFamily: {
        heading_font: [
          '"Inter", sans-serif',
        ],

        body_font: [
    
          '"Inter", sans-serif',
        ],
      },



      backgroundImage: {
        "curved-blue-gradient": "url(/imagenes/precios/curved-blue-gradient-bg.svg)",
        "border-gradient": "linear-gradient(90deg, #C84E89 0%, #F15F79 100%);",
        "gradient-m": "linear-gradient(90.18deg, rgba(255, 255, 255, 0.6) 0.13%, rgba(255, 255, 255, 0) 139.11%);",
        "gradient-lg": "linear-gradient(90deg, rgba(43, 192, 228, 0.1) 0%, rgba(234, 236, 198, 0.1) 100%)",
        "gradient-xl": "linear-gradient(98.44deg, rgba(255, 223, 162, 0.4) -1.68%, rgba(132, 195, 238, 0.4) 95.72%)"
        
      },

      placeholderColor: theme => theme('colors'),
      placeholderColor: {
        "coolGray-600": "#4B5563",
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),

      }),
     
     
      boxShadow: {
        base: '0px 51.111106872558594px 40.888885498046875px 0px #3131311A',
 
      },
     
     
    },
  },
  // Other stuff
};
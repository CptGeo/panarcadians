module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    borderRadius: {
      'sm' : '2px',
      'md' : '4px',
      'full': '100%'
    },

    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
    },

    height: {
      '0' : '0px',
      '1' : '1px',
      '2' : '2px',
      '3' : '3px',
      '4' : '4px',
      '5' : '5px',
      '6' : '6px',
      '7' : '7px',
      '8' : '8px',
      '9' : '9px',
      '10': '10px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '32': '32px',
      '36': '36px',
      '40': '40px',
      '44': '44px',
      '45': '45px',
      '46': '46px',
      '50': '50px',
      '60': '60px',
      '64': '64px',
      '70': '70px',
      '120': '120px',
      '280': '280px',
      '450': '450px',
      'full': '100%',
      'auto': 'auto',
      'screen': '100vh'
    },

    container: {
      screens: {
        sm : "600px",
        md : "960px",
        lg : "1240px",
        xl : "1360px",
        '2xl' : "1400px",
      },

      center : true
    },


    fontFamily: {
      'body': ['SourceSansPro', 'sans-serif'],
      'sans': ['ProximaNova', 'sans-serif']
    },


    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1400px',
    },


    spacing : {
      '0' : '0px',
      '1' : '1px',
      '2' : '2px',
      '3' : '3px',
      '3.5': '3.5px',
      '4' : '4px',
      '5' : '5px',
      '6' : '6px',
      '7' : '7px',
      '8' : '8px',
      '9' : '9px',
      '10': '10px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '16': '16px',
      '15': '15px',
      '17': '17px',
      '18': '18px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '24': '24px',
      '25': '25px',
      '27': '27px',
      '30': '30px',
      '32': '32px',
      '34': '34px',
      '35': '35px',
      '36': '36px',
      '38': '38px',
      '40': '40px',
      '45': '45px',
      '48': '48px',
      '55': '55px',
      '60': '60px',
      '62': '62px',
      '64': '64px',
      '70': '70px',
      '75': '75px',
      '160': '160px',
      '218': '218px',
      '220': '220px',
      '245': '245px',
      '250': '250px',
      'auto': 'auto'
    },

    fontSize: {
      'xs': '10px',
      'sm': '12px',
      'tiny': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '34px',
      '5xl': '48px'
    },

    extend: {
      colors: {
        "blue" : "#002868",
        "red" : "#BF0A30",
        "lightgray" : "#F8F8F8",
        "lightgray-200": "#EEEEEE",
        "gray-200" : "#B6B6B6",
        "darkgray" : "#333333",
        "gray" : "#666666",
      },
      letterSpacing: {
        xs: '0.15px',
        md: '0.9px',
        lg: '2px',
       },

       flex: ['hover', 'focus'],

       width: {
        '18': '18px',
        '24': '24px',
        '44': '44px',
        '140': '140px',
        '130': '130px',
        '180': '180px',
        '200': '200px',
        '280': '280px',
        '450': '450px',
        '740': '740px',
        '1000': '1000px',
        'full' : '100%'
      },

      lineHeight: {
        '50': '50px',
        '45': '45px',
        '20': '20px',
        '25': '25px',
        '16': '16px',
        '6': '6px'
       },

       maxWidth: {
         '130': '130px',
         '240': '240px'
       },

       minWidth: {
         '300': '300px'
       },

       minHeight: {
         '420': '420px',
         '480': '480px',
         '650': '650px',
         '665': '665px',
         '750': '750px'
       },

       transitionTimingFunction: {
        'ease': 'ease',
       },

       boxShadow: {
         'lg-40' : '0 0 40px 0 rgba(0,0,0, .3)',
         'lg-45': '0 20px 40px 0 rgb(0,0,0, .35);'
      },

      inset: {
        '55p': '55%',
        'unset': 'unset',

      },

      zIndex: {
        '0': 0,
       '10': 10,
       '20': 20,
       '30': 30,
       '40': 40,
       '50': 50,
       '25': 25,
       '50': 50,
       '75': 75,
       '99': 99,
       '100': 100,
      }
  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

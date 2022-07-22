import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('MedFoodDarkMode') || false
}

const palette = {
  smart: {
    primary: colors.cyan.base, // primary main
    primarylight: colors.cyan.lighten4, // primary light
    primarydark: colors.cyan.darken3, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten4, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    anchor: colors.blue.base // link
  }
}

export const theme = {
  ...palette.smart
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      dark: {
        bg: "#001e26", // body bg
        surface: "#012a35", // card and all box
        footercolor: '#012a35',
        bggrey: '#001e26',
        primary: '#ff8e28',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        default: '#ff8e28',
      },
      light: {
        bg: "#ffffff",
        surface: "#ffffff",
        footercolor: '#012a35',
        bggrey: '#faf7f2',
        primary: '#ff8e28',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        default: '#ff8e28',
      },

    },
    options: {
      customProperties: false
    }
  }
}

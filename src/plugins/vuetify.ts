// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import {createVuetify, type ThemeDefinition} from 'vuetify'

const light: ThemeDefinition = {
  colors:{
    background: '#EDF7F6',
    primary: '#773CE7',
    secondary: '#343633',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const dark: ThemeDefinition = {
  colors:{
    background: '#343633',
    primary: '#B39DDB',
    secondary: '#EDF7F6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes:{
      light,
      dark
    }
  },
})

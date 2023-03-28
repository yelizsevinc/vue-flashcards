/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#443c73",
          secondary: "#e1e9f1",
          accent: "#72bbfa",
          error: "#FF5252",
          info: "#638fc9",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },
})

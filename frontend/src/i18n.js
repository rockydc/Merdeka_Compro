import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ID from './assets/i18n/id.json'
import EN from './assets/i18n/en.json'

Vue.use(VueI18n)

const messages = {
  en: {
    JOIN_US: EN.JOIN_US_TITLE
  },
  id: {
    JOIN_US: ID.JOIN_US_TITLE
  }
}

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'id' || 'en', // set locale
  messages, // set locale messages
})

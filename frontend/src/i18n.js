import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ID from './assets/i18n/id.json'
import EN from './assets/i18n/en.json'

Vue.use(VueI18n)

const messages = {
  en: {
    home: EN.home,
    about: EN.about,
    registration: EN.registration,
    registerNow: EN.registerNow,
    why: EN.why,
    or: EN.or,
    at: EN.at
  },
  id: {
    home: ID.home,
    about: ID.about,
    registration: ID.registration,
    registerNow: ID.registerNow,
    why: ID.why,
    or: ID.or,
    at: ID.at
  }
}

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'id' || 'en', // set locale
  messages, // set locale messages
})
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ID from './assets/i18n/id.json'
import EN from './assets/i18n/en.json'

Vue.use(VueI18n)

const messages = {
  en: {
    homeJoinUsTitle: EN.homeJoinUsTitle,
    homeJoinUsContent: EN.homeJoinUsContent,
    homeJoinUsButton: EN.homeJoinUsButton,
    homeOurProfileTitle: EN.homeOurProfileTitle,
    homeOurProfileFirstContent: EN.homeOurProfileFirstContent,
    homeOurProfileSecondContent: EN.homeOurProfileSecondContent,
    homeOurProfileThirdContent: EN.homeOurProfileThirdContent,
    homeOurProfileInformation: EN.homeOurProfileInformation,
    aboutMerdekaFirstContent: EN.aboutMerdekaFirstContent,
    aboutMerdekaSecondContent: EN.aboutMerdekaSecondContent,
    aboutMerdekaThirdContent: EN.aboutMerdekaTHIRD_CONTENT,
    aboutMerdekaJoinNow: EN.aboutMerdekaJoinNow,
    why: EN.why,
    modalAfterRegistration: EN.modalAfterRegistration,
    registrationInformation: EN.registrationInformation,
  },
  id: {
    homeJoinUsTitle: ID.homeJoinUsTitle,
    homeJoinUsContent: ID.homeJoinUsContent,
    homeJoinUsButton: ID.homeJoinUsButton,
    homeOurProfileTitle: ID.homeOurProfileTitle,
    homeOurProfileFirstContent: ID.homeOurProfileFirstContent,
    homeOurProfileSecondContent: ID.homeOurProfileSecondContent,
    homeOurProfileThirdContent: ID.homeOurProfileThirdContent,
    homeOurProfileInformation: ID.homeOurProfileInformation,
    aboutMerdekaFirstContent: ID.aboutMerdekaFirstContent,
    aboutMerdekaSecondContent: ID.aboutMerdekaSecondContent,
    aboutMerdekaThirdContent: ID.aboutMerdekaThirdContent,
    aboutMerdekaJoinNow: ID.aboutMerdekaJoinNow,
    why: ID.why,
    modalAfterRegistration: ID.modalAfterRegistration,
    registrationInformation: ID.registrationInformation,
  }
}

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'id' || 'en', // set locale
  messages, // set locale messages
})
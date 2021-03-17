import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BIcon, BIconChevronBarUp, BIconChevronBarDown } from 'bootstrap-vue'
import i18n from './i18n'

Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconChevronBarUp', BIconChevronBarUp)
Vue.component('BIconChevronBarDown', BIconChevronBarDown)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

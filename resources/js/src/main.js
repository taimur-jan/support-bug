import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import router from '@/router'
import store from '@/store'
import App from '@/App.vue'

// Global Components
import '@/global-components'

// 3rd party plugins
import '@axios'
import '@/libs/portal-vue'
import '@/libs/toastification'

window.axios = require('axios').default
//To send authentication cookie along every request
window.axios.defaults.withCredentials = true

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

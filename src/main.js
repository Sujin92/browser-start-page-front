import Vue from 'vue'
import App from './App.vue'

import ComponentPlugin from '@/plugins/components.js'

import VueMoment from 'vue-moment'

import 'reset-css'

Vue.config.productionTip = false

Vue.use(ComponentPlugin)
Vue.use(VueMoment)

new Vue({
  render: h => h(App),
}).$mount('#app')

const  Init = () => {
  console.log('loading')
}

Init()
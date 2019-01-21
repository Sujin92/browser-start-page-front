import Vue from 'vue'
import App from './App.vue'
import ComponentPlugin from '@/plugins/components.js'

Vue.config.productionTip = false

Vue.use(ComponentPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')

Init()

function Init() {
  console.log('loading')
}
import Vue from 'vue'
import App from './App.vue'
import ComponentPlugin from '@/plugins/components.js'

Vue.config.productionTip = false

Vue.use(ComponentPlugin)

import 'normalize.css';
import 'reset.css';

new Vue({
  render: h => h(App),
}).$mount('#app')

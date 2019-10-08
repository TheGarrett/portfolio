import Vue from 'vue'
import App from './App.vue'
// Global files
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/_structure.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

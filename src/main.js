import Vue from 'vue'
import App from './App.vue'
// Import font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faFutbol} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// Global files
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/_structure.scss'

// Add icons to the library
library.add(faUserGraduate)
library.add(faHtml5)
library.add(faUniversity)
library.add(faPencilAlt)
library.add(faTicketAlt)
library.add(faFutbol)
library.add(faInstagram)
library.add(faTwitter)
library.add(faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

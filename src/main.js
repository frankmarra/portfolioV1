import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/App.css'
import VueMeta from 'vue-meta'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)
dom.watch()

createApp(App)
  .use(router)
  .use(VueMeta)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

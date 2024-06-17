import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"; //Vuex 저장소 추가
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App)
.use(router)
.use(store)
.use(vuetify)
.mount('#app')

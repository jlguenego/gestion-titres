import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { layout } from './layout/LayoutPlugin'
import { piniaPersist } from './plugins/pinia/PersistPlugin'
import router from './router'
import { widget } from './widgets/WidgetPlugin'
import { log } from './utils/logging'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPersist)

app.use(pinia)
app.use(router)
app.use(widget)
app.use(layout)

app.mount('#app')
// TODO: You must initialize the PWA service worker.

log('start the app')

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//  bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// custom CSS
import '@/assets/CSS/style.css'

createApp(App).use(store).use(router).mount('#app')

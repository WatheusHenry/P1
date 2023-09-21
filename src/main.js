import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import 'vue2-animate/dist/vue2-animate.min.css'; // Importe um pacote de animações (opcional)

const app = createApp(App)

app.use(router)

app.mount('#app')

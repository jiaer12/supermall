import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App).mount('#app')

// Vue.config.productionTip = false
// new Vue({
//   render:h=>h(APP),
//   router,
// }).$mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')


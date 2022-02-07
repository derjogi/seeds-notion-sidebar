import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import VueFontAwesomeCss from 'vue-fontawesome-css'

createApp(App)
  .use(store)
  .use(router)
  .use(VueSidebarMenu)
  .use(VueFontAwesomeCss)
  .mount('#app')

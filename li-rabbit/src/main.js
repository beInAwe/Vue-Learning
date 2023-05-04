import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store/index'


// 创建一个vue应用实例
createApp(App).use(store).use(router).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import Find from './views/Find'
import My from './views/My'
import Part from './views/Part'
import NotFound from './views/NotFound'
//1.下载vue-router (yarn add vue-router)
// 2.引入
import VueRouter from 'vue-router'
//3.定义全局组件
Vue.use(VueRouter)
//4.规则数组
const routes = [
  {
    path: '/',
    redirect: './find', //重定向到/find
   
  },
  {
    path: '/find',
    component: Find,
    name:'Find'
  },
  {
    path: '/my',
    component: My,
    name:'My'
  },
  {
    path: '/part',
    component: Part,
    name:'Part'
  },
  {
    // path:'/part/:username/:id'//有：的路径代表要具体值
    path: '/part/:username/:id'//有：的路径代表要具体值

  }, 
  {
    path: '*',
    component:NotFound
  }

]
const router = new VueRouter({
  routes: routes,  //routes是固定的key(传入规则数组)
  mode:"history" //默认是hash
})



Vue.config.productionTip = false
// 6.注入实例中
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

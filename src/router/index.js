import Vue from 'vue'
import VueRouter from 'vue-router'
// 注意点： 通过 import xxx from xxx的方式加载组件，无论组件有没有被用到，都会被加载进来
// import Recommend from '../views/Recommend'
// import Rank from '../views/Rank'
// import Search from '../views/Search'
// import Singer from '../views/Singer'

// 实现Vue组件的按需加载????
const Recommend = (resolve) => {
  import('../views/Recommend').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('../views/Rank').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('../views/Search').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('../views/Singer').then((module) => {
    resolve(module)
  })
}

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommend' },
  { path: '/recommend', component: Recommend },
  { path: '/rank', component: Rank },
  { path: '/search', component: Search },
  { path: '/singer', component: Singer }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
Vue.use(VueRouter)

//Defining the Routes (Slide-2)
export const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/todolist',
    name: 'todolist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import('../pages/ToDoList')
  },{
    path: '/shop',
    name: 'shop',
    component: Shop
  },{
    path: '/faq',
    name: 'faq',
    component: () =>
        import('../pages/FAQ'),
    /* Passing the Content */
    props: true
  },{
    path: '/single',
    name: 'singlemessage',
    component: () =>
        import('../pages/SingleMessage'),
    /* Passing the Content */
    props: true
  },{
    path: '/warenkorbbutton',
    name: 'warenkorbbutton',
    component: () =>
        import('../pages/Warenkorb'),
    /* Passing the Content */
    props: true
  }
]

//Setting up the Router Instance
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.replace({path:'home', redirect: '/'})
export default router

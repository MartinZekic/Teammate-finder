import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/prijava',
    name: 'Prijava',
    component: () => import(/* webpackChunkName: "prijava" */ '../views/Prijava.vue')
  },
  {
    path: '/registracija',
    name: 'Registracija',
    component: () => import(/* webpackChunkName: "Registracija" */ '../views/Registracija.vue')
  },
  {
    path: '/izabirigre',
    name: 'IzabirIgre',
    component: () => import(/* webpackChunkName: "IzabirIgre" */ '../views/IzabirIgre.vue')
  },
  {
    path: '/igraci',
    name: 'Igraci',
    component: () => import(/* webpackChunkName: "Igraci" */ '../views/Igraci.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

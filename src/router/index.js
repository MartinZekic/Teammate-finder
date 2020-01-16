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
    path: '/profilig',
    name: 'ProfilIg',
    component: () => import(/* webpackChunkName: "IzabirIgre" */ '../views/ProfilIg.vue')
  },
  {
    path: '/igraci',
    name: 'Igraci',
    component: () => import(/* webpackChunkName: "Igraci" */ '../views/Igraci.vue')
  },
  {
    path: '/pozivi',
    name: 'Pozivi',
    component: () => import(/* webpackChunkName: "Pozivi" */ '../views/Pozivi.vue')
  },
  {
    path: '/timovi',
    name: 'Timovi',
    component: () => import(/* webpackChunkName: "Timovi" */ '../views/Timovi.vue')
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: () => import(/* webpackChunkName: "Igraci" */ '../views/Inbox.vue')
  },
  {
    path: '/profilp',
    name: 'ProfilP',
    component: () => import(/* webpackChunkName: "ProfilP" */ '../views/ProfilP.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

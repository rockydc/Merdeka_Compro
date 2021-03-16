import Vue from 'vue'
import VueRouter from 'vue-router'

import {Home,Tentang,Produk,Deposit,Kontak,Pendaftaran,TentangMDA} from '../views';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component:Tentang
  
  },
  {
    path: '/produk',
    name: 'Produk',
    component:Produk
  
  },
  {
    path: '/pendaftaran',
    name: 'Pendaftaran',
    component:Pendaftaran
  
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component:Deposit
  
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component:Kontak
  
  },
  {
    path: '/tentangmda',
    name: 'tentangmda',
    component:TentangMDA
  
  }
]

// const router = new VueRouter({
//   mode: 'history',
//   routes: [...]
// })
const router = new VueRouter({
   mode: 'history',

  routes
})

export default router

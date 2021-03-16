import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tentang from '../views/Tentang.vue'
import Produk from '../views/Produk.vue'
import Pendaftaran from '../views/Pendaftaran.vue'
import Deposit from '../views/Deposit.vue'
import Kontak from '../views/Kontak.vue'



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
  
  }
]

const router = new VueRouter({
  routes
})

export default router

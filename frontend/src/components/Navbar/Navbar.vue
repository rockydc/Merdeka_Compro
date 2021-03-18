<template>
    <div >
          <b-navbar toggleable="lg">
    <b-navbar-brand  v-show="isBrand" href="#"><b-img width="50" height="50"  src="@/assets/img/Logo-merdeka.png"></b-img></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <template #default ="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up" variant="light"></b-icon>
          <b-icon v-else icon="chevron-bar-down" variant="light"></b-icon>
          
      </template>

    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

         
 
        <b-nav-item ><router-link  exact class="router-link"  to="/" >Beranda</router-link ></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/tentang" >Tentang Merdeka Pulsa</router-link></b-nav-item>
        <b-nav-item  ><router-link class="router-link" to="/produk">Produk Merdeka Pulsa</router-link></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/pendaftaran">Pendaftaran</router-link></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/deposit">Deposit</router-link></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/kontak">Hubungi Kami</router-link></b-nav-item>
         
         <b-nav-item href="#" class="nav-billingual ">
           <a class="router-link" @click="setLocale('id')" to="#">ID</a>
         </b-nav-item>
         <span class="divider">|</span>
        <b-nav-item href="#" class="nav-billingual ">
           <a class="router-link" @click="setLocale('en')" to="#">EN</a>
         </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>
<script>
export default {
    name:'Navbar',
    props:{
      isBrand:Boolean
    },
    methods:{
      setLocale(locale) {
        this.$i18n.locale = locale;
      },
    }
}

</script>
<style lang="scss" scoped>
@import "Navbar.scss";
</style>

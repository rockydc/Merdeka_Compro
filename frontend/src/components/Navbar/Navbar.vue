<template>
    <div >
          <b-navbar  toggleable="lg">
    <b-navbar-brand exact v-show="isBrand"  to="/" ><b-img width="50" height="50"  src="@/assets/img/logo-merdeka-baru.png"></b-img></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <template #default ="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up" variant="light"></b-icon>
          <b-icon v-else icon="chevron-bar-down" variant="light"></b-icon>
          
      </template>

    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

         
 
        <b-nav-item ><router-link  exact class="router-link"  to="/" >{{$t('home.title')}}</router-link ></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/tentang" >{{$t('about.title')}}</router-link></b-nav-item>
        <b-nav-item  ><router-link class="router-link" to="/produk">{{$t('product.title')}}</router-link></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/pendaftaran">{{$t('registration.title')}}</router-link></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/deposit">{{$t('deposit.title')}}</router-link></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/kontak">{{$t('contactUs.title')}}</router-link></b-nav-item>
         <div style=" display:flex;">
            <b-nav-item href="#" class="nav-billingual ">
                    <a class="router-link" @click="setLocale('id')" to="#">ID</a>
                  </b-nav-item>
                  <span class="divider">|</span>
                  <b-nav-item href="#" class="nav-billingual ">
                    <a class="router-link" @click="setLocale('en')" to="#">EN</a>
                  </b-nav-item>
         </div>
      
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>
<script>
export default {
    name:'Navbar',
    props:{
      isBrand:Boolean,
      disablelink:Boolean,

      
    },
    methods:{
      setLocale(locale) {
        this.$i18n.locale = locale;
      },
    }
}

</script>
<style lang="scss" scoped>
@import "Navbar-remake.scss";
</style>

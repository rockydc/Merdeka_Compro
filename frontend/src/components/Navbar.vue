<template>
    <div >
          <b-navbar toggleable="lg">
    <b-navbar-brand href="#"><b-img width="50" height="50"  src="@/assets/Logo-merdeka.png"></b-img></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
 
        <b-nav-item href="#" active>Beranda</b-nav-item>
        <b-nav-item href="#">Tentang Merdeka Pulsa</b-nav-item>
        <b-nav-item href="#">Produk Merdeka Pulsa</b-nav-item>
        <b-nav-item href="#">Pendaftaran</b-nav-item>
        <b-nav-item href="#">Deposit</b-nav-item>
        <b-nav-item href="#">Hubungi Kami</b-nav-item>
         <b-nav-item href="#">ID|ENG</b-nav-item>
    
 
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>
<script>
export default {
    name:'Navbar'
}
</script>
<style lang="scss" scoped>
.navbar{
    background:transparent;

}
.nav-item .nav-link{
        color:white;
        font-family: poppins,sans-serif;
        font-size:12px;
        margin-left:5px;

    }
 .navbar-light .navbar-nav .nav-link.active{
  padding:7px 14px;
  background:white;
  border-radius:15.5px;
  color: #C52D2E;
}
</style>

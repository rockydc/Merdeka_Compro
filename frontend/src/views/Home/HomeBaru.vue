<template>
<div class="d-block">
  <div class="wrapper-home">
  
    <Navbar :class="'navbar-home text-white'" isBrand/>
    
<!-- Hero Section -->

  <section class="hero">
    
    <div class="header-text ">
        <div class="header-content ">
                
                <h1> {{ $t("JOIN_US") }}   Merdeka Pulsa
                </h1>
                <p class="p-text">penyedia pulsa <span>terpercaya</span> dengan harga <span>kompetitif</span>, 
                siap mengawal transaksi Anda. 
                </p>
                    <b-button to="/pendaftaran" class="btn-daftar">
                      Daftar sekarang
                    </b-button>
              </div>
    </div>
    <div class="globe-wrapper ">

      <div class="globe">
        <b-img class="img-globe" src="@/assets/img/globe.png"></b-img>
      </div>
    </div>

  </section>
</div>


<div class="section-profile-wrapper ">

<b-img class="garis-bantu-kiri" src="@/assets/img/garis-bantu-kiri.png">   
      </b-img>
    <section class="section-profile ">
 
      <div class="logo-wrapper ">
           
          <b-img class="logo" src="@/assets/img/Logo Merdeka Digital Asia 2.png"></b-img>
        

      </div>

      <div class="profile-content ">
        <div>
          <h1 class="mb-3">Profile Kami</h1>
                  <p>
                                      Didirikan pada September 2020, Perusahaan
                        membawa keahlian, pengalaman, jaringan dan
                        kemampuan keuangan yang kuat di industri ini.
                        <br/>          <br/>
                        Perusahaan memiliki aktivitas bisnis utama dalam
                        komersialisasi portal web dan platform digital. Hal
                        ini juga dioptimalkan dengan kemampuan kami
                        untuk menyampaikan solusi yang terintegrasi untuk
                        mengakomodir kebutuhan pelanggan.
                        <br/>          <br/>
                        Dengan kombinasi kemampuan teknis – komersial
                        – operasi yang kuat, Perusahaan dapat
                        menyampaikan hasil yang terbaik bagi kepuasan
                        pelanggan.
                  </p>
                    
                  <router-link class="info-link" target="_top" to="/tentangmda">
                        Info lebih lanjut...
                    </router-link>
        </div>
      
      </div>

    </section>
</div>

</div>
</template>

<script>
// @ is an alias to /src
import {Navbar} from '../../components';

export default {
  name: 'HomeBaru',
  components: {
    Navbar
  }
}
</script>
<style lang="scss" scoped>
@import "@/views/Home/home.scss";

</style>
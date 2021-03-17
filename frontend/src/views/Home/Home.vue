<template>
  <div>
   
    <Navbar isBrand/>
    
<!-- Hero Section -->
    <b-row class="container-fluid">
      <b-col lg="4"  md="6" sm="12" class="header-text">
        <div>
          <h1>Mari bergabung ke<br/>  Merdeka Pulsa
          </h1>
          <p>penyedia pulsa <span>terpercaya</span> dengan harga <span>kompetitif</span>, 
          siap mengawal transaksi Anda. 
                  </p>
              <b-button to="/pendaftaran" class="btn-daftar">
                Daftar sekarang
              </b-button>
        </div>
      
      

        
      </b-col>
      <b-col lg="8"  md="6" sm="12">
           <div class="globe">
      <b-img class="img-globe" src="@/assets/img/globe.png">
      </b-img>
  
    </div>
      </b-col>
    </b-row>
  <!-- end Hero Section -->

    <!-- Section profile -->
    <div class="container-fluid section-profile">
      <b-row>
        <b-col lg="6" md="6" sm="12">
          <div class="digital-logo-2-wrapper">
                <b-img class="garis-bantu-kiri" src="@/assets/img/garis-bantu-kiri.png">   
                </b-img>
               <div class="d-flex justify-content-center align-items-md-start">
          <b-img class="logo-digital2" src="@/assets/img/Logo Merdeka Digital Asia 2.png"></b-img>
          </div>
          </div>
     

        </b-col>
        <b-col lg="6" md="6" sm="12">
          <div class="d-flex justify-content-center flex-column profile-content" style="height:100%;">
            <h1>Profil Kami</h1>
            <p>
                              Didirikan pada September 2020, Perusahaan
                membawa keahlian, pengalaman, jaringan dan
                kemampuan keuangan yang kuat di industri ini.

                Perusahaan memiliki aktivitas bisnis utama dalam
                komersialisasi portal web dan platform digital. Hal
                ini juga dioptimalkan dengan kemampuan kami
                untuk menyampaikan solusi yang terintegrasi untuk
                mengakomodir kebutuhan pelanggan.

                Dengan kombinasi kemampuan teknis – komersial
                – operasi yang kuat, Perusahaan dapat
                menyampaikan hasil yang terbaik bagi kepuasan
                pelanggan.
            </p>
            
              <router-link class="info-link" to="/tentangmda">
                Info lebih lanjut...
              </router-link>
            
          </div>
        </b-col>
      </b-row>
    </div>
    <!-- end Section profile -->

    </div>

</template>

<script>
// @ is an alias to /src
import {Navbar} from '../../components';

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
<style lang="scss" scoped>
@import "@/views/Home/home.scss";

</style>
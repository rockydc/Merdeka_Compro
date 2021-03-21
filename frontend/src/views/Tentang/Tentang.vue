<template>
    <div>
        <Navbar/>
       
        <Header :style="'background-color: rgba(0, 0, 0, 0.03);'" title="Tentang Merdeka Pulsa"/>
        <section class="section-merdeka">
          <div class="container-fluid">
            <b-row >
                <b-col lg="4" xl="3" class="d-flex justify-content-center align-items-center pt-4">
                    <b-img class="logo-about"  src="assets/img/about/logo-about.png"></b-img>
                </b-col>
                <b-col lg="8" xl="9">
                  <div class="container-fluid text-content">
                    <p class="mt-5"><strong style="font-weight:bold;">Merdeka!!</strong></p>
                    <p>
                      {{ $t("ABOUT_MERDEKA_FIRST_CONTENT") }}
                     <br/><br/>
                      {{ $t("ABOUT_MERDEKA_SECOND_CONTENT") }}
                      <br/><br/>
                      {{ $t("ABOUT_MERDEKA_THIRD_CONTENT") }}
                      <router-link  class=" text-decoration-none" to="/pendaftaran">
                        <strong class="underline" style="color:#CB2B2B;">                      
                          {{ $t("ABOUT_MERDEKA_JOIN_NOW") }}
                        </strong>
                      </router-link>
                    </p>
                </div>
              </b-col>
            </b-row>
          </div>
        </section>
        <div class="about-kenapa-section  container-fluid ">
              <div class="wrapper">
                <b-row>
                    <b-col lg="3"  class="kenapa-wrapper pt-4">
                        <div >
                            <p class="title mt-3">
                            {{ $t("WHY") }}
                              <br/>
                              Merdeka Pulsa
                            </p>
                            <div class="line-red"></div>
                        </div>
                    </b-col>

                    <b-col lg="3" md="6" sm="12"> 
                        <CardAbout
                        gambar='monas.png'
                        title="Berkantor di Jakarta Selatan"
                        caption="Kami dapat dijangkau dengan mudah, kunjungi kami di Mampang Jakarta Selatan. Klik Hubungi Kami untuk alamat lengkapnya. "
                        />
                    </b-col>
                      <b-col lg="3" md="6" sm="12">
                        <CardAbout
                        gambar='Gedung.png'
                        title="Perusahaan yang Legal & Terpercaya"
                        caption="PT Merdeka Digital Asia legal dengan SK Kementerian No. AHU-0043299.AH.01.01.TAHUN 2020."
                        />
                    </b-col>
                      <b-col lg="3" md="6" sm="12">
                        <CardAbout
                        gambar='bank.png'
                        title="Deposit Langsung ke Rekening Bank Perusahaan"
                        caption="Aman bertransaksi dengan kami, hanya melalui rekening atas nama Perusahaan dengan pengelolaan kontrol yang ketat."
                        />
                    </b-col>
                      <b-col lg="3" md="6" sm="12">
                        <CardAbout
                        gambar='shakehand.png'
                        title="Pendaftaran gratis dan mudah"
                        caption="Dijamin gratis, setelah mendaftar Anda dapat melakukan deposit kemudian transaksi seluruh produk yang tersedia di Merdeka Pulsa."
                        />
                    </b-col>  <b-col lg="3" md="6" sm="12">
                        <CardAbout
                        gambar='hand-coin-1x.png'
                        title="3 channel Bank deposit via MANDIRI, BRI, dan BCA"
                        caption="Deposit di Merdeka Pulsa didukung oleh 3 Bank terbesar di Indonesia, jangan lupa simpan bukti transfer Anda ya!"
                        />
                    </b-col>
                      <b-col lg="3" md="6" sm="12">
                        <CardAbout
                        gambar='coin.png'
                        title="Modal yang rendah, hanya 50.000 sudah bisa berjualan"
                        caption="Hanya dengan deposit 50.000 rupiah, Anda dapat langsung menikmati transaksi di platform Merdeka Pulsa tanpa biaya tambahan apapun."
                        />
                    </b-col>
                      <b-col lg="3" md="6" sm="12">
                        <CardAbout
                        gambar='customerservice.png'
                        title="Open Deposit setiap hari pukul 08:00 - 20:00 WIB"
                        caption="Kami melayani deposit tanpa hari libur di jam 08:00 – 20:00 WIB yang akan dibantu oleh Helpdesk terpercaya Kami."
                        />
                    </b-col>

                      <b-col lg="3" md="6" sm="12">
                        <CardAbout
                        gambar='Money.png'
                        title="Harga produk yang kompetitif"
                        caption="Kami memberikan harga kompetitif di pasaran untuk Anda jual kembali."
                        />
                    </b-col>
                      <b-col lg="3" md="6" sm="12">
                        <CardAbout
                        gambar='Jam.png'
                        title="Transaksi dapat dilakukan selama 24 Jam"
                        caption="Merdeka Pulsa open transaksi selama 24 Jam dengan produk yang lengkap tanpa biaya tambahan, raih keuntungan maksimal untuk bisnis Anda sekarang juga!"
                        />
                    </b-col>
                      <b-col lg="3" md="6" sm="12">
                        <CardAbout
                        gambar='Document.png'
                        title="Dokumentasi yang Lengkap"
                        caption="Kami menyediakan dokumentasi yang lengkap beserta sandbox untuk melakukan pengetesan & development."
                        />
                    </b-col>
                      <b-col lg="3" md="6" sm="12">
                        <CardAbout
                        gambar='Dashboard.png'
                        title="Tersedia Web Monitoring transaksi untuk Sales Partner"
                        caption="Web monitoring yang handal untuk memantau transaksi Anda, pengecekan deposit, pencatatan debit/kredit deposit, analisa transaksi harian, mencari data history transaksi yang pernah terjadi, fitur download report transaksi harian, Anda dapat memantau bisnis kapanpun dan dimanapun secara real-time."
                        />
                    </b-col>
                </b-row>
        </div>
            <b-img class="stgh-lingkaran" src="assets/img/about/stgh-lingkaran.png"></b-img>
        </div>
      
    </div>
</template>
<script>

import {Header,Navbar,CardAbout} from '../../components';

export default {
    name:"Tentang",
    components:{
       CardAbout,
        Navbar,
        Header
    }
}
</script>


<style lang="scss" scoped>
@import "@/views/Tentang/Tentang.scss";
</style>

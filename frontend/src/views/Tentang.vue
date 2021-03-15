<template>
    <div>
        <Navbar/>
       
        <Header/>
        <section class="section-merdeka">
                    <b-container >
                            <b-row>
                                <b-col class="d-flex justify-content-center align-items-center">
                                    <b-img class="logo-about"  src="assets/img/about/logo-about.png"></b-img>
                                </b-col>
                                <b-col>
                                    <b-container >
                                        <p class="mt-5"><strong>Merdeka!!</strong></p>
                                        <p>Merdeka Pulsa menyediakan produk-produk digital untuk gaya hidup merdeka. Merdeka berselancar di internet, berkomunikasi, mudah isi ulang listrik, melakukan pembayaran layanan air, kartu kredit bahkan nge game tanpa batas.<br/><br/>Kami menyediakan layanan yang mudah dan aman, mulai dari registrasi, transaksi dan layanan purna jual yang setia menemani Anda.

                <br/> <br/>Mari Merdeka bersama kami,<strong style="color:#CB2B2B;">Gabung Sekarang</strong>
                                        </p>
                                    </b-container>
                                </b-col>
                            </b-row>
                        </b-container>
        </section>
    
        <b-container class="about-kenapa-section">
        
              <b-container>
            <b-row>
                <b-col lg="3"  class="d-flex justify-content-start align-items-center">
                    <div>
                        <p class="title">Kenapa<br/>
                        Merdeka Pulsa
                        </p>
                        <div class="line-red"></div>
                    </div>
                </b-col>

                <b-col lg="3">
                    <CardAbout
                    gambar='monas.png'
                    title="Berkantor di Jakarta Selatan"
                    caption="Kami dapat dijangkau dengan mudah, kunjungi kami di Mampang Jakarta Selatan. Klik Hubungi Kami untuk alamat lengkapnya. "
                    />
                </b-col>
                  <b-col lg="3">
                    <CardAbout
                    gambar='Gedung.png'
                    title="Perusahaan yang Legal & Terpercaya"
                    caption="PT Merdeka Digital Asia legal dengan SK Kementerian No. AHU-0043299.AH.01.01.TAHUN 2020."
                    />
                </b-col>
                  <b-col lg="3">
                    <CardAbout
                    gambar='bank.png'
                    title="Deposit Langsung ke Rekening Bank Perusahaan"
                    caption="Aman bertransaksi dengan kami, hanya melalui rekening atas nama Perusahaan dengan pengelolaan kontrol yang ketat."
                    />
                </b-col>
                  <b-col lg="3">
                    <CardAbout
                    gambar='shakehand.png'
                    title="Pendaftaran gratis dan mudah"
                    caption="Dijamin gratis, setelah mendaftar Anda dapat melakukan deposit kemudian transaksi seluruh produk yang tersedia di Merdeka Pulsa."
                    />
                </b-col>  <b-col lg="3">
                    <CardAbout
                    gambar='hand-coin-1x.png'
                    title="3 channel Bank deposit via MANDIRI, BRI, dan BCA"
                    caption="Deposit di Merdeka Pulsa didukung oleh 3 Bank terbesar di Indonesia, jangan lupa simpan bukti transfer Anda ya!"
                    />
                </b-col>
                  <b-col lg="3">
                    <CardAbout
                    gambar='coin.png'
                    title="Modal yang rendah, hanya 50.000 sudah bisa berjualan"
                    caption="Hanya dengan deposit 50.000 rupiah, Anda dapat langsung menikmati transaksi di platform Merdeka Pulsa tanpa biaya tambahan apapun."
                    />
                </b-col>
                  <b-col lg="3">
                    <CardAbout
                    gambar='customerservice.png'
                    title="Open Deposit setiap hari pukul 08:00 - 20:00 WIB"
                    caption="Kami melayani deposit tanpa hari libur di jam 08:00 – 20:00 WIB yang akan dibantu oleh Helpdesk terpercaya Kami."
                    />
                </b-col>

                  <b-col lg="3">
                    <CardAbout
                    gambar='Money.png'
                    title="Harga produk yang kompetitif"
                    caption="Kami memberikan harga kompetitif di pasaran untuk Anda jual kembali."
                    />
                </b-col>
                  <b-col lg="3">
                    <CardAbout
                    gambar='Jam.png'
                    title="Transaksi dapat dilakukan selama 24 Jam"
                    caption="Merdeka Pulsa open transaksi selama 24 Jam dengan produk yang lengkap tanpa biaya tambahan, raih keuntungan maksimal untuk bisnis Anda sekarang juga!"
                    />
                </b-col>
                  <b-col lg="3">
                    <CardAbout
                    gambar='Document.png'
                    title="Dokumentasi yang Lengkap"
                    caption="Kami menyediakan dokumentasi yang lengkap beserta sandbox untuk melakukan pengetesan & development."
                    />
                </b-col>
                  <b-col lg="3">
                    <CardAbout
                    gambar='Dashboard.png'
                    title="Tersedia Web Monitoring transaksi untuk Sales Partner"
                    caption="Web monitoring yang handal untuk memantau transaksi Anda, pengecekan deposit, pencatatan debit/kredit deposit, analisa transaksi harian, mencari data history transaksi yang pernah terjadi, fitur download report transaksi harian, Anda dapat memantau bisnis kapanpun dan dimanapun secara real-time.
"
                    />
                </b-col>
            </b-row>
        </b-container>
            <b-img class="stgh-lingkaran" src="assets/img/about/stgh-lingkaran.png"></b-img>
        </b-container>
      
    </div>
</template>
<script>
import CardAbout from '../components/CardAbout.vue'
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue'

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
@import "@/assets/scss/Tentang.scss";
</style>

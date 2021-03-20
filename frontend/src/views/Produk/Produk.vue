<template>
    <div>
        

        <Navbar/>
        <Header title="Produk Merdeka Pulsa"/>

        <div class="text-center section-produk-content">
           <div class="d-inline-flex flex-column align-items-center">

               
            <h1>Produk Merdeka Pulsa</h1>
            <div class="mt-3 red-line"></div>
           </div>
           
            <div class=" d-flex justify-content-center align-items-center  ">
                <b-row class="produkWrapper">
                    <b-col class="produk-content d-flex align-items-center justify-content-center" lg="4" md="6" sm="12"> 
                                <CardProduk
                                gambar="mobile.svg"
                                caption="Pulsa prepaid seluruh operator"
                                />
                    </b-col>
                    <b-col class="produk-content d-flex align-items-center justify-content-center" lg="4" md="6" sm="12">
                                <CardProduk
                           
                                gambar="web.svg"
                                caption="Paket Data Seluruh Operator"
                                />
                    </b-col>
                    <b-col class="produk-content d-flex align-items-center justify-content-center" lg="4" md="6" sm="12">
                                <CardProduk
                                gambar="data.svg"
                                caption="Token PLN"
                                />
                    </b-col>
                    <b-col class="produk-content d-flex align-items-center justify-content-center" lg="4" md="6" sm="12">
                                <CardProduk
                                gambar="controller.png"
                                caption="Voucher Game"
                                />
                    </b-col>
                    <b-col class="produk-content d-flex align-items-center justify-content-center" lg="4" md="6" sm="12">
                                <CardProduk
                                gambar="ovo.png"
                                caption="Isi Saldo OVO"
                                />
                    </b-col>
                    <b-col class="produk-content d-flex align-items-center justify-content-center" lg="4" md="6" sm="12">
                                <CardProduk
                                gambar="gopay.png"
                                caption="Isi Saldo Go-Pay"
                                />
                    </b-col>

                    
                </b-row>
            </div>
        </div>
        <section class="section-operator text-center">

            <div class="d-inline-flex flex-column align-items-center">
                     <h1>Operator & Penyedia Layanan</h1>
                      <div class="mt-3 red-line"></div>
            </div>
         
         <div class=" operator-container">
           <div class="operator-wrapper">
                
                <b-img  width="183" height="57" src="assets/img/produk/telkomsel.svg"></b-img>
                <b-img src="assets/img/produk/xl.svg"></b-img>
                <b-img src="assets/img/produk/indosat-logo.svg"></b-img>
                <b-img src="assets/img/produk/3-logo.svg"></b-img>
                <b-img src="assets/img/produk/smartfrend.svg"></b-img>
                <b-img src="assets/img/produk/axis.svg"></b-img>
                <b-img src="assets/img/produk/ovo.svg"></b-img>
                <b-img src="assets/img/produk/gopay.svg"></b-img>
                <b-img src="assets/img/produk/pubg.svg"></b-img>

           
             
                
            </div>

         </div>
 

            <b-img class="elipse" src="assets/img/produk/elipse.png">

            </b-img>
        </section>
    </div>

</template>
<script>

import {Navbar,Header,CardProduk} from '../../components';

export default {
    name:'Produk',
    components:{
        Navbar,
        Header,
        CardProduk
    }
}
</script>
<style lang="scss" scoped>
@import '@/views/Produk/Produk.scss';
</style>
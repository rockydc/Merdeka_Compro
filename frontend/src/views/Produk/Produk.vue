<template>
    <div>
        

        <Navbar/>
        <Header :title="$t('product.title')"/>

        <div class=" text-center section-produk-content">
           <div class="d-inline-flex flex-column align-items-center">

               
            <h1>{{$t('product.ourProduct')}}</h1>
            <div class="mt-3 red-line"></div>
           </div>
           
            <div class=" d-flex justify-content-center align-items-center  ">
                <b-row class="produkWrapper">
                    <b-col v-for="produk in ProdukList" v-bind:key="produk.id" class="produk-content d-flex align-items-center justify-content-center" lg="4" md="6" sm="12"> 
                                <CardProduk
                                :gambar="produk.gambar"
                                :caption="produk.caption"
                                />
                    </b-col>
                    
                </b-row>
            </div>
        </div>
        <section class="section-operator text-center">

            <div class="d-inline-flex flex-column align-items-center">
                     <h1>{{$t('product.service')}}</h1>
                      <div class="mt-3 red-line"></div>
            </div>
         
         <div class=" operator-container">
           <div class="operator-wrapper">
                <div v-for="operator in OperatorList" v-bind:key="operator.id" class="operator-content">
                    <b-img  :src="'assets/img/produk/logo/hires/'+operator.gambar" :alt="operator.gambar"></b-img>
                </div>
           
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
    },
    data:()=>{
        return{
            ProdukList:[
                {
                    id:1,
                    gambar:'mobile.svg',
                    caption:'product.prepaidPulsa'
                },
                {
                    id:2,
                    gambar:'web.svg',
                    caption:'product.dataPackage'

                },
                {
                    id:3,
                    gambar:'data.svg',
                    caption:'product.token'

                },
                {
                    id:4,
                    gambar:'controller.svg',
                    caption:'product.gamesVoucher'

                },
                {
                    id:5,
                    gambar:'ovo-logo.png',
                    caption:'product.ovo'

                },
                {
                    id:6,
                    gambar:"gopay-logo.png",
                    caption:'product.goPay'

                }
            ],
            OperatorList:[
                {
                    id:1,
                    gambar:'telkomsel.png'
                },
                {
                    id:2,
                    gambar:'xl-logo.png'
                },{
                    id:3,
                    gambar:'indosat-logo.png'
                },{
                    id:4,
                    gambar:'3-logo.png'
                },{
                    id:5,
                    gambar:'smartfren.png'
                },{
                    id:6,
                    gambar:'axis-logo.png'
                },{
                    id:7,
                    gambar:'ovo-logo.png'
                },{
                    id:8,
                    gambar:'gopay-logo.png'
                },{
                    id:9,
                    gambar:'pubg-logo.png'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/views/Produk/Produk.scss';
</style>
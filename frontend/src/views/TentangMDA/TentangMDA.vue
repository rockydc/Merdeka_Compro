<template>
    <div>
        <Navbar/>
       
        <Header title="Tentang MDA"/>

        <section class="section-tujuan">
         <b-container>
             <b-row>
                 <b-col lg="7" md="6" sm="12">
                     <h1>Tujuan Kami</h1>
                     <p>Perusahaan bertujuan untuk menjadi rekan yang
                    terpercaya dalam setiap kesepakatan bisnis; dan
                    menempatkan pengalaman pelanggan kami sebagai
                    prioritas yang paling tinggi.

                    </p>
                    <p>
                        Kami berkolaborasi, bantu membantu, dengan
                    komunitas besar untu menciptakan lingkungan
                    yang berkelanjutan, mempercepat penerapan
                    inisiatif digital.
                    </p>
                 </b-col>
                 <b-col lg="5" md="6" sm="12">
                     <b-img class="img-goals" fluid src="assets/img/photo-tentangmp.png">
                     </b-img>
                 </b-col>
             </b-row>
         </b-container>
        </section>
        <section class="section-value">
            <h1 class="text-center">Nilai - Nilai Kami</h1>
            <div class="card-content-wrapper mt-5">
                <div v-for="value in ValueList" v-bind:key="value.id" class="card-content">
                       <b-img :src="'assets/img/'+value.gambar" :alt="value.gambar"></b-img>
                       <div class="text-content">
                           <p class="title">
                               {{value.title}}
                           </p>
                           <p class="caption">
                               {{value.caption}}
                           </p>
                       </div>
                   </div>
            </div>
         

         </section>
    </div>
</template>
<script>



import {Navbar,Header} from '../../components'
export default {
    name:'TentangMP',
    components:{
        Navbar,
        Header
    },
    data:()=>{
        return{
            ValueList:[
                {
                id:1,
                gambar:"protect-ic.svg",
                title:'Integritas',
                caption:'Integritas kami menjadi utama dalam menjalankan bisnis'
                },{
                id:2,
                gambar:'heart-ic.svg',
                title:'Komitmen',
                caption:'Kami berkomitmen untuk menyampaikan hasil yang terbaik'
                },
                {
                    id:3,
                    gambar:'math-ic.svg',
                    title:'Sikap Positif',
                    caption:'Kami menebarkan suasana positif pada lingkungan kami'

                },
                {
                    id:4,
                    gambar:'user-group-ic.svg',
                    title:'Fokus Pada Pelanggan',
                    caption:'Kami mengharapkan kepuasan pelanggan dan masukan dari pelanggan'
                },{
                    id:5,
                    gambar:'brain-ic.svg',
                    title:'Kreatif dan Berpikiran Terbuka',
                    caption:'Menemukan cara – cara kreatif dalam menjalankan pekerjaan dan berpikiran terbuka untuk segala kemungkinan'
                },{
                    id:6,
                    gambar:'promise-ic.svg',
                    title:'Terpercaya',
                    caption:'Menjadi individu yang terpercaya bagi lingkungan sekitar'
                }
            ]
        }
    },
    mounted (){
        window.scrollTo(0,0);
    }
}
</script>
<style lang="scss" scoped>
@import 'tentangmda.scss';
</style>

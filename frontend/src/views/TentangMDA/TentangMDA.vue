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
                <div class="card-content">
                       <b-img src="assets/img/protect-ic.svg"></b-img>
                       <div class="text-content">
                           <p class="title">
                               Integritas
                           </p>
                           <p class="caption">
                                Integritas kami menjadi utama dalam menjalankan
                                bisnis

                           </p>
                       </div>
                   </div>
                      <div class="card-content">
                       <b-img src="assets/img/heart-ic.svg"></b-img>
                       <div class="text-content">
                           <p class="title">
                               Komitmen
                           </p>
                           <p class="caption">
                                Kami berkomitmen untuk menyampaikan hasil yang terbaik

                           </p>
                       </div>
                   </div>
                  <div class=" card-content">
                       <b-img src="assets/img/math-ic.svg"></b-img>
                       <div class="text-content">
                           <p class="title">
                               Sikap Positif
                           </p>
                           <p class="caption">
                               Kami menebarkan suasana positif pada lingkungan kami

                           </p>
                       </div>
                   </div>
                 <div class=" card-content">
                       <b-img src="assets/img/user-group-ic.svg"></b-img>
                       <div class="text-content">
                           <p class="title">
                               Fokus Pada Pelanggan
                           </p>
                           <p class="caption">
                        
                            Kami mengharapkan kepuasan pelanggan dan
                            masukan dari pelanggan


                           </p>
                       </div>
                   </div>
                 <div class=" card-content">
                       <b-img src="assets/img/brain-ic.svg"></b-img>
                       <div  class="text-content">
                           <p class="title">
                             Kreatif dan Berpikiran Terbuka
                           </p>
                           <p class="caption">
                           Menemukan cara – cara kreatif dalam menjalankan
                            pekerjaan dan berpikiran terbuka untuk segala
                            kemungkinan


                           </p>
                       </div>
                   </div>
                  <div class=" card-content">
                       <b-img src="assets/img/promise-ic.svg"></b-img>
                       <div class="text-content">
                           <p class="title">
                              Terpercaya
                           </p>
                           <p class="caption">
                                                        
                                Menjadi individu yang terpercaya bagi lingkungan
                                sekitar

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
    mounted (){
        window.scrollTo(0,0);
    }
}
</script>
<style lang="scss" scoped>
@import 'tentangmda.scss';
</style>

<template>
    <div>
        <Navbar/>
       
        <Header/>

        <section class="section-tujuan">
         <b-container>
             <b-row>
                 <b-col lg="6" md="6" sm="12">
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
                 <b-col lg="6" md="6" sm="12">
                     <b-img fluid src="assets/img/photo-tentangmp.png">

                     </b-img>

                 </b-col>
             </b-row>
         </b-container>
        </section>
                 <b-container class="section-value">
             <h1 class="text-center">Nilai - Nilai Kami</h1>

             <b-row class="mt-1">
                 <b-col class="mt-5" lg="6" md="12" sm="12">
                   <div class="d-flex justify-content-center align-items-center card-content">
                       <b-img src="assets/img/protect-ic.svg"></b-img>
                       <div class="ml-5 pt-4">
                           <p class="title">
                               Integritas
                           </p>
                           <p class="caption">
                                Integritas kami menjadi utama dalam menjalankan
                                bisnis

                           </p>
                       </div>
                   </div>
                 </b-col>
                 <b-col class="mt-5" lg="6" md="12" sm="12">
                   <div class="d-flex justify-content-center align-items-center card-content">
                       <b-img src="assets/img/heart-ic.svg"></b-img>
                       <div class="ml-5 pt-4">
                           <p class="title">
                               Komitmen
                           </p>
                           <p class="caption">
                                Kami berkomitmen untuk menyampaikan hasil yang terbaik

                           </p>
                       </div>
                   </div>
                 </b-col>
                 <b-col class="mt-5" lg="6" md="12" sm="12">
                   <div class="d-flex justify-content-center align-items-center card-content">
                       <b-img src="assets/img/math-ic.svg"></b-img>
                       <div class="ml-5 pt-4">
                           <p class="title">
                               Sikap Positif
                           </p>
                           <p class="caption">
                               Kami menebarkan suasana positif pada lingkungan kami

                           </p>
                       </div>
                   </div>
                 </b-col>
                 <b-col class="mt-5" lg="6" md="12" sm="12">
                   <div class="d-flex justify-content-center align-items-center card-content">
                       <b-img src="assets/img/user-group-ic.svg"></b-img>
                       <div class="ml-5 pt-4">
                           <p class="title">
                               Fokus Pada Pelanggan
                           </p>
                           <p class="caption">
                        
                            Kami mengharapkan kepuasan pelanggan dan
                            masukan dari pelanggan


                           </p>
                       </div>
                   </div>
                 </b-col>
                 <b-col class="mt-5" lg="6" md="12" sm="12">
                   <div class="d-flex justify-content-center align-items-center card-content">
                       <b-img src="assets/img/brain-ic.svg"></b-img>
                       <div class="ml-5 pt-4">
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
                 </b-col>
                 <b-col class="mt-5" lg="6" md="12" sm="12">
                   <div class="d-flex justify-content-center align-items-center card-content">
                       <b-img src="assets/img/promise-ic.svg"></b-img>
                       <div class="ml-5 pt-4">
                           <p class="title">
                              Terpercaya
                           </p>
                           <p class="caption">
                                                        
                                Menjadi individu yang terpercaya bagi lingkungan
                                sekitar

                           </p>
                       </div>
                   </div>
                 </b-col>


             </b-row>

         </b-container>
    </div>
</template>
<script>



import {Navbar,Header} from '../../components'
export default {
    name:'TentangMP',
    components:{
        Navbar,
        Header
    }
}
</script>
<style lang="scss" scoped>

$bp-sm:600px;
$bp-md:768px;
$bp-L:992px;
$bp-XL:1200px;

@mixin mobile{
    @media (min-width:0) and (max-width:#{$bp-sm})
    {
        @content;
    }
}

@mixin tablet {
    @media (min-width:$bp-sm+1px) and (max-width:#{$bp-md})
    {
        @content;
    }
}
@mixin dekstop {
    @media (min-width:$bp-md+1px) and(max-width:#{$bp-L}){
        @content;
    }
        
}
@mixin superdesktop {
    @media(min-width:$bp-L+1px) and(max-width:#{$bp-XL}){
        @content;
    }
}
@mixin extra{
    @media(min-width:$bp-XL+245){
        @content;
    }
}

*{
    font-family: poppins,sans-serif;
}
.section-tujuan{
    margin-top:-100px;
    background: rgba(0, 0, 0, 0.03);
    padding-top:260px;
    border-radius: 0px 0px 208px 0px;
    padding-bottom:94px;

}
.section-value{
    padding-top:129px;
    padding-bottom:150px;
    .card-content{
        padding:20px 40px;
        background: #FFFFFF;
        border: 1px solid #F3F3F3;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(180, 180, 180, 0.25);
        border-radius: 10px;
        min-height: 194px;
        .title{
            font-weight: 700;

        }

        caption{
            font-weight: 400;
            font-size:14px;
        }
    }
}

@include mobile{
  h1{
            font-size:32px;
        }
    .section-tujuan{
    
        padding-top:120px;
        text-align: center;
    }
    .section-value{
      
        .card-content{
            min-height: 218px;
            padding:20px 20px;
            .caption{
                font-size:12px;
            }
        }
    }
}

@include tablet{
    .section-tujuan{
        padding-top:150px;
    }
    .section-value{
        padding-top:90px;
    }
}
</style>

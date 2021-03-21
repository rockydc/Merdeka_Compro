<template>
    <div>
        <Navbar/>
       
        <Header :title="$t('aboutMDA.title')"/>

        <section class="section-tujuan">
         <b-container>
             <b-row>
                 <b-col lg="7" md="6" sm="12">
                     <h1>{{$t('aboutMDA.purpose.title')}} </h1>
                     <p>
                        {{$t('aboutMDA.purpose.firstParagraph')}}
                    </p>
                    <p>
                        {{$t('aboutMDA.purpose.secondParagraph')}}                        
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
            <h1 class="text-center">{{$t('aboutMDA.values.title')}} </h1>
            <div class="card-content-wrapper mt-5">
                <div v-for="value in ValueList" v-bind:key="value.id" class="card-content">
                       <b-img :src="'assets/img/'+value.gambar" :alt="value.gambar"></b-img>
                       <div class="text-content">
                           <p class="title">
                               {{$t(value.title)}}
                           </p>
                           <p class="caption">
                               {{$t(value.caption)}}
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
                    title:'aboutMDA.values.content.integrity.title',
                    caption: "aboutMDA.values.content.integrity.value"
                },
                {
                    id:2,
                    gambar:'heart-ic.svg',
                    title:'aboutMDA.values.content.commit.title',
                    caption: "aboutMDA.values.content.commit.value"
                },
                {
                    id:3,
                    gambar:'math-ic.svg',
                    title:'aboutMDA.values.content.positive.title',
                    caption: "aboutMDA.values.content.positive.value"

                },
                {
                    id:4,
                    gambar:'user-group-ic.svg',
                    title:'aboutMDA.values.content.care.title',
                    caption: "aboutMDA.values.content.care.value"
                },{
                    id:5,
                    gambar:'brain-ic.svg',
                    title:'aboutMDA.values.content.creative.title',
                    caption: "aboutMDA.values.content.creative.value"
                },{
                    id:6,
                    gambar:'promise-ic.svg',
                    title:'aboutMDA.values.content.trustWorthy.title',
                    caption: "aboutMDA.values.content.trustWorthy.value"
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

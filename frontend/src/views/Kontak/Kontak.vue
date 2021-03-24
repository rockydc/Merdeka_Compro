<template>
    
    <div>
        <Navbar/>
        <Header :title="$t('contactUs.title')"/>
    <!-- Start Section Kontak -->
        <div class="section-kontak">

            <b-container class="container-fluid-xl">
                <b-row>
                    <b-col lg="4" md="12" sm="12">

                        <!-- Maps -->
                        <div class="map-wrapper mt-5">
                         <div class="mapouter"><div class="gmap_canvas"><iframe width="100%"  id="gmap_canvas" src="https://maps.google.com/maps?q=Sarana%20Building&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://yggtorrent-fr.com"></a><br><a href="https://google-map-generator.com"></a></div></div>   
                         <div class="mt-2 px-4">
                             <p class="m-0" style="font-size:12px;"><strong>Sarana Building</strong></p>
                             <div class="map-card">
                                <b-img src="assets/img/kontak/star-ic.svg"></b-img>
                                <span class="ml-2" style="font-family:poppins; font-size:11px;">Corporate office - Jl. Mampang Prpt. Raya No.26, RT.2/RW.1</span>
                             </div>
                         </div>
                        </div>

                        <!-- end Maps -->
                    </b-col>
                    <b-col lg="8" md="12" sm="12">
                        <b-row>
                            <b-col lg="6">
                                <!-- Location -->
                            <div class="content-wrapper px-4 mt-5">
                                <b-img class="icon" src="assets/img/kontak/location-ic.svg"></b-img>
                                <p class="title mt-4">
                                    PT Merdeka Digital Asia
                                </p>
                                <p class="caption">{{$t('contactUs.address')}}</p>
                            </div>
                            <!-- end Location -->
                            </b-col>
                                <b-col lg="6">
                                    <!-- call help desk -->
                                <div class="content-wrapper px-4 mt-5">
                                    <b-img class="icon" src="assets/img/kontak/phone-ic.svg"></b-img>
                                    <p class="title mt-4">
                                        Call center Helpdesk:
                                    </p>
                                    <p class="caption">
                                        021-29517763<br/>
                                        0821 2409 2309 (Telkomsel)<br/>
                                        0859 2077 3307 (XL)
                                    </p>
                                </div>
                                 <!-- end help desk -->
                            </b-col>
                            <b-col lg="6" md="12" sm="12"> 
                                <div class=" content-wrapper-sosmed px-4 mt-5">
                                    <!-- Instagram -->
                                    <div class="icon-wrapper ">
                                        <b-img class="icon" src="assets/img/kontak/ig-ic.svg"></b-img>
                                        <div class="ml-3 text-caption">
                                            <p>
                                            <strong style="color:#CC2C90;"> Instagram Helpdesk :</strong> 
                                                <br/>
                                                @merdekacs
                                        
                                            </p>
                                        
                                        </div>
            
                                    </div>
                                    <!-- end Instagram -->

                                    <!-- Twitter -->
                                    <div class="icon-wrapper  ml-lg-0 ml-md-0 mt-lg-3 ">
                                        
                                         <b-img class="icon" src="assets/img/kontak/twitter-ic.svg"></b-img>
                                        <div class="ml-3 text-caption">
                                            <p>
                                            <strong style="color:#55ADEE;"> Twitter Helpdesk : </strong>
                                                <br/>
                                                @merdekacs<br/>  <em style="color:white;">test</em>
                                        
                                            </p>
                                    
                                        </div>   
                                    </div>
                                    <!-- end Twitter -->
                                
                                </div>
                            </b-col>
                            <b-col lg="6" md="12" sm="12">
                                <div class="content-wrapper-sosmed px-4 mt-5 ">
                                    <!-- Telegram -->
                                    <div class="icon-wrapper  ">
                                        <b-img class="icon" src="assets/img/kontak/telegram-ic.svg"></b-img>
                                        <div class="ml-3 text-caption">
                                            <p>
                                            <strong style="color:#40B3E0;"> Telegram Helpdesk :</strong> 
                                                <br/>
                                                @merdekacs
                                        
                                            </p>
                                        
                                        </div>
            
                                    </div>
                                    <!-- end Telegram -->

                                    <!-- Whatsapp -->
                                    <div class="icon-wrapper  ml-lg-0 ml-md-0 mt-lg-3 ">
                                            <b-img class="icon" src="assets/img/kontak/wa-ic.svg"></b-img>
                                        <div class="ml-3 text-caption">
                                            <p>
                                            <strong style="color: #00E676;"> Whatsapp Helpdesk : </strong>
                                                <br/>
                                            0821 2409 2309 (Telkomsel)<br/>
                                            0859 2077 3307 (XL)
                                        
                                            </p>
                                    
                                        </div>   
                                    </div>
                                    <!-- end Whatsapp -->
                                
                                </div>
                            </b-col>
                        
                        </b-row>
                    </b-col>

                </b-row>
            </b-container>


        </div>
           <!-- end Section Kontak -->
            <section class="section-ask-form">
                <b-container>
                    <h1>
                        {{$t('contactUs.formTitle')}}
                    </h1>
                    <div class="form-wrapper">
                    
                    <!-- form -->
                    <b-form class="mt-5" method="post" action="#">
                       
                       <b-form-group>

                         <b-row class="m-0 p-0 d-flex justify-content-space-between">
                           <b-col class="m-0 p-0 border-red" lg="7" md="12" sm="12">
                                <b-form-input 
                                class="form-control mt-4" 
                                :placeholder="$t('contactUs.placeholders.name')"
                                v-model="question_data.name"
                                >
                                </b-form-input>
                           </b-col>
                           <b-col 
                           class="m-0 p-0 border-red" 
                           lg="5" 
                           md="12" 
                           sm="12">
                            <b-form-input 
                            class="form-control form-email mt-4 ml-lg-2 ml-sm-0" 
                            :placeholder="$t('contactUs.placeholders.email')"
                            v-model="question_data.subject">
                                </b-form-input>
                           </b-col>
                       </b-row>
                       </b-form-group>
                        <b-form-input 
                        class="form-control mt-4"
                        :placeholder="$t('contactUs.placeholders.subject')"
                        v-model="question_data.email"
                        >
                        </b-form-input>
                        <b-form-textarea 
                        class="mt-4" 
                        v-model="question_data.question"
                        :placeholder="$t('contactUs.placeholders.message')"
                         rows="5"
                        >

                        </b-form-textarea>
                        <b-button class="btn-send w-100 mt-4"
                        v-on:click="onSubmit(question_data)"
                        >{{$t('contactUs.sent')}} </b-button>
                    </b-form>
                    <!-- end form -->
                    </div>
                  
                </b-container>
            </section>
    </div>
</template>
<script>



import {Navbar,Header} from '../../components'
import {useSubmit} from './services/Kontak.hooks'

export default {
    name:'Kontak',
    components:{
        Navbar,
        Header
    },
    data:()=>({
        question_data:{
            name:"",
            subject:"",
            email:"",
            question:""

        },
    }),
    methods:{
  
        onSubmit:(data)=>{
            useSubmit(data)
        
       
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/views/Kontak/Kontak.scss';
</style>

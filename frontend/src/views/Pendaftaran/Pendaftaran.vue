<template>
    <div>
  

           <Navbar isBrand/>
        <Header :title="$t('registration.title')" />
        <b-container class="section-pendaftaran-wrapper">
            <b-row>
                <b-col class="mb-5 right-wrapper" lg="7" md="12" sm="12" >
                    <div class="right-content-wrapper ">
                                  <b-img class="img-register" fluid src="assets/img/bg-register.png">

                    </b-img>
                    </div>
              
                </b-col>
                <b-col lg="5" md="12" sm="12">
                    <div class="text-center">
                         <p>{{$t("registration.placeholders.title")}}</p>
                    </div>
                   
                    <div class="form-wrapper">
                        <b-form id="form-pendaftaran" method="post" action="#">
                            <b-form-input
                            class="form-control"
                            name="nama-perusahaan"
                            v-model="registration_data.company_name"
                            :placeholder="$t('registration.placeholders.companyName')">
                            </b-form-input>
                            <b-form-input
                            class="form-control"
                            name="pic-name"
                            v-model="registration_data.pic_name"
                            :placeholder="$t('registration.placeholders.contactName')">
                            </b-form-input>
                            <b-form-input
                            class="form-control"
                            name="pic-phone"
                            v-model="registration_data.pic_phone"
                            :placeholder="$t('registration.placeholders.mobilePhone')">
                            </b-form-input>
                            <b-form-input
                            class="form-control"
                            name="company-email"
                            v-model="registration_data.company_email"
                            type="email"
                            :placeholder="$t('registration.placeholders.companyEmail')">
                            </b-form-input>
                            <b-form-input
                            class="form-control"
                            name="company-phone"
                            v-model="registration_data.company_phone"
                            :placeholder="$t('registration.placeholders.companyPhone')">
                            </b-form-input>
                            <b-form-input
                            class="form-control"
                            name="company-address"
                            v-model="registration_data.company_address"
                            :placeholder="$t('registration.placeholders.companyFullAddress')">
                            </b-form-input>
                            <b-input-group>
                                <b-form-input
                                class="form-control"
                                name="company_province"
                                v-model="registration_data.company_province"
                                :placeholder="$t('registration.placeholders.province')">
                                </b-form-input>
                                <b-form-input
                                class="form-control border-left"
                                name="company_city"
                                v-model="registration_data.company_city"
                                :placeholder="$t('registration.placeholders.city')">
                                </b-form-input>
                            </b-input-group>
                        </b-form>
                    </div>
                      <b-button v-b-modal.modal-center v-on:click="onSubmit(registration_data)" variant="danger" class="btn-daftar mt-4" form="form-pendaftaran">{{ $t("registerNow") }}</b-button>

                                <b-modal id="modal-center" class="" hide-footer hide-header centered title="BootstrapVue" >
                                        <template #default="{ hide }">
                                <b-container class="d-flex align-items-center flex-column py-4">
                                    <b-img width="237" height="166" fluid src="assets/img/bg-modal.png">

                                    </b-img>
                                    <p class="text-center mt-4">
                                        {{$t("registration.modalAfterRegistration")}}
                                    </p>
                                    <b-btn class="btn-daftar mt-2  " variant="danger" @click="hide()">OK</b-btn>
                                </b-container>
                                  </template>
                            </b-modal>
                      <div class="note-wrapper">
                          <b-img class="img-cs " src="assets/img/ic-customerservice.png"></b-img>
                            <div class="text-wrapper d-flex justify-content-center align-items-center mt-2">
                                <p class="text-information" v-html="$t('registration.registrationInformation')">
                              
                              
                          </p>
                            </div>
                          
                      </div>
                </b-col>
            </b-row>
        </b-container>
  
           
    </div>
</template>
<script>
import{Navbar,Header} from '../../components';
import {useSubmit} from './services/Pendaftaran.hooks'

export default {
    name:'Pendaftaran',
    components:{
        Navbar,
        Header
    },
    data() {
        return {
            registration_data: {
                company_name : "",
                pic_name : "",
                pic_phone : "",
                company_email : "",
                company_phone: "",
                company_province: "",
                company_address: "",
                company_city : ""
            }
        }
    },
    methods:{
        onSubmit(data) {
            useSubmit(data)
        }
    }
}

</script>
<style lang="scss" scoped>
@import 'pendaftaran.scss';
</style>
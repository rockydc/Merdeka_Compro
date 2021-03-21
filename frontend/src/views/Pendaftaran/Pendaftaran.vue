<template>
    <div>
  

        <Navbar/>
        <Header title="Pendaftaran" />
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
                            :placeholder="$t('registration.placeholders.companyName')">
                            </b-form-input>
                            <b-form-input
                            class="form-control"
                            name="nama-perusahaan"
                            :placeholder="$t('registration.placeholders.contactName')">
                            </b-form-input>
                            <b-form-input
                            class="form-control"
                            name="nama-perusahaan"
                            :placeholder="$t('registration.placeholders.mobilePhone')">
                            </b-form-input>
                            <b-form-input
                            class="form-control"
                            name="nama-perusahaan"
                            type="email"
                            :placeholder="$t('registration.placeholders.companyEmail')">
                            </b-form-input>
                            <b-form-input
                            class="form-control"
                            name="nama-perusahaan"
                            :placeholder="$t('registration.placeholders.companyPhone')">
                            </b-form-input>
                            <b-form-input
                            class="form-control"
                            name="nama-perusahaan"
                            :placeholder="$t('registration.placeholders.companyFullAddress')">
                            </b-form-input>
                            <b-input-group>
                                <b-form-input
                                class="form-control"
                                name="nama-perusahaan"
                                :placeholder="$t('registration.placeholders.province')">
                                </b-form-input>
                                <b-form-input
                                class="form-control border-left"
                                name="nama-perusahaan"
                                :placeholder="$t('registration.placeholders.city')">
                                </b-form-input>
                            </b-input-group>
                        </b-form>
                    </div>
                      <b-button v-b-modal.modal-center  variant="danger" class="btn-daftar mt-4" form="form-pendaftaran">{{ $t("registerNow") }}</b-button>

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
                            <div class="ml-5  d-flex justify-content-center align-items-center mt-2">
                                <p >
                              {{$t("registration.registrationInformation")}}
                              <strong class="telegram">021-2951 7763</strong>
                                {{$t('or')}} Telegram {{$t('at')}} <strong class="telegram" >@merdekacs</strong>
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
export default {
    name:'Pendaftaran',
    components:{
        Navbar,
        Header
    }
}
</script>
<style lang="scss" scoped>
@import 'pendaftaran.scss';
</style>
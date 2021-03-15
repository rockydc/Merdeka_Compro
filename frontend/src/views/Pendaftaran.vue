<template>
    <div>
        <Navbar/>
        <Header/>
        <b-container class="section-pendaftaran-wrapper">
            <b-row>
                <b-col class="mb-5" lg="6" md="12" sm="12">
                    <b-img fluid-grow src="assets/img/bg-register.png">

                    </b-img>
                </b-col>
                <b-col lg="6" md="12" sm="12">
                    <div class="text-center">
                         <p>Yuk isi form dibawah ini untuk Bergabung ke Merdeka Pulsa</p>
                    </div>
                   
                    <div class="form-wrapper">
                        <b-form id="form-pendaftaran" method="post" action="#">
                         <b-form-input
                         class="form-control"
                         name="nama-perusahaan"
                         placeholder="Nama Perusahaan">
                         </b-form-input>
                        <b-form-input
                        class="form-control"
                         name="nama-perusahaan"
                         placeholder="Nama PIC">
                         </b-form-input>
                        <b-form-input
                        class="form-control"
                         name="nama-perusahaan"
                         placeholder="Nomor Handphone PIC(Untuk verifikasi Data)">
                         </b-form-input>
                        <b-form-input
                        class="form-control"
                         name="nama-perusahaan"
                         type="email"
                         placeholder="Email Perusahaan">
                         </b-form-input>
                        <b-form-input
                        class="form-control"
                         name="nama-perusahaan"
                         placeholder="No Telpon Perusahaan">
                         </b-form-input>
                        <b-form-input
                        class="form-control"
                         name="nama-perusahaan"
                         placeholder="Alamat Lengkap Perusahaan">
                         </b-form-input>

                         <b-input-group>
                                                     <b-form-input
                                                     class="form-control"
                         name="nama-perusahaan"
                         placeholder="Provinsi">
                         </b-form-input>
                        <b-form-input
                        
                        class="form-control border-left"
                         name="nama-perusahaan"
                         placeholder="Kota">
                         </b-form-input>
                         </b-input-group>

                      
                        </b-form>
                    </div>
                      <b-button class="btn-daftar mt-5" form="form-pendaftaran">Daftar Sekarang</b-button>

                      <div class="note-wrapper">
                          <b-img fluid src="assets/img/ic-customerservice.png"></b-img>
                            <div class="ml-3 d-flex justify-content-center align-items-center">
                                <p style="font-size:12px;">
                              Untuk informasi lebih lengkap hubungi <strong style="font-size:15px;">021-2951 7763</strong>
                                <br/>atau Telegram ke <strong style="font-size:15px;color:#C52D2E;">@merdekacs</strong>
                          </p>
                            </div>
                          
                      </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>

import Navbar from '../components/Navbar.vue';
import Header from '../components/Header.vue';
export default {
    name:'Pendaftaran',
    components:{
        Navbar,
        Header
    }
}
</script>
<style lang="scss" scoped>

.section-pendaftaran-wrapper{
    padding-top:100px;
    padding-bottom:134px;
    p{
        font-family: poppins,sans-serif;
        font-weight: 500;
    }

    .form-wrapper{
        margin-top:31px;
        
        box-sizing: border-box;
        border-radius: 10px 10px 0px 0px;
        -webkit-box-shadow: -2px 4px 38px -20px rgba(0,0,0,0.6);
        -moz-box-shadow: -2px 4px 38px -20px rgba(0,0,0,0.6);
        box-shadow: -2px 4px 38px -20px rgba(0,0,0,0.6);

        form{
            background-color: rgba(255,255,255,0.5);
        }
        .form-control{
            border-color: #D8D8D8;
            border-left:none;
            border-right: none;
            padding:20px 25px 20px 25px;


        }
        .form-control::placeholder{
            color:#B0B0B0;
        }
       
      

    }
      .btn-daftar{
            background-color:#C52D2E ;
            width: 100%;
        }

        .note-wrapper{
            padding:16px 22px 16px 23px;
            margin-top:31px;
            display:flex;
            background: #FFFFFF;
            border: 1px solid #ECECEC;
            box-sizing: border-box;
            box-shadow: 0px 13px 20px rgba(0, 0, 0, 0.04);
            border-radius: 10px;
            p{
                color:#5C5C5C;
            }

        }
}

</style>
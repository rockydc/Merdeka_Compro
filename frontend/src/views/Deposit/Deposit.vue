<template>
    <div>
        <Navbar/>
        <Header title="Deposit"/>

        <b-container class="section-donation">
            <p>Menerima deposit dari 3 channel Bank yaitu MANDIRI, BCA, dan BRI.</p>
            <p>Jangan lupa untuk simpan bukti transfer Anda, hubungi Telegram 
                
            <strong style="color: #C52D2E;">@merdekacs</strong> untuk bantuan.</p>
            <div class="bank-wrapper">

            <div class="bank-account">
                  <b-img :style="'margin-bottom:21px;margin-top:-10px;'" class="img-logo" src="assets/img/mandiri.svg"></b-img>
                    <p>15700000000 - PT Merdeka Digital Asia</p>
            </div>

            <div class="bank-account">
                   <b-img class="img-logo" src="assets/img/BCA.svg"></b-img>
                    <p>187-036- 0000- PT Merdeka Digital Asia</p>
            </div>

            <div class="bank-account">
                 <b-img class="img-logo" src="assets/img/BRI.svg"></b-img>
                    <p>032- 081-0920-0827 - PT Merdeka Digital Asia</p>
            </div>

            </div>
        </b-container>
    </div>
</template>
<script>

import {Navbar,Header} from '../../components'
export default {
    name:'Deposit',
    components:{
        Navbar,
        Header
    }
}
</script>

<style lang="scss" scoped>
@import '@/views/Deposit/deposit.scss'
</style>
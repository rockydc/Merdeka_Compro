<template>
    <div>
        <Navbar/>
        <Header :title="$t('deposit.title')"/>

        <b-container class="section-donation">
            <p>{{$t('deposit.banks')}}</p>
            <p>{{$t('deposit.notes')}}
            <strong style="color: #C52D2E;">@merdekacs</strong> {{$t('deposit.forAssistance')}}</p>
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
                 <b-img class="img-logo" src="assets/img/BNI-Logo.png"></b-img>
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
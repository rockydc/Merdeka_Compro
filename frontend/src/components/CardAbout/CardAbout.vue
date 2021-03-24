<template>
    <div class="CardAbout">
        <div class="img-wrapper">
            <b-img :src="'assets/img/abouts/' + gambar"></b-img>
        </div>
       
        <p class="title">{{$t(title)}}</p>
        <p class="caption" v-html="$t(caption)"></p>
    </div>
</template>
<script>
export default {
    name:'CardAbout',
    props:{
        gambar:String,
        title:String,
        caption:String
    }
}
</script>

<style lang="scss" scoped>
@import 'CardAbout.scss';
</style>
<template>
    <div class="CardAbout">
        <b-img :src="'assets/img/about/' + gambar"></b-img>
        <p class="title">{{title}}</p>
        <p class="caption">{{caption}}</p>
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
@import '@/assets/scss/CardAbout.scss';
</style>
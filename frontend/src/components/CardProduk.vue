<template>
    <div class="CardProduk">
        <b-img :src="'assets/img/produk/' + gambar"></b-img>
        <p class="title">{{title}}</p>
        <p class="caption">{{caption}}</p>
    </div>
</template>
<script>
export default {
    name:'CardProduk',
    props:{
        gambar:String,
        title:String,
        caption:String
    }
}
</script>

<style lang="scss" scoped>
.CardProduk{
    img{
        width:80px;
        max-height: 110px;
      
    }
    .caption{
        font-family: poppins,sans-serif;
        font-weight: 500;
    }
}
</style>
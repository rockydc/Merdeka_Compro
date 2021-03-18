<template>
    <div class="CardProduk">
        <div class="img-produk-wrap">
             <b-img :src="'assets/img/produk/' + gambar"></b-img>
        </div>
       
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
    .img-produk-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
     
        width:100%;
        height:110px;
    }
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
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
@import '@/assets/scss/global-variable.scss';
.CardProduk{
    width:100%;
   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .img-produk-wrap{
        
        height:200px;
        display: flex;
        align-items: center;
        justify-content: center;
     
        
        
    }
    img{
        width:clamp(65px,100%,176px);   
      
    }
    .caption{
        font-family: poppins,sans-serif;
        font-weight: 500;
    }
}
</style>
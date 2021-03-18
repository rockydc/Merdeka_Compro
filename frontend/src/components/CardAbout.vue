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
@import '@/assets/scss/global-variable.scss';
.CardAbout{
   
    margin-top:100px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        max-width:100%;
        height:170px;
        
    }

    p{
        font-family: poppins,sans-serif;
        font-size:14px;
        text-align: center;
    }
    .caption{
        font-weight: 400;
    }
    .title{
        margin-top:30px;
        font-weight: 700;
    }
}

@include extra{

    .CardAbout{
        img{
            height: 210px;
        }
        p{
            font-size:16px;
            line-height: 24px;
        }
    }
}

</style>
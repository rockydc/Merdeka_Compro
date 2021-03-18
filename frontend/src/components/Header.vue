<template>
     <header class="header-global" >
         
          <b-img class="navbar-background"
          src="@/assets/img/navbar-bg.png"
          >

          </b-img>

        </header>
</template>
<script>
export default {
    name:"Header"
}
</script>

<style lang="scss">
@import '@/assets/scss/global-variable.scss';

.header-global{
  z-index:10;
    margin-top:-73px;
    .navbar-background{
        width:100%;
       
    }
}
@include mobile{
  header{
    display:none;
  }
}

@include tablet{
  header{
    display:none;
  }
}

@include extra{
  .header-global{
    margin-top: -120px;
  }
}
</style>
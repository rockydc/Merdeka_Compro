<template>
     <header class="header-global" >
         
          <b-img class="navbar-background"
          src="@/assets/img/header-bg-1x.png"
          >
          </b-img>
          <b-link to="/" ><b-img class="img-logo-header" src="/assets/img/Logo-2x.png"></b-img>
          </b-link>
          
          <h1 v-html="title" class="bottom-left">
           
          </h1>
            

        </header>
</template>
<script>
export default {
    name:"Header",
    props:{
      title:String
    }
}
</script>

<style lang="scss">
@import 'header.scss';

</style>
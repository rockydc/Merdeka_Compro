<template>
     <header class="header-global" >
         
          <b-img class="navbar-background"
          src="@/assets/img/navbar-bg.png"
          >

          </b-img>
          <h1 class="bottom-left">
            {{title}}
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
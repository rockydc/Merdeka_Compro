<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->    
    <transition name="fade">
     <router-view/>
    </transition>
    
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
@import '@/assets/scss/global-variable.scss';


*{

padding:0px;
margin:0px;

}

.fade-enter-active, .fade-leave-active {
  transition: ease-in-out .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.red-line{
    width:50%;
    height:10px;
    background-color: #CB2B2B;
    border-radius: 9px;
    margin-bottom:50px;

}



</style>

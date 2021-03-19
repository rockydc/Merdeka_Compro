<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->    
    <transition name="scale" mode="out-in">
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

.red-line{
    width:50%;
    height:10px;
    background-color: #CB2B2B;
    border-radius: 9px;
    margin-bottom:50px;

}

// animation transition
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
// .slide-custom-enter-active{

//   transition: all .3s ease-in;

// }
// .slide-custom-leave-active{
//   transition:ease-in-out .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }

// .slide-custom-enter, .slide-custom-leave-to{
//  transform: translateX(10px);
//   opacity:0;
// }


</style>

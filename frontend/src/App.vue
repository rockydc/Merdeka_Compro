<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
*{

padding:0px;
margin:0px;

}
header{
    margin-top:-80px;
    .navbar-background{
        width:100%;
       
    }
}

.red-line{
    width:50%;
    height:10px;
    background-color: #CB2B2B;
    border-radius: 9px;
    margin-bottom:50px;

}
</style>

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
$bp-sm:600px;
$bp-md:768px;
$bp-L:992px;
$bp-XL:1200px;

@mixin mobile{
    @media (min-width:0) and (max-width:#{$bp-sm})
    {
        @content;
    }
}

@mixin tablet {
    @media (min-width:$bp-sm+1px) and (max-width:#{$bp-md})
    {
        @content;
    }
}
@mixin dekstop {
    @media (min-width:$bp-md+1px) and(max-width:#{$bp-L}){
        @content;
    }
        
}
@mixin superdesktop {
    @media(min-width:$bp-L+1px) and(max-width:#{$bp-XL}){
        @content;
    }
}
@mixin extra{
    @media(min-width:$bp-XL+245){
        @content;
    }
}

*{

padding:0px;
margin:0px;

}
.router-link{
 

}
header{
  z-index:10;
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

</style>

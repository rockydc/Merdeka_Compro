<template>
    <div >
          <b-navbar toggleable="lg">
    <b-navbar-brand v-show="isBrand" href="#"><b-img width="50" height="50"  src="@/assets/img/Logo-merdeka.png"></b-img></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
 
        <b-nav-item href="#" active>Beranda</b-nav-item>
        <b-nav-item href="#">Tentang Merdeka Pulsa</b-nav-item>
        <b-nav-item href="#">Produk Merdeka Pulsa</b-nav-item>
        <b-nav-item href="#">Pendaftaran</b-nav-item>
        <b-nav-item href="#">Deposit</b-nav-item>
        <b-nav-item href="#">Hubungi Kami</b-nav-item>
         <b-nav-item href="#">ID | ENG</b-nav-item>
    
 
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>
<script>
export default {
    name:'Navbar',
    props:{
      isBrand:Boolean
    }
}
</script>
<style lang="scss" scoped>
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

.navbar{
    padding-top:15px;
    background:transparent;
    z-index:20;

}
.nav-item .nav-link{
        color:white;
        font-family: poppins,sans-serif;
        font-size:12px;
        margin-left:8px;

    &:hover{
      color:white;
      opacity: 0.7;
    }
    }
 .navbar-light .navbar-nav .nav-link.active{
  padding:7px 14px;
  background:white;
  border-radius:15.5px;
  color: #C52D2E;
}

@include mobile{
  .navbar{
    background-color:#c5202e;
  }
  .nav-item{
    margin-top:20px;
  }
  .nav-item .nav-link{
    color:color;

  }
   .navbar-light .navbar-nav .nav-link.active{
     color:white;
     padding:0;
     background:#c5202e;
   }
 

}

@include tablet{
  .navbar{
    background-color:#c5202e;
  }
  .nav-item{
    margin-top:20px;
  }
  .nav-item .nav-link{
    color:color;

  }
   .navbar-light .navbar-nav .nav-link.active{
     color:white;
     padding:0;
     background:#c5202e;
   }
 

}

@include extra{
  .navbar-nav{
    .nav-item{
      margin-left:50px;
    }
  }
}
</style>

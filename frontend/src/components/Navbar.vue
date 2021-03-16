<template>
    <div >
          <b-navbar toggleable="lg">
    <b-navbar-brand v-show="isBrand" href="#"><b-img width="50" height="50"  src="@/assets/img/Logo-merdeka.png"></b-img></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <template #default ="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up" variant="light"></b-icon>
          <b-icon v-else icon="chevron-bar-down" variant="light"></b-icon>
          
      </template>

    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
 
        <b-nav-item ><router-link  exact class="router-link"  to="/" >Home</router-link ></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/tentang" >Tentang Merdeka Pulsa</router-link></b-nav-item>
        <b-nav-item  ><router-link class="router-link" to="/produk">Produk Merdeka Pulsa</router-link></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/pendaftaran">Pendaftaran</router-link></b-nav-item>
        <b-nav-item ><router-link class="router-link" to="/deposit">Deposit</router-link></b-nav-item>
        <b-nav-item  ><router-link class="router-link" to="/kontak" v-on:click="greet">Hubungi Kami</router-link></b-nav-item>
        
        
         <b-nav-item href="#" class="router-link nav-billingual ">
           <a class="router-link" to="#">ID</a>
    
         </b-nav-item>
         <span class="divider">|</span>
      <b-nav-item href="#" class="router-link nav-billingual ">
           <a class="router-link" to="#">EN</a>
    
         </b-nav-item>
    
 
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
    },methods:{
      greet:()=>{
      console.log(this.$route);
      }
    
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

.router-link-active{
    padding:7px 14px;
  background:white;
  border-radius:15.5px;
  color: #C52D2E!important;
  text-decoration: none;

}
.navbar{
    padding-top:15px;
    background:transparent;
    z-index:20;

}
.nav-item .nav-link a{
        color:white;
        font-family: poppins,sans-serif;
        font-size:12px;
        margin-left:8px;
        text-decoration: none;

    &:hover{
      color:white;
      opacity: 0.7;
    }
    }

   .nav-item:last-child .nav-link{
    margin-left:-11px;
  }

 .navbar-light .navbar-nav .nav-link.active a{
  padding:7px 14px;
  background:white;
  border-radius:15.5px;
  color: #C52D2E!important;
  text-decoration: none;
}
.nav-billingual>a{
  font-weight: 500;
}
.divider{
  color:white;
  margin-left:-2px;
  margin-top:9px;
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
  .navbar-brand{
    display:none;
  }
   .navbar-light .navbar-nav .nav-link.active{
     color:white;
     padding:0;
     background:#c5202e;
   }
  .divider{
    display:none;
  }

     .nav-item:last-child .nav-link{
    margin-left:0px;
  }

    button.navbar-toggler{
      border: 1px solid white;
    }
}

@include tablet{
  .navbar{
    background-color:#c5202e;
  }
  .nav-item{
    margin-top:20px;
  }
   .navbar-brand{
    display:none;
  }
  .nav-item .nav-link{
    color:color;

  }
   .navbar-light .navbar-nav .nav-link.active{
     color:white;
     padding:0;
     background:#c5202e;
   }
     .nav-item:last-child .nav-link{
    margin-left:0px;
  }
  span.divider{
    display:none;
  }
      button.navbar-toggler{
      border: 1px solid white;
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

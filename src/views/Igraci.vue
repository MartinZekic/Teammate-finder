<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div class="bar">
    <div class="btni">
 <span class="fltrs">
<div class="btn-group">
  <button type="button" class="btn mnb btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Igra
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
 <div class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Rank
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
 <div class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Regija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pozicija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
 </span>
    </div>
</div>


<lolkompigraci></lolkompigraci>
<csgokompigraci></csgokompigraci>
<kompigraci></kompigraci>



</div>
</div>
</template>

<script>
import kompigraci from '@/components/kompigraci.vue'
import lolkompigraci from '@/components/lolkompigraci.vue'
import csgokompigraci from '@/components/csgokompigraci.vue'
import navnside from '@/components/navnside.vue'
import store from '@/store.js'
export default {
  components: {
    navnside,
    kompigraci,
    lolkompigraci,
    csgokompigraci
  }
}
</script>

<style>
 

.btni{
margin-right:50%;
}

.btn-group{
margin-top:5px;
padding:10px;
margin-right:50px;
}

.bar{
background: rgb(9, 1, 32);
height:70px;
width:100vw;
border-bottom: solid 1px white;
}

.dropdown-toggle{
font-size: 15px;
height:30px;
width:90px;
}

body {
  background: #000220 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  padding: 0;
}


</style>
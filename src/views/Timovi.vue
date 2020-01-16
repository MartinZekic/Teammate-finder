<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div class="bar">
    <div class="btni">
 <span class="fltrs">
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
 </span>
    </div>
</div>
</div>
</div>
</template>



<script>
import navnside from '@/components/navnside.vue'
export default {
  components: {
    navnside
  }
}
</script>

<style>



.btn-group{
padding:30px;
margin-right:1738px;
}

.dropdown-toggle{
font-size: 20px;
height:37px;
width:120px;
}

.bar{
background: rgb(9, 1, 32);
height:100px;
width:2005px;
border-bottom: solid 1px white;
}
</style>
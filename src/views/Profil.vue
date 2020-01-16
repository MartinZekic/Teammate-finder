<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div class=userinfo>
<img id="avatar" src="../assets/pplaceholder.jpg"/>
<center><span id="imekor">{{ userEmail }}</span></center>
</div>
<div class=podaci>
<a id="naslov">Podaci</a>
</div>


<div class=komentari>
<a id="naslov2">Komentari</a>
</div>

</div>
</div>

</template>



<script>
import navnside from '@/components/navnside.vue'
import store from '@/store.js'
export default {
  components: {
    navnside
  },
  data(){
return store
}
}
</script>

<style>


#imekor{
position: absolute;
font-size: 30px;
color:white;
margin-top:10px;
margin-left:-5.5%;
}

#avatar{
margin-top:2%;
border-radius: 50%;
height:200px;
}

#naslov{
position: inherit;
margin-left:-92.5%;
font-size: 30px;
color:white;
font-weight: bold;
}

#naslov2{
margin-left:-90%;
font-size: 30px;
color:white;
font-weight: bold;
}

.podaci{
padding:15px;
background: rgb(0, 0, 0);
margin-top: 5%;
width:2000px;
height:80px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}


.komentari{
padding:15px;
background: rgb(0, 0, 0);
margin-top: 20%;
width:2000px;
height:80px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>
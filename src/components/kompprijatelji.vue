<template>
<div class="pozivi">
<div class="container">
   <div class="row" >
       <div class="col-6">
  <div class="usertim"> 
          <img id="timavatar" :src="prijatelj.url"/>
          <a id="timkorime">{{prijatelj.korisnickoime}}</a>
  </div>
      </div>
<div class="col-lg">
    <span>
    <button @click="obrisi(prijatelj.id)" type="button" class="btn btn-danger">Obrisi</button>
    </span>
</div>
</div>

</div>
</div>
</template>


<script>
import store from '@/store.js'

export default {
props: ['prijatelj'],
  data(){
    return store
  },

  methods: {
obrisi(p){
var brisanje_pr1 = firebase.firestore().collection("Korisnici").doc(p).collection("prijatelji").doc(this.userEmail);
var brisanje_pr2 = firebase.firestore().collection("Korisnici").doc(this.userEmail).collection("prijatelji").doc(p);

brisanje_pr1.delete().then(brisanje_pr2.delete()).then(alert("Prijatelj uklonjen"));
  },
 


    }

}
</script>

<style>

.container{
margin-top:1%;
margin-right:70%;

}

.usertim{
margin-right:70%;
}
#ranktim{
margin-right: 30%;
margin-top:10px;
font-size: 23px;
color:white;
position: relative;
padding:50px;
}

#timkorime{
padding:7px;
font-size: 20px;
color:white;
}

#timavatar{
  margin-left:17px;
  border-radius:50%;
  height: 40px;
}

.pozivi{
background: rgb(20, 20, 20);
margin-top: 1%;
width:100vw;
height:80px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>
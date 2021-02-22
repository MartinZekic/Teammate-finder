<template>
<div>
<div class="pozivi">
    <div class="container">
   <div class="row" >
       <div class="col-lg-8">
  <div class="pozivuser"> 
          <img id="pozavatar" :src="poziv.url"/>
          <a id="timkorime">{{poziv.od}}</a>
          <span id="timkorime">vam šalje zahtjev za prijateljstvo</span>

  </div>
      </div>
<div class="col-md">
    <button @click="prihvati(poziv.od, poziv.za, poziv.url, poziv.korisnickoime)" type="button" class="btn btn-success">Prihvati</button>
    <button @click="odbij(poziv.od, poziv.za)" type="button" class="btn btn-danger">Odbij</button>

</div>
</div>

</div>
</div>
</div>
</template>



<script>
import store from '@/store.js'

export default {
props: ['poziv'],
  data(){
    return store
  },

   methods: {
prihvati(p,z,u,k){
var brisanje_upit = firebase.firestore().collection("Korisnici").doc(z).collection("pozivi").where("od","==",p);
brisanje_upit.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    doc.ref.delete()
  });
}).then(db.collection("Korisnici").doc(z).collection("prijatelji").doc(p).set({
                      id: p,
                      url: u,
                      korisnickoime: k,
                    })).then(db.collection("Korisnici").doc(p).collection("prijatelji").doc(z).set({
                      id: z,
                      url: this.URL,
                      korisnickoime: this.korisnickoIme,
                    })).then(alert("Zahtjev prihvaćen"));
  },
  odbij(p,z){
var brisanje_upit = firebase.firestore().collection("Korisnici").doc(z).collection("pozivi").where("od","==",p);
brisanje_upit.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    doc.ref.delete()
  });
}).then(alert("Zahtjev odbijen"));
  },


    }

}
</script>




<style>

.btn{
margin-left: 10%;
width:90px;
height: 35px;
font-size:15px;
}

#pr{
padding:15px;
font-size: 20px;
color:white;
}

#odb{
padding:15px;
font-size: 20px;
color:white;
}

.container{
margin-top:1%;
margin-right:70%;

}

.pozivuser{
width:50%;
}

#ranktim{
margin-top:10px;
font-size: 23px;
color:white;
position: relative;
}

#timkorime{
padding:3px;
font-size: 20px;
color:white;
}

#pozavatar{

  margin-left:17px;
  border-radius:50%;
  height: 40px;
}

.pozivi{
background: rgb(20, 20, 20);
margin-top: 1%;
width:2000px;
height:100px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>
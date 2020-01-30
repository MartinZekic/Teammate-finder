<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div class=userinfo>
<img id="avatar" src="../assets/pplaceholder.jpg"/>
<center><span id="imekor">{{ korisnik.korisnickoime }}</span></center>
</div>
<div class=podaci>
<a id="naslov">Podaci</a>
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" id="pbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Igra
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="poddota()" href="#">Dota 2</a>
    <a class="dropdown-item" @click="podcsgo()" href="#">CS:GO</a>
    <a class="dropdown-item" @click="podlol()" href="#">League of legends</a>
  </div>
</div>
</div>
<div v-if="dotaodabir" class=asd>
<div class="row">
  
  <div class="col">
     <li id="podaciid">Rank: {{ dotaRank }} </li>
     <li id="podaciid">Id u igri:{{ dotaGameId}} </li>
     
     <li id="podaciid">Pozicija:{{ dotaPos }}</li>
     
     <li id="podaciid">Regija:{{dotaRegija}}</li>
     
     <li id="podaciid">Trenutni tim:</li>
     </div>
      

  <div class="col">
  <div id=userrate>
<div id="str">
<span class="fa fa-star"></span>
</div>
<li id="pods">Ocjena:</li>

</div></div>
</div>
</div>

<div v-if="csgoodabir" class=asd>
<div class="row">
  
  <div class="col">
     <li id="podaciid">Rank: {{ csgoRank }} </li>
     <li id="podaciid">Id u igri:{{ csgoGameId}} </li>
     
     <li id="podaciid">Pozicija:{{ csgoPos }}</li>
     
     <li id="podaciid">Regija:{{csgoRegija}}</li>
     
     <li id="podaciid">Trenutni tim:</li>
     </div>
      

  <div class="col">
  <div id=userrate>
<div id="str">
<span class="fa fa-star"></span>
</div>
<li id="pods">Ocjena:</li>

</div></div>
</div>
</div>

<div v-if="lolodabir" class=asd>
<div class="row">
  
  <div class="col">
     <li id="podaciid">Rank: {{ lolRank }} </li>
     <li id="podaciid">Id u igri:{{ lolGameId}} </li>
     
     <li id="podaciid">Pozicija:{{ lolPos }}</li>
     
     <li id="podaciid">Regija:{{lolRegija}}</li>
     
     <li id="podaciid">Trenutni tim:</li>
     </div>
      

  <div class="col">
  <div id=userrate>
<div id="str">
<span class="fa fa-star"></span>
</div>
<li id="pods">Ocjena:</li>

</div></div>
</div>
</div>

<div class=komentari>
<a id="naslov2">Komentari</a>
</div>
<div class="koms">
<kompkomentari></kompkomentari>
</div>

</div>
</div>

</template>



<script>
import navnside from '@/components/navnside.vue'
import store from '@/store.js'
import kompkomentari from '@/components/kompkomentari.vue'



export default {
  data(){
    return store
  },

 
  components: {
    navnside,
    kompkomentari
  },
//   mounted(){
//     db.collection("Korisnici").doc(this.userEmail).get().then(doc =>{
//         console.log("Document data:", doc.data());
//       this.dotaGameId=doc.data().dotagameid;
//       this.dotaPos=doc.data().dotapos;
//       this.dotaRegija=doc.data().dotaregija;
//       this.dotaRank=doc.data().dotarank;
//       this.lolGameId=doc.data().lolgameid;
//       this.lolPos=doc.data().lolpos;
//       this.lolRegija=doc.data().lolregija;
//       this.lolRank=doc.data().lolrank;
//       this.csgoGameId=doc.data().csgogameid;
//       this.csgoPos=doc.data().csgopos;
//       this.csgoRegija=doc.data().csgoregija;
//       this.csgoRank=doc.data().csgorank;
//       this.korisnickoIme=doc.data().korisnickoime;
      
        
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });
//   },
 created(){
        var kor = this.$route.params.imekorisnika 
        let korisnik = db.collection("Korisnici").doc(kor)
        korisnik.get().then((doc) =>{
            this.korisnik = doc.data()
        })    
    },

  methods:{
  poddota() {
          this.lolodabir = false;
          this.dotaodabir = true;
          this.csgoodabir = false;
  },
podcsgo() {
          this.lolodabir = false;
          this.dotaodabir = false;
          this.csgoodabir = true;
  },
podlol() {
          this.lolodabir = true;
          this.dotaodabir = false;
          this.csgoodabir = false;
  }
  }
  }
  

</script>

<style>

.btn-outline-primary {
  margin-top: 10px;
}
.koms{
margin-top:30px;
}

.btn-group{
 margin-left:55%;
 padding:0;
}

.col #userrate{
padding:50px;
}

li{
  list-style-type: none;
}

#podaciid{
  padding: 10px;
}
.row{
width:100%;
}

/* Create two equal columns that floats next to each other */
.asd {
  margin-top: 2%;
  width: 30%;
  font-size: 20px;
  color: white;
  margin-left: 4%;
  }




/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}


/* Clear floats after the columns */

.row {
  display: flex;
}

.column {
  flex: 50%;
}



.column {
  float: left;
}

.left {
  width: 25%;
}

.right {
  width: 75%;
}

#imekor{
position: relative;
font-size: 23px;
color:white;
}

#avatar{
margin-top:2%;
border-radius: 50%;
height:140px;
float:center;
}

#naslov{
margin-bottom:30px;
position: relative;
float:left;
font-size: 25px;
color:white;
font-weight: bold;
}

#naslov2{
margin-bottom:10px;
float: left;
position: relative;
font-size: 25px;
color:white;
font-weight: bold;
}

.podaci{
padding:10px;
background: rgb(0, 0, 0);
margin-top: 2%;
width:100vw;
height:60px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}


.komentari{
padding:10px;
background: rgb(0, 0, 0);
margin-top: 1%;
width:100vw;
height:60px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}

body {
  background: #000220 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
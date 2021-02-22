<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div class="bar">
    <div class="btni">
 <span class="fltrs">
<div class="btn-group">
  <button type="button" href="" class="btn mnb btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Igra
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" @click="odaberidota" >Dota 2</a>
    <a class="dropdown-item" @click="odabericsgo" >CS:GO</a>
    <a class="dropdown-item" @click="odaberilol" >League of legends</a>
  </div>
</div>
 <div v-if="dotaodabir" class="btn-group">
  <input v-model="searchTerm" class="form-control mr-sm-2" type="search"
placeholder="Pretraga po usernameu" aria-label="Search">
</div>
 
 
 <div v-if="csgoodabir" class="btn-group">
  <input v-model="searchTerm" class="form-control mr-sm-2" type="search"
placeholder="Pretraga po usernameu" aria-label="Search">
  
</div>

 <div v-if="lolodabir" class="btn-group">

  <input v-model="searchTerm" class="form-control mr-sm-2" type="search"
placeholder="Pretraga po usernameu" aria-label="Search">

</div>
 

 </span>
    </div>
</div>

<div v-for="igrac in dotaigraci" :key="igrac.id">
            <kompigraci :igrac="igrac" v-if="dotaodabir" />
        </div>
        <div v-for="igrac in loligraci" :key="igrac.id">
            <lolkompigraci :igrac="igrac" v-if="lolodabir" />
        </div>
        <div v-for="igrac in csgoigraci" :key="igrac.id">
            <csgokompigraci :igrac="igrac" v-if="csgoodabir" />
        </div>



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

  data (){
        return store
  },
  components: {
    navnside,
    kompigraci,
    lolkompigraci,
    csgokompigraci
  },


  mounted(){
   if(this.csgoigraci.some(igrac => igrac.id === doc.data().id)==false){
    firebase.firestore().collection("Korisnici").where("csgo","==",true).onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
           let doc = change.doc
           console.log(doc.data())
        let igrac=doc.data()
         igrac.id=doc.id;
        this.csgoigraci.push(igrac);

    });
});
}
  if(this.dotaigraci.some(igrac => igrac.id === doc.data().id)==false){
    firebase.firestore().collection("Korisnici").where("dota","==",true).onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
           let doc = change.doc
        let igrac=doc.data()
         igrac.id=doc.id;
        this.dotaigraci.push(igrac);
    });
});
}
  if(this.loligraci.some(igrac => igrac.id === doc.data().id)==false){
    firebase.firestore().collection("Korisnici").where("lol","==",true).onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
          let doc = change.doc
        let igrac=doc.data()
         igrac.id=doc.id;
        this.loligraci.push(igrac);
}
    });
});
}

  },


  methods:{

    filteredDotaIgraci(){
        let termin = this.searchTerm;
        this.dotaigraci.filter((igrac) => igrac.korisnickoime.indexOf(termin) >= 0);
      },


      odaberilol(){
        this.lolodabir = true;
          this.dotaodabir = false;
          this.csgoodabir = false;
      },
      odabericsgo(){
        this.lolodabir = false;
          this.dotaodabir = false;
          this.csgoodabir = true;
      },
      odaberidota(){
        this.lolodabir = false;
          this.dotaodabir = true;
          this.csgoodabir = false;

      },



  },

}
</script>

<style>


 

.btni{
position: relative;
float:left;
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
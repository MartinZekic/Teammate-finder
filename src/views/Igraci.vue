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
    <a class="dropdown-item" href="#" @click="odaberidota" >Dota 2</a>
    <a class="dropdown-item" @click="odabericsgo" href="#">CS:GO</a>
    <a class="dropdown-item" @click="odaberilol" href="#">League of legends</a>
  </div>
</div>
 <div v-if="dotaodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Rank
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Herald</a>
    <a class="dropdown-item" href="#">Guardian</a>
    <a class="dropdown-item" href="#">Crusader</a>
    <a class="dropdown-item" href="#">Archon</a>
    <a class="dropdown-item" href="#">Legend</a>
    <a class="dropdown-item" href="#">Ancient</a>
    <a class="dropdown-item" href="#">Divine</a>
    <a class="dropdown-item" href="#">Immortal</a>
  </div>
</div>
 <div v-if="dotaodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Regija
  </button>
  <div class="dropdown-menu">
 <a class="dropdown-item" href="#">Centralna Hrvatska</a>
    <a class="dropdown-item" href="#">Dalmacija</a>
    <a class="dropdown-item" href="#">Slavonija</a>
    <a class="dropdown-item" href="#">Istra</a>
  </div>
</div>
<div v-if="dotaodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pozicija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Pos1</a>
    <a class="dropdown-item" href="#">Pos2</a>
    <a class="dropdown-item" href="#">Pos3</a>
    <a class="dropdown-item" href="#">Pos4</a>
        <a class="dropdown-item" href="#">Pos5</a>
  </div>
</div>
 <div v-if="csgoodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Rank
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Silver</a>
    <a class="dropdown-item" href="#">Gold</a>
    <a class="dropdown-item" href="#">Master Guardian</a>
    <a class="dropdown-item" href="#">Legendary Eagle</a>
     <a class="dropdown-item" href="#">Supreme</a>
    <a class="dropdown-item" href="#">Global Elite</a>
  </div>
</div>
 <div v-if="csgoodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Regija
  </button>
  <div class="dropdown-menu">
 <a class="dropdown-item" href="#">Centralna Hrvatska</a>
    <a class="dropdown-item" href="#">Dalmacija</a>
    <a class="dropdown-item" href="#">Slavonija</a>
    <a class="dropdown-item" href="#">Istra</a>
  </div>
</div>
<div v-if="csgoodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pozicija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Entry-fragger</a>
    <a class="dropdown-item" href="#">Rifler</a>
    <a class="dropdown-item" href="#">Sniper</a>
    <a class="dropdown-item" href="#">Support</a>
    <a class="dropdown-item" href="#">Lurker</a>
  </div>
</div>
 <div v-if="lolodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Rank
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Iron</a>
    <a class="dropdown-item" href="#">Bronze</a>
    <a class="dropdown-item" href="#">Silver</a>
    <a class="dropdown-item" href="#">Gold</a>
    <a class="dropdown-item" href="#">Platinum</a>
    <a class="dropdown-item" href="#">Diamond</a>
    <a class="dropdown-item" href="#">Master</a>
    <a class="dropdown-item" href="#">GrandMaster</a>
    <a class="dropdown-item" href="#">Challenger</a>
  </div>
</div>
 <div v-if="lolodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Regija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Centralna Hrvatska</a>
    <a class="dropdown-item" href="#">Dalmacija</a>
    <a class="dropdown-item" href="#">Slavonija</a>
    <a class="dropdown-item" href="#">Istra</a>
  </div>
</div>
<div v-if="lolodabir" class="btn-group">
  <button type="button" class="btn mnb btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pozicija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Pos1</a>
    <a class="dropdown-item" href="#">Pos2</a>
    <a class="dropdown-item" href="#">Pos3</a>
    <a class="dropdown-item" href="#">Pos4</a>
    <a class="dropdown-item" href="#">Pos5</a>
  </div>
</div>
 </span>
    </div>
</div>


<lolkompigraci v-if="lolodabir"></lolkompigraci>
<csgokompigraci v-if="csgoodabir"></csgokompigraci>
<kompigraci v-if="dotaodabir"></kompigraci>



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
  methods:{


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

      }




  }


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
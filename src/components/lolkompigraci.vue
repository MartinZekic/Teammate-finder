<template>
<div>
<div class="kartice" v-for="korisnik in odabir" :key="korisnik.id">
<div class="igraci">
<div class="row">
<div id=userinfo>
<ul id=red>
<router-link :to="{name: 'Profil', params: {imekorisnika: korisnik.korisnickoime}}"><li><img id="avatar" src="../assets/pplaceholder.jpg"/></li>
<li id="imekor">{{ korisnik.korisnickoime }}</li></router-link>
</ul>
</div>
<div class="column">
<div id=userpodaci>
<li id="pods">Id u igri:{{korisnik.lolgameid}}</li>
<li id="pods">Rank:{{korisnik.lolrank}}</li>
<li id="pods">Pozicija:{{korisnik.lolpos}}</li>
<li id="pods">Regija:{{korisnik.lolregija}}</li>
</div>
</div>
<div class="column2">
<div id=userrate>
<div id="str">
<span class="fa fa-star"></span>
</div>
<li id="pods">Ocjena:</li>

</div>

</div>

<div class="column3">
<div id=user>
<li id="dgmd"> <button type="button" class="btn btn-outline-primary" >Pozovi u tim</button></li>
</div>

</div>

</div>

</div>
</div>
</div>
</template>



<script>
import store from '@/store.js'

export default {

  data(){
    return store
  },

  created(){
    db.collection("Korisnici").where("lol","==",true).get().then((querySnapshot)=> {
    querySnapshot.forEach((doc)=> {
         this.brc+=1
         let korisnik=doc.data()
         korisnik.id=doc.id+this.brc
        this.Korisnici.push(korisnik);
    });
});
  },
  computed:{
      odabir() {
      return this.Korisnici.filter(korisnik => korisnik.lol);

    }
    }


}
</script>

<style>

#dgmd{
margin-top: 30%;
padding:50px;
}

.fa {
color:yellow;
font-size: 100px;
}

#pods{
color:white;
font-size: 20px;
padding:7px;
}

li{
  list-style-type: none;
}


.row{
width:100%;
}


.column {
  padding:35px;
  float: left;
  width: 50%;
}

.column2 {
  padding:60px;
  float: left;
  width: 20%;
}
.column3 {
  padding:0px;
  float: left;
  width: 10%;
}


.row:after {
  content: "";
  display: table;
  clear: both;
}

#userinfo{
margin-top:3%;
position: absolute;
}

#imekor{
position: absolute;
font-size: 20px;
color:white;
margin-top:9px;
margin-left:0%;
}

#avatar{
padding:5px;
border-radius: 50%;
height:110px;
}
.igraci{
background: rgb(20, 20, 20);
margin-top: 2%;
width:100vw;
height:240px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>
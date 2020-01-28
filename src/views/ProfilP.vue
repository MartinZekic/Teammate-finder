<template>
  <div class="postav">
    <form @submit.prevent="submitkorisnickoime">
<div class=wndw>
<div class=sadr>
<a id="naslov"> Postavljanje profila</a>
<div id=postforma>
     <div class="form-group row">
    <label for="korisnickoime" class="naslpp">Korisničko ime:</label>
    <div >
      <input v-model="korisnickoIme" type="korisnickoIme" class="frm form-control" id="korisnickoIme" placeholder="Korisnik">
    </div>
    <div class="izavatar">
      <label for="izabiravatara" class="izabiravatara">Odabir avatara:</label>
      <div id="kropa">
       <croppa :width="200" :height="180" v-model="imageData"></croppa>
      </div>
    </div>
  </div>


</div>
</div>

<div class=dvdr>
<a id="odb">Odabir igara</a>
</div>
<div class="igre">
<div>
    <input type="checkbox" v-model="Dota" name="Dota" value="Dota"> <br>
  <a id="gms">DOTA 2</a>
    <input type="checkbox" v-model="Csgo" name="Csgo" value="Csgo"> <br>
  <a id="gms3">CS:GO</a>
    <input type="checkbox" v-model="Lol" name="Lol" value="Lol"> <br>
  <a id="gms4">League of Legends</a>
</div>
<div>
  <img id="d2" src="../assets/dota2.jpg">
  <img id="csgo" src="../assets/dota2.jpg">
  <img id="pubg" src="../assets/dota2.jpg">
</div>
</div>

</div>

<button type="submit" class="btn btn-primary">Prihvati</button>

</form>
  </div>
  

</template>


<script>
import Croppa from 'vue-croppa';
import store from '@/store.js'
export default {
  data () {
    return store
    
  },
  methods:{
    submitkorisnickoime(){
        db.collection("Korisnici").doc(this.userEmail).set({
                      korisnickoime: this.korisnickoIme,
                      dota: this.Dota,
                      csgo: this.Csgo,
                      lol: this.Lol,
                      posted_at: Date.now()
                    }).then(function() {
                    console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                    console.error("Error writing document: ", error);
                    });
                    if (this.$route.name == 'ProfilP')
                    this.$router.push({name: 'ProfilIg'}).catch(err => console.log(err))
    }
  }
}
</script>

<style>


#d2{
  margin-top:1%;
position: inherit;
   width:200px;
    height:200px;
    margin-right:120px;
}

#lol{
  margin-top:1%;
  position: inherit;
   width:200px;
    height:200px;
    margin-right:120px
}

#csgo{
  margin-top:1%;
  position: inherit;
   width:200px;
    height:200px;
     margin-right:120px
}

#pubg{
margin-top:1%;
position: inherit;
   width:200px;;
    height:200px;
     margin-right:120px
  
}

#gms{
color:white;
font-size: 30px;
font-weight: bold;;
position:inherit;
margin-left:100px;
}


#gms3{
color:white;
font-size: 30px;
font-weight: bold;;

margin-left:100px;
}

#gms4{
color:white;
font-size: 30px;
font-weight: bold;;
position:inherit;
margin-left:100px;
margin-right:200px;
}


.igre{
margin-top:80px;
}

#odb{
color:white;
font-size: 30px;
font-weight: bold;
}

.dvdr{
margin-left:-10px;
margin-right:-10px;
height:45px;
border:solid 1px rgb(97, 97, 97);
}

#kropa{
margin-top: -30px;
margin-left:103%;
}

.form-control{
  margin-left:10px;
}

#postforma{
margin-top:2%;
padding: 20px;
}

.naslpp{
position: relative;
font-size:22px;
color:white;
}

.izabiravatara{
margin-bottom:0px;
margin-left:700px;
position: inherit;
font-size:22px;
color:white;
}

.izavatar{
margin-left:300px;
}

.sadr {
position:relative;
padding:10px;
}
.wndw{
  margin-top:4%;
  margin-left:7%;
  margin-bottom:2%;
  position: relative;
  padding:10px;
  width:85%;
  height:900px;
  border: 1px solid rgb(97, 97, 97);
  background:rgb(0, 0, 0);
}
#naslov{
  margin-left:-1580px;
  font-weight: bold;
  color: white;
  font-size: 35px;
}
</style>
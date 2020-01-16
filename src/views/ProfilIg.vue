<template>
  <div class="postav">
<div class=wndw>
<div class=sadr>
<a id="naslov"> Postavljanje profila za igru IGRA</a>
<div id=postforma>
<form @submit.prevent="submitprofilig">
     <div class="form-group row">
    <label for="GameId" class="naslpp">Id u igri:</label>
    <div class="col-sm-10">
      <input v-model="GameId" type="GameId" class="frm form-control" id="GameId" placeholder="Id">
    </div>
  </div>
  <div class="form-group row">
    <label for="trrank" class="naslpp">Trenutni rank:</label>
    <div class="col-sm-10">
      <!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Rank
  </button>
  <div>
    <select v-model="Rank">
  <option value="herald">herald</option>
  <option value="guardian">guardian</option>
  <option value="archon">archon</option>
  <option value="legend">legend</option>
  <option value="ancient">ancient</option>
  <option value="divine">divine</option>
  <option value="banana">immortal</option>
</select>
  </div>
</div>
    </div>
  </div>
      <div class="form-group row">
    <label for="poz" class="naslpp">Željena pozicija:</label>
    <div class="col-sm-10">
      <!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pozicija
  </button>
  <div>
    <select v-model="Pos">
  <option value selected="pos1">pos1</option>
  <option value="pos2">pos2</option>
  <option value="pos3">pos3</option>
  <option value="pos4">pos4</option>
  <option value="pos5">pos5</option>
</select>
  </div>
</div>
    </div>
  </div>
     <div class="form-group row">
    <label for="reg" class="naslpp">Regija:</label>
    <div class="col-sm-10">
      <!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Regija
  </button>
  <div>
    <select v-model="Regija">
  <option value="centralnaHrvatska">Centralna Hrvatska</option>
  <option value="dalmacija">Dalmacija</option>
  <option value="Slavonija">Slavonija</option>
  <option value="Istra">Istra</option>
</select>
  </div>
</div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Prihvati</button>
</form>

</div>
</div>
</div>

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
    submitprofilig(){

        db.collection("Korisnici").doc(this.userEmail).set
                      ({
                      gameid:this.GameId,
                      rank: this.Rank,
                      pos: this.Pos,
                      regija: this.Regija,
                      posted_at: Date.now()
                    }, { merge: true }).then(docRef => {
                      console.log("Document written with ID: ", docRef.id);
                      this.imageData = null;
                    })
                    .catch(e => {
                      console.error("Error adding document: ", error);
                    });
                    if (this.$route.name == 'ProfilIg')
                    this.$router.push({name: 'Igraci'}).catch(err => console.log(err))
    }
  }
  
}




</script>

<style>
.frm{
margin-left:36%;
}
.col-sm-10{
padding:7px;
margin-left:30px;
}

#postforma{
padding:30px;
margin-top:30px;
}
.naslpp{
position: absolute;
font-size:22px;
color:white;
}
.dropdown-toggle{
font-size: 20px;
height:37px;
width:120px;
}

.sadr {
position:absolute;
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
  font-weight: bold;
  color: white;
  font-size: 35px;
}
</style>
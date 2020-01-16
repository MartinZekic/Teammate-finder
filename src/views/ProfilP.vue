<template>
  <div class="postav">
<div class=wndw>
<div class=sadr>
<a id="naslov"> Postavljanje profila</a>
<div id=postforma>
<form>
     <div class="form-group row">
    <label for="korisnickoime" class="naslpp">Korisničko ime:</label>
    <div >
      <input type="korisnickoime" class="frm form-control" id="korisnickoime" placeholder="Korisnik">
    </div>
    <div class="izavatar">
      <label for="izabiravatara" class="izabiravatara">Odabir avatara:</label>
      <div id="kropa">
       <croppa :width="200" :height="180" v-model="imageData"></croppa>
      </div>
    </div>
  </div>
</form>

</div>
</div>

<div class=dvdr>
<a id="odb">Odabir igara</a>
</div>
<div class="igre">
<div>
  <a id="gms">DOTA 2</a>
  <a id="gms2">League of Legends</a>
  <a id="gms3">CS:GO</a>
  <a id="gms4">PUBG</a>
</div>
<div>
  <img id="d2" src="../assets/dota2.jpg">
  <img id="lol" src="../assets/dota2.jpg">
  <img id="csgo" src="../assets/dota2.jpg">
  <img id="pubg" src="../assets/dota2.jpg">
</div>
</div>

</div>
<router-link :to="{name: 'ProfilIg'}">
<button type="submit" class="btn btn-primary">Prihvati</button>
</router-link>
  </div>

</template>

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
margin-left:200px;
}
#gms2{
color:white;
font-size: 30px;
font-weight: bold;;
position:inherit;
margin-right:100px;
margin-left:200px;
}

#gms3{
color:white;
font-size: 30px;
font-weight: bold;;
margin-right:200px;
margin-left:200px;
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
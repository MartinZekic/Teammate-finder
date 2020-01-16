<template>
  <div class="postav">
<div class=wndw>
<div class=sadr>
<a id="naslov"> Postavljanje profila za igru IGRA</a>
<div id=postforma>
<form>
     <div class="form-group row">
    <label for="gameid" class="naslpp">Id u igri:</label>
    <div class="col-sm-10">
      <input type="gameid" class="frm form-control" id="gameid" placeholder="Id">
    </div>
  </div>
  <div class="form-group row">
    <label for="gameid" class="naslpp">Trenutni rank:</label>
    <div class="col-sm-10">
      <!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Rank
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
    </div>
  </div>
      <div class="form-group row">
    <label for="gameid" class="naslpp">Željena pozicija:</label>
    <div class="col-sm-10">
      <!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pozicija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
    </div>
  </div>
     <div class="form-group row">
    <label for="gameid" class="naslpp">Regija:</label>
    <div class="col-sm-10">
      <!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Regija
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
    </div>
  </div>
</form>

</div>
</div>
</div>
<router-link :to="{name: 'Igraci'}">
<button type="submit" class="btn btn-primary">Prihvati</button>
</router-link>
  </div>

</template>

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
<template>
<div class="igraci">
<div class="row">
<div id=userinfo>
<ul id=red>
<li><img id="avatar" src="../assets/pplaceholder.jpg"/></li>
<li id="imekor">{{ userEmail }}</li>
</ul>
</div>
<div class="column">
<div id=userpodaci>
<li id="pods">Id u igri:</li>
<li id="pods">Rank:</li>
<li id="pods">Pozicija:</li>
<li id="pods">Regija:</li>
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
<li id="dgmd"> <button type="button" class="btn btn-outline-primary" >Poruka</button></li>
<li id="dgmd"> <button type="button" class="btn btn-outline-primary" >Pozovi u tim</button></li>
</div>

</div>

</div>

</div>
</template>

<script>
import store from '@/store.js'

export default {
  name: "Korisnici",
  props: {
    msg: String
  },
  data(){
    return{
      Korisnici: [],
    }
  },

  mounted(){
    db.collection("Korisnici").get().then((querySnapshot)=> {
    querySnapshot.forEach((doc)=> {
        // doc.data() is never undefined for query doc snapshots

        this.Korisnici.push(doc.data());
    });
});
  }
  
  }
  

</script>

<style>

#dgmd{
padding:45px;
}

.fa {
color:yellow;
font-size: 100px;
}

#pods{
color:white;
font-size: 20px;
padding:10px;
}

li{
  list-style-type: none;
}


.row{
width:120%;
}

/* Create two equal columns that floats next to each other */
.column {
  padding:35px;
  float: left;
  width: 30%;
}

.column2 {
  padding:60px;
  float: left;
  width: 10%;
}
.column3 {
  padding:0px;
  float: left;
  width: 10%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

#userinfo{
margin-top:2%;
position: absolute;
}

#imekor{
position: absolute;
font-size: 30px;
color:white;
margin-top:10px;
margin-left:0%;
}

#avatar{
padding:5px;
border-radius: 50%;
height:130px;
}
.igraci{
background: rgb(20, 20, 20);
margin-top: 2%;
width:100%;
height:270px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>
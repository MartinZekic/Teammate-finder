<template>
<div>
<navnside>
</navnside>
<div class="appp">
<div class=userinfo>
<img id="avatar" src="../assets/pplaceholder.jpg"/>
<center><span id="imekor">{{  }}</span></center>
</div>
<div class=podaci>
<a id="naslov">Podaci</a>
</div>
<div class=asd>
<div class="row">
  
  <div class="col">
     <li id="podaciid">Rank: {{ Rank }}</li>
     <li id="podaciid">Id u igri: {{ GameId }}</li>
     
     <li id="podaciid">Pozicija: {{ Pos }}</li>
     
     <li id="podaciid">Regija: {{ Regija }}</li>
     
     <li id="podaciid">Trenutni tim:</li>
     </div>
      

  <div class="col"><a>dfghgj</a></div>
</div>
</div>

<div class=komentari>
<a id="naslov2">Komentari</a>
</div>

</div>
</div>

</template>



<script>
import navnside from '@/components/navnside.vue'
import store from '@/store.js'
var getOptions = {
    source: 'server'
}
export default {
  
  data () {
    return store
  },
  components: {
    navnside
  },
  mounted(){
    db.collection("Korisnici").doc(this.userEmail).get(getOptions).then(function(doc) {
        console.log("Document data:", doc.data());
        
}).catch(function(error) {
    console.log("Error getting document:", error);
});
  }
  
  }
  

</script>

<style>

li{
  list-style-type: none;
}

#podaciid{
  padding: 10px;
}
.row{
width:120%;
}

/* Create two equal columns that floats next to each other */
.asd {
  margin-top: 2%;
  width: 30%;
  font-size: 27px;
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
position: absolute;
font-size: 30px;
color:white;
margin-top:10px;
margin-left:-5.5%;
}

#avatar{
margin-top:2%;
border-radius: 50%;
height:200px;
}

#naslov{
position: inherit;
margin-left:-92.5%;
font-size: 30px;
color:white;
font-weight: bold;
}

#naslov2{
margin-left:-90%;
font-size: 30px;
color:white;
font-weight: bold;
}

.podaci{
padding:15px;
background: rgb(0, 0, 0);
margin-top: 5%;
width:2000px;
height:80px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}


.komentari{
padding:15px;
background: rgb(0, 0, 0);
margin-top: 10%;
width:2000px;
height:80px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>
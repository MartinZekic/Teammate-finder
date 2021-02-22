<template>
<div>
<navnside>
</navnside>
<div class="appp">
<kompprijatelji :key="prijatelj.id" :prijatelj="prijatelj" v-for="prijatelj in Prijatelji" />
</div>
</div>
</template>



<script>
import navnside from '@/components/navnside.vue'
import kompprijatelji from '@/components/kompprijatelji.vue'
import store from '@/store.js'
export default {
  data (){
        return store
  },
  components: {
    navnside,
    kompprijatelji
    
  },
  mounted(){
      if(this.Prijatelji.some(prijatelj => prijatelj.id === doc.data().id)==false){
    db.collection("Korisnici").doc(this.userEmail).collection("prijatelji").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => { 
        if(change.type === 'added'){
          let doc = change.doc       
         let prijatelj=doc.data()
        prijatelj.id=doc.id;
        this.Prijatelji.push(prijatelj);
    }
        else if(change.type === 'removed'){
                           this.Prijatelji = this.Prijatelji.filter(Prijatelji =>{
                            return Prijatelji.id != change.doc.id
                          })
                        }
    });
});
      }
  },

}
</script>

<style>



.btn-group{
margin-top:5px;
padding:10px;
margin-right:50px;
}

.dropdown-toggle{
font-size: 15px;
height:30px;
width:90px;
}

.bar{
background: rgb(9, 1, 32);
height:70px;
width:100vw;
border-bottom: solid 1px white;
}

.btni{
position: relative;
float: left;
}

body {
  background: #000220 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
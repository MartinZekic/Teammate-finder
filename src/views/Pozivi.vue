<template>
<div>
<navnside>
</navnside>
<div class="appp">
<komppoziv :key="poziv.id" :poziv="poziv" v-for="poziv in Pozivi" />
</div>
</div>

</template>



<script>
import navnside from '@/components/navnside.vue'
import komppoziv from '@/components/komppoziv.vue'
import store from '@/store.js'
export default {
  data (){
        return store
  },
  components: {
    navnside,
    komppoziv
  },
   mounted(){
      if(this.Pozivi.some(poziv => poziv.id === doc.data().id)==false){
    db.collection("Korisnici").doc(this.userEmail).collection("pozivi").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => { 
        if(change.type === 'added'){
          let doc = change.doc       
         let poziv=doc.data()
         poziv.id=doc.id;
        this.Pozivi.push(poziv);
    }
        else if(change.type === 'removed'){
                           this.Pozivi = this.Pozivi.filter(Pozivi =>{
                            return Pozivi.id != change.doc.id
                          })
                        }
    });
});
      }
  },
 
  
}
</script>


<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
import store from '@/store.js'
export default {

  props: ['korisnik'],
  data () {
    return store;
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User is logged in with email " + user.email)
        this.authenticated = true
        this.userEmail = user.email
        if (this.$route.name === 'Prijava')
          this.$router.replace({name: 'Igraci'}).catch(err => console.log(err))
      }
      else {
        console.log("User is not logged in")
        this.authenticated = false
        if (this.$route.name !== 'Prijava')
          this.$router.replace({name: 'home'}).catch(err => console.log(err))
      }
    });
    
    
  },
  
}
</script>


<style lang="scss">

body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.appp{
  
  position: absolute;
  margin-left: 201px;
  margin-top: 70px;
}
#red li{
  list-style-type: none;
}


</style>
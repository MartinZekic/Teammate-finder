<template>
<div>
  <div id=lpos>
    <img id="logo" src="../assets/logo.png">
    </div>


    <div class="about">
      <a id="naslov"> Registracija</a>
      </div>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <form @submit.prevent="signup">
            <div class="form-group">
              <a id="reg1">Korisničko ime</a>
              <input class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Unesite korisničko ime">
            </div>
            <div class="form-group">
              <a id="reg1">Email adresa</a>
              <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unesite e-mail adresu">
            </div>
            <div class="form-group">
              <a id="reg1">Lozinka</a>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Unesite lozinku">
            </div>
            <div class="form-group">
              <a id="reg1">Potvrda lozinke</a>
               <input v-model="password2" type="password2" class="form-control" id="confirmPasswordField" placeholder="Potvrda lozinke">
            </div>
            <button type="submit" class="btn btn-primary">Registracija</button>
          </form>
    </div>
    <div class="col"></div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    signup () {
      if (this.password === (this.password2)) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error);
        if (this.$route.name == 'registracija&apos;')
          this.$router.push({name: 'IzabirIgre'}).catch(err => console.log(err))
      });
    }
      else{
        console.log("passwords do not match&quot;");
        return;
      }
    }
  }
}
</script>

<style>
#naslov{
  color: white;
  margin-right: 0;
  font-size: 50px;
}
#reg1{
  color: white;
  margin-right: 0;
  font-size: 20px;
}
 #lpos{
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
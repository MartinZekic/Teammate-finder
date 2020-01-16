<template>
<body>
  <nav class="navbar navbar-default no-margin">
    
    <div class="navbar-header fixed-brand">
      <a class="navbar-brand"><i class="fa fa-rocket fa-4"></i> <img id="navlogo" src="../assets/logo.png"> </a>
       <div class=usernav>
        <router-link :to="{name: 'ProfilP'}">
      <button type="button" class="btn btn-outline-primary" >Postavi profil</button>
        </router-link>
      <router-link to="/profil"><img id="navavatar" src="../assets/pplaceholder.jpg"/>
      <span id="korime">{{ userEmail }}</span></router-link>
      <div class="od">
      <a @click="logout" href="#" id=odjava>Odjava</a>
      </div>
      </div>
      </div>

    <!-- navbar-header-->


    <!-- bs-example-navbar-collapse-1 -->
  </nav>
  <div id="wrapper">
    <!-- Sidebar -->
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav nav-pills nav-stacked" id="menu">

        <li class="active">
          <a href="/igraci"><span class="fa-stack fa-lg pull-left"><i class="fa fa-dashboard fa-stack-1x "></i></span> Pretraga igrača</a>
          <ul class="nav-pills nav-stacked" style="list-style-type:none;">
          </ul>
        </li>
        <li>
          <a href="/timovi"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span> Moji timovi</a>
          <ul class="nav-pills nav-stacked" style="list-style-type:none;">

          </ul>
        </li>
        <li>
          <a href="/pozivi"><span class="fa-stack fa-lg pull-left"><i class="fa fa-cloud-download fa-stack-1x "></i></span>Pozivi</a>
        </li>
        <li>
          <a href="/inbox"> <span class="fa-stack fa-lg pull-left"><i class="fa fa-cart-plus fa-stack-1x "></i></span>Inbox</a>
        </li>
      </ul>
    </div>
    <!-- /#sidebar-wrapper -->
   
  </div>
  <!-- /#wrapper -->
  <!-- jQuery -->
</body>
</template>

<script>
import store from '@/store.js'
export default {
  methods: {
    logout() {
      firebase.auth().signOut()
    }
  },
data(){
return store
}
}
</script>

<style>

.btn-outline-primary{
font-size: 20px;
width:170px;
height: 50px;
}

#navavatar{
  margin-left:17px;
  border-radius:50%;
  height: 60px;
}

.usernav{
position: absolute;
margin-left:75%;
margin-top:-73px;
}

#korime{
margin-left:15px;
font-size: 20px;
color:white;
}

.od {
  position: relative;
  margin-left: 330px;
  margin-top:-15px;
}
#odjava{
  margin-right: 100px;
  color:rgb(8, 110, 243);
}

.sidebar-nav li a{
margin-top:25px;
font-size:25px;
}

.navbar{
background:rgb(0, 0, 0);
border-bottom: 1px solid #d2d7da;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1050;
}

#navlogo{
height: 80px;
}

#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}


#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: rgb(0, 0, 0);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-right: 1px solid #d2d7da;
}



.fixed-brand {
  width: auto;
}
/* Sidebar Styles */

.sidebar-nav {
  position:fixed;
  top: 100px;
  width: 300px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 2px;
}

.sidebar-nav li {
  text-indent: 15px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #FAFAFA;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-left: #0e02b8 2px solid;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
  color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}

.no-margin {
  margin: 0;
}

@media(min-width:768px) {
  #wrapper {
    padding-left: 250px;
  }
  .fixed-brand {
    width: 250px;
  }

  #sidebar-wrapper {
    width: 300px;
  }

  
  }


body {
  background: #000220 no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
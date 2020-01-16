<template>
<div class="igraci">
<div id=userinfo>
<ul id=red>
<li><img id="avatar" src="../assets/pplaceholder.jpg"/></li>
<li id="imekor">{{ userEmail }}</li>
</ul>
</div>

<div id=userinfo>
<ul id=red>
<li><img id="avatar" src="../assets/pplaceholder.jpg"/></li>
<li id="imekor">{{ userEmail }}</li>
</ul>
</div>

</div>
</template>


<script>
import store from '@/store.js'
export default {
    data(){
return store
}
}
</script>

<style>

#userinfo{
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
height:180px;
}
.igraci{
padding:50px;
background: rgb(20, 20, 20);
margin-top: 2%;
width:2000px;
height:350px;
border-bottom:solid 1px white;
border-top:solid 1px white;
}
</style>
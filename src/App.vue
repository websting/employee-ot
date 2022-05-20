<template>
  <div id="app">
    
    <div id="nav">
      <div class="logo">Employee OT</div>
      
      <router-link :to="{name: 'List'}" class="list">OT-List</router-link>
      <router-link :to="{name: 'Form'}">OT-Sign</router-link>
      <router-link :to="{name: 'Index'}">Home</router-link>
      <router-link :to="{name: 'Login'}"></router-link>     
      <router-link :to="{name: 'Register'}" ></router-link>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

export default {
  name: 'app',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created(){
    if(getAuth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = getAuth().currentUser.email;
    }
  },
  methods:{
    logout: function() {
      getAuth().signOut().then(() => {
        this.$router.push('/');
    
        alert('You are now logged out. To return please login.');
      })
    }
  },
  initializeApp
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 10px 20px;
  box-sizing: border-box;
  background: rgba(0,0,0,0.5);
  border-bottom: 1px solid #fff;

}

#nav .logo{
  padding: 22px 20px;
  height: 80px;
  float: left;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  color: chartreuse;
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  float: right;
  margin: 0;
  padding: 2px 30px;
  display: flex;
  line-height: 80px;
  font-size: 14px;
  text-transform: uppercase;
}
#nav a:hover{
	background-color:cornflowerblue;
  border-radius: 6px;
  color: chartreuse;
}

@media screen and (max-width: 768px){
#nav .logo{
  padding: 30px 10px;
  height: 40px;
  float: left;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;

}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  float: right;
  margin: 0;
  padding: 20px 15px;
  display: flex;
  line-height: 40px;
  font-size: 10px;
  text-transform: uppercase;
}

@media screen and (max-width: 480px){
  #nav .logo{
  padding: 30px 6Px;
  height: 25px;
  font-size: 7px;
  font-weight: bold;
  text-transform: uppercase;
 
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  float: right;
  margin: 0;
  padding: 20px 10px;
  display: flex;
  line-height: 30px;
  font-size: 7px;
  text-transform: uppercase;
}
}
}
</style>

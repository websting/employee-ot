<template>
  <div class="container">
    <div class="title2">
      <button class="w3-btn w3-hover-light-blue w3-center" style="width:40%" @click="logout"><big>Logout</big></button>
      <!--<button type="button" class="btn" id="logout" @click="logout">Logout >>></button>-->
    </div>
    
<table id="myTable" class="w3-table-all w3-centered">
 
  <thead>
    <tr class="w3-blue">
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(1)')" style="cursor:pointer">Id</th>
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(2)')" style="cursor:pointer">First</th>
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(3)')" style="cursor:pointer">Last</th>
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(4)')" style="cursor:pointer">Day</th>
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(5)')" style="cursor:pointer">Time</th>
      <th onclick="w3.sortHTML('#myTable', '.item', 'td:nth-child(6)')" style="cursor:pointer">Preference</th>
    </tr>
  </thead>
  <tbody v-for="post in posts" :key="post.id">
      <tr class="item">
    <td>{{post.id}}</td>
    <td>{{post.first}}</td>
    <td>{{post.last}}</td>
    <td>{{post.day}}</td>
    <td>{{post.time}}</td>
    <td>{{post.preference}}</td>
  </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

export default {
  data() {
    return {
      posts: [],
      errors: "",
      isLoggedIn: false,
      currentUser: false
    };
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
  mounted() {
    fetch("https://employeeovertimeapi-default-rtdb.firebaseio.com/posts.json")
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .then((response) => console.log(response))
      .catch((err) => console.log(err.message));
  },
  initializeApp
  }
</script>

<style scoped>
.title2{
  color: white;
  margin-top: 125px;
  margin-bottom: 25px;
}

#logout {
  background-color:orangered;
}

 #logout:hover{
	background-color:cornflowerblue;
  border-radius: 6px;
}

</style>
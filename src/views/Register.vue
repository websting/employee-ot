<template>
  <div class="register">

    <div class="container">
      <h1 class="w3-text-white">Register</h1>
      <div class="form-floating mb-3">
        <input type="email" class="form-control form-control-lg" id="email" v-model='email' placeholder="Email">
          <label for="floatingInput">Email address</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control form-control-lg" id="password" v-model="password" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div><br />

      <div>
        <button v-on:click='register' type="button" class="btn btn-secondary btn-lg">Send</button>
        <p class="paragraph">
          <span class="w3-text-white">Already a Pro -</span>
          <router-link class="link" :to="{name: 'Login'}"> Login here</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

  export default {
    name: 'Register',
    data: function() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      register: function(e) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(user => {
          alert(`Account created for ${user.email}`);
          this.$router.push('/List');
          
        },
        err => {
          alert(err.message);
        });
        e.preventDefault();
      }
    },
    initializeApp
  }
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
h1 {
  padding: 15px;
}
.link {
  text-decoration: none;
  color:chartreuse;
}
.paragraph {
  padding: 10px;
}
</style>

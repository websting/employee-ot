<template>
  <div class="home">
    <div class="container">
      <h1 class="w3-text-white">Login</h1>
      <div class="form-floating mb-3">
        <input type="email" class="form-control form-control-lg" id="email" placeholder="Email" v-model="email">
          <label for="floatingInput">Email address</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control form-control-lg" id="password" placeholder="Password" v-model='password'>
        <label for="floatingPassword">Password</label>
      </div><br />

      <div>
        <button v-on:click='login' type="button" class="btn btn-secondary btn-lg">Send</button>
        <p class="paragraph">
          <span class="w3-text-white">Still a Rookie?</span>
          <router-link class="link" :to="{name: 'Register'}"> Register here..</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

  export default {
    name: 'Login',
    data: function() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login: function(e) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
        .then(userCredential => {
          alert(`You are now logged in as:  ${userCredential.user.email}`);
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
  color: chartreuse;
}
.paragraph{
  padding: 10px;
}
</style>



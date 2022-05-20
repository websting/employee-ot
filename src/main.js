import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";



Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXBDBR3783GbiS2EeWbwSiRDn_fIhxqEQ",
  authDomain: "employeeovertimeapi.firebaseapp.com",
  databaseURL: "https://employeeovertimeapi-default-rtdb.firebaseio.com",
  projectId: "employeeovertimeapi",
  storageBucket: "employeeovertimeapi.appspot.com",
  messagingSenderId: "941323481294",
  appId: "1:941323481294:web:4d4ec7731195032f0da09f",
  measurementId: "G-TZ2JXLWQ65"
};

// Initialize Firebase
initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

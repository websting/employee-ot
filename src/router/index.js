import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Form from '../components/Form.vue'
import List from '../components/List.vue'
import Register from '../views/Register.vue'
import Message from '../components/Message.vue'

import{ initializeApp } from 'firebase/app';
import {auth} from 'firebase/auth';
import { getAuth } from "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/Form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  
  {
    path: '/List',
    name: 'List',
    component: List,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Message',
    name: 'Message',
    component: Message,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!getAuth().currentUser) {
      next({
        path: '/Login',
        query: {
          redirect: to.fullPath
        }
      });
    }else {
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)) {
    if(getAuth().currentUser){
      next({
        path: '/Login',
        query: {
          redirect: to.fullPath
        }
      });
    }else {
      next();
    }
  }else {
    next();
  }
})
initializeApp
getAuth


export default router

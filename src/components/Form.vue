<template>
<div class="container">
  
          <h1>Overtime Form</h1>
    <!--input form-->
    <form class="w3-container w3-card-4 w3-margin w3-white" @submit.prevent="postData" method="post" action="/api">
        <!--Name and id form-->
        <div class="w3-row-padding w3-margin">
        <div class="w3-third">
            <input class="w3-input" type="text" placeholder="First Name" name="first" v-model="formData.first" />
        </div>
        <div class="w3-third">
            <input class="w3-input" type="text" placeholder="Last Name" name="last" v-model="formData.last" />
        </div>
        <div class="w3-third">
            <input class="w3-input" type="text" placeholder="User Id" name="id" v-model="formData.id" />
        </div>
        </div>

    <!--Days dropdown-->
    <p>
      <select class="w3-select w3-padding w3-hover-light-blue w3-text-blue" name="day" v-model="formData.day">
        <option value="" disabled selected class="w3-center">Pick a day</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
      </select>
    </p>

      <!--times dropdown-->
      <p>
      <select class="w3-select w3-padding w3-hover-light-blue w3-text-blue" name="time" v-model="formData.time">
        <option value="" disabled selected class="w3-center">Choose time</option>
        <option value="7am-3pm" >7am-3pm</option>
        <option value="3pm-11pm">3pm-11pm</option>
        <option value="11pm-7am">11pm-7am</option>
      </select>
      </p>
    <!--preference dropdown-->
    <p>
      <select class="w3-select w3-padding w3-hover-light-blue w3-text-blue" name="preference" v-model="formData.preference">
        <option value="" disabled selected class="w3-center">Preference ?</option>
        <option value="1" >One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </p>
        
      <!--submit event-->
        <p><button class="w3-btn w3-dark-grey w3-center" style="width:50%" @click="goToMessage()"><big>Submit</big></button></p>

    </form>
    <p class="w3-margin">
      Overtime is offered based
      on seniority. Deadline is Friday at 7:00 am.
    </p><br />
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  name: 'EmployeeForm',
  data() {
    return {
      formData:{
        first: '',
        last: '',
        id: '',
        day: '',
        time: '',
        preference: ''
      },
    }
  },
  methods: {
    postData() {
        axios.post('https://employeeovertimeapi-default-rtdb.firebaseio.com/posts.json', this.formData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        this.$router.push({name: 'Message'})// Redirect user to Message page.
    },       
  }
};
</script>

<style scoped>

p{
  color: chartreuse;
}
.w3-btn{
  margin-top: 20px;
  margin-bottom: 20px;
}
h1{
  color: white;
}
.container{
  
  margin-top: 150px;
}

@media screen and (max-width: 320px){
  .w3-btn{
    padding: 5px;
  }

  }

</style>
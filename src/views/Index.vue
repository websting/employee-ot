<template>
  <div id="content" class="image"><!--bottom container-->
	  <div class="overlay"><!--overlay containe-->
      <span class="title">Overtime has never been easier!</span>
          <router-link :to="{name: 'Form'}"><button v-on:click='register' type="button" class="btn btn-secondary btn-lg">Lets get started</button>
			</router-link>
      </div>
  </div>
</template>

<script></script>
	
<style>
*{
	margin: 0;
	padding: 0;
	
}
#content{
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center; /* x-axis */
	align-items: center; /* y-axis */
	flex-direction:column;
	}
p{
	margin-top: 0px;
	
	
}
.btn:hover{
	background-color:cornflowerblue
}
.image{
	background-image: url('/home/ah/Documents/vue/employee-ot/src/assets/westSide.png');
	background-size:cover;
	background-repeat: no-repeat;
	height: 100vh;
}
.overlay {
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title{
	letter-spacing: 5px;
	font-size: 20px;
	margin-bottom: 15px;
}
</style>
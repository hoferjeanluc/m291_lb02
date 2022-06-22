<template>
  <div class="app-container">
    <div id="app">
      <div id="nav">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/shop">Shop</router-link></li>
          <li><router-link to="/todolist">To Do List</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
        </ul>
      </div>
      <router-view/>
    </div>
    <div class="footer">
      <p> Fitness4Life - 078 123 23 23 - info@fit4life.ch</p>
    </div>


  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';

ul {
  margin: 0 !important;
}
footer {
  text-align: center;
  background-color: black;
  color: white;
}

p {
  text-align: center;
  margin: 20px !important;
}

.app-container {
  height: 100%;
}
</style>




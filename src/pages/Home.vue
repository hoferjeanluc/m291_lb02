<template>
  <div class="bg">

    <MyVueDirectives/>
    <h1 class="title"></h1>
  </div>
</template>

<script>
import VueDirective from "../components/VueDirectives"

export default {
  name: 'app',
  components: {
    MyVueDirectives: VueDirective

  }
}
</script>

<style lang="scss">

.bg {
  background-image: url("../assets/bg.jpg");
  height: 90vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: transparent 1px solid;
}



</style>
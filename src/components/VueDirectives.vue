<template>
  <div>
    <h1 v-show="true" v-text="mytext">Loading...</h1>
    <h2 v-show="true" v-html="myhtml" />
    <a class="sortiment"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
       @click="gotoShop()"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // v-text
      mytext: 'Willkommen auf dem Gym Store von Fit4Life!',
      // v-html
      myhtml: 'Tauche mit uns ein in die wunderbare Welt des Trainings.',
      // v-bind
      link: {
        url: 'http://localhost:8080/shop',
        tabindex: '0',
        title: 'Unser Sortiment'
      },
    }
  },
  methods: {
    gotoShop(){
      this.$router.push('/shop');
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  text-align: center;
  margin-top: 300px;
  font-size: 60px;
}

h2 {
  font-weight: normal;
  color: white;
  text-align: center;
  margin-bottom: 20px;
}
a {
  padding: 5px 25px;
  font-size: 20px;
  left: 0;
  text-align: center;
  color: black;
  background-color: white;
  border-radius: 25px;
  width: 10%;
}

.sortiment {
  margin-left: 45%;
}

.sortiment:hover {
  text-decoration: none;
  opacity: 0.8;
  color: black;
}

</style>

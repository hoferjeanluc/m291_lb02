<template>
  <div class="container">
    <div class="user-input">
      <button class="button-warenkorb" @click="goIcon()">Zum Warenkorb</button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    goIcon() {
      this.$router.push('/warenkorbbutton');
    }
  }
}
</script>

<style lang="scss">
//Import of global-style

$color-green: #4fc08d;
$color-grey: #2c3e50;

.container {
  max-width: 600px;
  margin: 80px auto;
}


.user-input {
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  input {
    width: 100%;
    padding: 10px 6px;
    margin-right: 10px;
  }
}

// Buttons
button {
  appearance: none;
  padding: 12px;
  margin: 2px;

  font-weight: bold;
  border-radius: 45px;
  border: none;
  background: $color-grey;
  color: white;
  white-space: nowrap;

  + button {
    margin-left: 10px;
  }
}

.button-warenkorb {
  float: right;
  margin-top: 170px;
  background: #333333;
}

.button-warenkorb:hover {
  opacity: 0.6;
}

</style>

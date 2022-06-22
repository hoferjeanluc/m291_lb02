<template>
  <div>
    <div class="user-input">
      <button class="button-faq" @click="goBack()">Zurück zum FAQ</button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">

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

.button-faq {
  float: left;
  margin-top: 20px;
  background: #333333;
}

.button-faq:hover {
  opacity: 0.6;
}

</style>
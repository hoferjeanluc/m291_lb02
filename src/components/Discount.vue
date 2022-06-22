
<template>
  <div class="watcher">
    <div>
      Profitiere zusätzlich bei deinem nächsten Einkauf bei uns von 10% Rabatt, wenn du unseren Newsletter abonnierst.
      <a class="discount" href="#" @click="updateDiscount">Erhalte {{ discount }}% Rabatt</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      discount: 0,
    }
  },
  watch: {
    discount: {
      handler: function (newVal){
        console.log(`actual(${newVal}%)`);
      },
      immediate: false,
      deep: true
    }
  },
  methods: {
    updateDiscount(){
      this.discount = this.discount + 10;
    }
  }
}
</script>
<style lang="scss">
.watcher {
  margin-top: 15px;
  width: 35%;
}

.discount {
  display: inline-block;
  background: #333333;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
}

.discount:hover {
  text-decoration: none;
  color: white;
  opacity: 0.6;

}

</style>

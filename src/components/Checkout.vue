<template>
  <div>
    Deine Bestellung kostet {{ cartTotal.toFixed(2) }} CHF.
    <b-button class="checkout" variant="primary" v-show="cartTotal > 0" @click="checkout"><strong>Bezahlen</strong></b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    checkout() {
      alert('Vielen Dank für deine Bestellung');
    }
  }
}
</script>

<style lang="scss">
.checkout {
  padding: 5px 15px;
  background-color: white;
  color: green;
  border: 2px solid green;
}

.checkout:hover {
  background-color: green;
  color: white;
  border: 2px solid;
}
</style>
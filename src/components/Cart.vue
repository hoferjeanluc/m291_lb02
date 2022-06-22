<template>
  <div class="cart">
    <h2>Dein Einkauf</h2>
    <table>
      <thead>
      <tr>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, idx) in cart" :key="idx">
        <td>{{ product.quantity  }}</td>
        <td>{{ product.name }}</td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Cart',
  computed: mapState(['cart'])
}
</script>

<style lang="scss">
.cart {
  width: 50%;
  float: right;
}

</style>
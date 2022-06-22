<template>
  <div class="warenkorb">
    <h1>Warenkorb</h1>


    <MyCheckout/>
    <MyDiscount/>

  </div>
</template>

<script>
import Discount from './../components/Discount'
import Checkout from './../components/Checkout'

export default {
  name: 'app',
  components:{
    MyDiscount: Discount,
    MyCheckout: Checkout


  }
}
</script>

<style lang="scss">
.warenkorb {
  margin: 30px;
}




</style>
<template>
  <div class="store">
    <h1>Store</h1>

    <MyProducts/>
    <MyCart/>
    <MyIcon/>

  </div>
</template>

<script>
import Products from './../components/Products'
import Warenkorbicon from '../components/Warenkorbbutton'
import Cart from './../components/Cart'

export default {
  name: 'app',
  components:{
    MyProducts: Products,
    MyIcon: Warenkorbicon,
    MyCart: Cart


  }
}
</script>

<style lang="scss">
.store {
  margin: 30px;
}

</style>
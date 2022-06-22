<template>
  <div class="antwort">
    <h1>{{$route.params.content.frage}}</h1>
    {{$route.params.content.antwort}}
    <MyFaqbutton/>
  </div>
</template>

<script>
import faqbutton from './../components/faqbutton'

export default {
  name: "SingleMessage",
  components: {
    MyFaqbutton: faqbutton
  }
}
</script>

<style lang="scss">
.antwort {
  margin: 30px;
}
</style>
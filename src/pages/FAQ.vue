
<template>
  <div class="faq">
    <h1>FAQ</h1>
    <div v-for="(m, i) in messages" :key="i" >
      <router-link class="fragen" :to="{ name: 'singlemessage', params: {content: m}}">
        {{ m.frage }}
      </router-link>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
      {frage: 'Von wo kommen unsere Produkte?', antwort: "Unsere Produkte werden alle in der Schweiz hergestellt."},
      {frage: "Was bieten wir an?", antwort: "Wir bieten alle möglichen Geräte an um von Zuhause zu trainieren."},
      {frage: "Haben Sie Fragen zu ihrem persönlichen Training?", antwort: "Schreiben sie uns gerne eine Mail an info@fit4life.ch"},
      ]
    }
  }
}
</script>

<style lang="scss">
.faq {
  margin: 30px;
}

.fragen {
  color: black;
}

.fragen:hover {
  text-decoration: none;
}

</style>
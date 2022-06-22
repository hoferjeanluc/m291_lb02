<template>
  <div>

    <MyToDoList/>

  </div>
</template>

<script>
import ToDoList from "../components/Checklist"

export default {
  name: 'app',
  components: {
    MyToDoList: ToDoList

  }
}
</script>

<style lang="scss">


</style>
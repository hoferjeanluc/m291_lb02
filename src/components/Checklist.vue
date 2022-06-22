<template>
  <div class="checklist">

    <h1>To Do List</h1>
    <div class="user-input">
      <input
          placeholder="Task mit Enter hinzufügen"
          v-model="input"
          @keyup.enter="addItem"
          ref="input"
      /><button @click="addItem">Zur Liste hinzufügen</button>
    </div>

    <ul class="entries" v-if="shoppingList">
      <li v-for="item in shoppingList" :key="item" class="item"
      ><span>{{ item }}</span>
        <button class="button--remove" @click="deleteItem(item)">Löschen</button>
      </li>
    </ul>
    <br />
    <button class="button--delete" @click="deleteItem()">Alle Einträge löschen</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      shoppingList: [],
    }
  },
  methods: {
    addItem() {
      // Don't allow adding to the list if empty
      if (!this.input) return
      this.shoppingList.push(this.input)
      // Clear the input after adding
      this.input = ''
      // Focus the input element again for quick typing!
      this.$refs.input.focus()
    },
    deleteItem(item) {
      //only for info purposes
      let index = this.shoppingList.indexOf(item);
      console.log(`item: ${item} at index: ${index}`);
      //no parameter provided ..
      if (item == null){
        //.. deleteAll has been pressed
        this.shoppingList = [];
      } else {
        //assign filtered shopping list without deleted item
        this.shoppingList = this.shoppingList.filter(el => el !== item);
      }
    },
    deleteItem_v2(i) {
      if (i == null) {
        this.shoppingList = []
      } else {
        this.shoppingList = this.shoppingList.filter((item,el) => el !== i);
      }
      //Verkürzte Variante von deleteItem(i)
      // this.shoppingList = i
      //     ? this.shoppingList.filter((item, x) => x !== i)
      //     : []
    },
  },
}
</script>

<style lang="scss">
$color-green: #4fc08d;
$color-grey: #2c3e50;

.checklist {
  max-width: 600px;
  margin: 80px auto;
}

.item {
  justify-content: space-between;
  align-items: center;
}

// Type
.h2 {
  font-size: 21px;
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
  padding: 10px;

  font-weight: bold;
  border-radius: 10px;
  border: none;
  background: $color-grey;
  color: white;
  white-space: nowrap;

  + button {
    margin-left: 10px;
  }
}

.button--delete {
  display: block;
  margin: 0 auto;
  background: red;
}

.button--remove {
  background: none;
  color: red;
  font-size: 11px;
  align-self: flex-end;
}

.entries {
  display: block;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: white;

  > li {
    margin-bottom: 4px;
  }
}
</style>

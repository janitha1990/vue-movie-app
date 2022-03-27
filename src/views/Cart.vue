<script setup>
import { inject, ref } from "vue";
import ListItem from "../components/ListItem.vue";

const store = inject("store");
// Fn to get state from local storage

store.methods.getLocalStorage();
// Fn to delete item from cart
function listItemDelete(id) {
  const _temp = [...store.state.selectedMovies];
  const _result = _temp.filter((elm) => elm.id !== id);

  store.state.selectedMovies = _result;
  store.state.counter--;
  store.methods.setLocalStorage();
}
</script>


<template>
  <div class="mt-8">
    <ul role="list" class="divide-y divide-gray-200 max-w-3xl mx-auto my-0">
      <ListItem
        v-for="movie in store.state.selectedMovies"
        :key="movie.id"
        :movie="movie"
        :listItemDelete="listItemDelete"
      />
    </ul>
  </div>

  <div class="mt-10 p-4 flex flex-wrap justify-center"></div>
</template>


<script setup>
import { inject, ref } from "vue";
import ListItem from "../components/ListItem.vue";

const store = inject("store");

function listItemDelete(id) {
  console.log(id);
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


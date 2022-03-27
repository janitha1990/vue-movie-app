<script setup>
import { ref } from "vue";

const _baseUrl = ref("https://image.tmdb.org/t/p/original/");
const props = defineProps({
  movie: Object,
});
// console.log(props.movie.release_date);
</script>

<template>
  <div
    className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
  >
    <div class="overflow-hidden">
      <img :src="_baseUrl + movie.poster_path" class="w-full" />
    </div>

    <div className="p-2">
      <h2
        className=" mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold"
      >
        {{ movie.title }}
      </h2>
      <p className="truncate max-w-md">{{ movie.overview }}</p>

      <p className="flex items-center opacity-0 group-hover:opacity-100">
        {{ movie.release_date }}
      </p>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

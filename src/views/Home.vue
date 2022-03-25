<template>
  <div class="w-full flex justify-center">
    <input type="text" :value="name" @input="handleSearch" />
    <span>{{ name }}</span>
  </div>

  <div class="mt-10 p-4 flex flex-wrap justify-center">
    <div class="ml-4 text-2xl text-blue-400">
      <router-link :to="`/cart`"> Cart </router-link>
    </div>
    <div
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"
    >
      <Thumbnail v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script >
import { reactive, toRefs, watchEffect, ref, watch } from "vue";
import Thumbnail from "../components/Thumbnail.vue";
export default {
  name: "Home",
  setup() {
    const movies = ref([]);
    const name = ref("");

    watchEffect(() => {
      console.log("name: " + name.value);
      getMoviesQuery();
    });

    function getMoviesQuery() {
      console.log("getMoviesQuery");
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${name.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          movies.value = data.results;
          console.log(movies);
        });
    }

    function debounce(fn, wait) {
      let timer;
      return (event) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          if (typeof fn === "function") {
            fn(event);
          }
        }, wait);
      };
    }

    function setInputValue(event) {
      const target = event.target;
      name.value = target.value;
    }
    const handleSearch = debounce(setInputValue, 600);

    return { movies, name, handleSearch };
  },
  components: {
    Thumbnail,
  },
};
</script>
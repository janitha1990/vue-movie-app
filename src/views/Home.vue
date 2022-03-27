<template>
  <div class="w-full flex justify-center">
    <div class="mt-3 w-1/4 mr-auto ml-auto">
      <div
        class="
          px-2
          flex
          items-center
          border-1
          bg-white
          border
          shadow-md
          rounded-full
        "
      >
        <input
          class="
            rounded-full
            w-full
            py-2
            px-6
            text-gray-700
            leading-tight
            focus:outline-none
          "
          type="text"
          :value="searchParam"
          @input="handleSearch"
        />
      </div>
    </div>
  </div>

  <div class="mt-10 p-4 flex flex-wrap justify-center">
    <div
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"
    >
      <Thumbnail
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @click="() => getClickedItem(movie)"
      />
    </div>
  </div>
</template>

<script >
import { watchEffect, ref, inject } from "vue";
import Thumbnail from "../components/Thumbnail.vue";

export default {
  name: "Home",
  setup() {
    const movies = ref([]);
    const searchParam = ref("");
    const store = inject("store");

    watchEffect(() => {
      searchParam.value !== "" && getMoviesQuery();
    });

    // Fn to call api for movies
    function getMoviesQuery() {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&query=${searchParam.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          movies.value = data.results;
        });
    }

    // Fn to get state from local storage.
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

    // Fn to input search value to searchParam
    function setInputValue(event) {
      const target = event.target;
      searchParam.value = target.value;
    }
    // Fn to add selected movie to store
    function getClickedItem(movie) {
      const _movie = store.state.selectedMovies.find(
        (item) => item.id === movie.id
      );
      if (_movie === undefined)
        store.state.selectedMovies.push(movie),
          store.state.counter++,
          store.methods.setLocalStorage();
    }

    // Fn to handle search input
    const handleSearch = debounce(setInputValue, 600);
    // Fn to get state from local storage
    store.methods.getLocalStorage();
    return { movies, searchParam, handleSearch, getClickedItem };
  },
  components: {
    Thumbnail,
  },
};
</script>
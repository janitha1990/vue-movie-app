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
          :value="name"
          @input="handleSearch"
        />
      </div>
    </div>

    <!-- <span>{{ name }}</span> -->
  </div>

  <div class="mt-10 p-4 flex flex-wrap justify-center">
    <!-- <div class="ml-4 text-2xl text-blue-400">
      <router-link :to="`/cart`"> Cart </router-link>
    </div> -->
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
    const name = ref("");
    // const selectedMovie = ref({});
    const store = inject("store");
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

    function getClickedItem(movie) {
      // selectedMovie.value = movie;

      const _movie = store.state.selectedMovies.find(
        (item) => item.id === movie.id
      );
      if (_movie === undefined)
        store.state.selectedMovies.push(movie), store.state.counter++;
      // store.state.selectedMovies.push(movie);
    }
    const handleSearch = debounce(setInputValue, 600);

    return { movies, name, handleSearch, getClickedItem };
  },
  components: {
    Thumbnail,
  },
};
</script>
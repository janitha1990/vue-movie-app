<script setup>
import { ref } from "vue";
const props = defineProps({
  movie: Object,
  listItemDelete: Function,
});

const _baseUrl = ref("https://image.tmdb.org/t/p/original/");
</script>


<template>
  <li class="flex py-6">
    <div
      class="
        w-40
        h-32
        flex-shrink-0
        overflow-hidden
        rounded-md
        border border-gray-200
      "
    >
      <img
        :src="_baseUrl + movie.poster_path"
        alt=""
        class="h-full w-full object-cover object-center"
      />
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-white">
          <h3>
            {{ movie.title }}
          </h3>
          <p class="ml-4">{{ movie.release_date }}</p>
        </div>
        <p class="mt-1 text-sm text-gray-400 line-clamp-3">
          {{ movie.overview }}
        </p>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <p class="text-gray-400 flex flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="ml-1">{{ movie.vote_average }}</span>
        </p>

        <div class="flex">
          <button
            type="button"
            class="font-medium text-indigo-600 hover:text-indigo-500"
            @click="listItemDelete(movie.id)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
import { inject } from "vue";
const store = inject("store");
</script>

<template>
  <nav class="bg-sky-600">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div>
            <router-link
              class="flex items-center py-5 px-2 text-white hover:text-gray-900"
              to="/"
            >
              <svg
                class="h-6 w-6 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                /></svg
              ><span class="font-bold">Movie DB</span></router-link
            >
          </div>
        </div>

        <!-- secondary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link
            :to="`/cart`"
            class="
              py-2
              px-3
              bg-yellow-400
              hover:bg-yellow-300
              text-yellow-900
              hover:text-yellow-800
              rounded
              transition
              duration-300
              relative
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <span
              v-if="store.state.counter !== 0"
              class="
                absolute
                rounded-full
                w-6
                h-6
                text-center
                leading-6
                top-0
                bg-red-600
                text-white
                -right-3
              "
              >{{ store.state.counter }}</span
            ></router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
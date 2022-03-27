<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <div>
    <Navigation />
    <div class="mt-6"><router-view /></div>
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navigation from "./components/Navigation.vue";
import store from "./store/index";
import { provide } from "vue";

export default {
  setup() {
    provide("store", store);
  },
  components: {
    Navigation,
  },
};
</script>



<style>
</style>

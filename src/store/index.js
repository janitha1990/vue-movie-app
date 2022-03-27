import { reactive } from "vue";

const state = reactive({
  counter: 0,
  selectedMovies: [],
});

export default {
  state,
};

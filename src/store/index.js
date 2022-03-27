import { reactive } from "vue";

const state = reactive({
  counter: 0,
  selectedMovies: [],
});

const methods = {
  // Fn to set state to local storage.
  setLocalStorage() {
    localStorage.setItem("state", JSON.stringify(state));
  },
  // Fn to get state from local storage.
  getLocalStorage() {
    const _state = JSON.parse(localStorage.getItem("state"));
    if (_state) {
      state.counter = _state.counter;
      state.selectedMovies = _state.selectedMovies;
    }
  },
};
export default {
  state,
  methods,
};

import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    loading: true,
    lightNavbar: false,
    activeSection: "home",
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = !!loading;
    },
    SET_LIGHT_NAVBAR(state, light) {
      state.lightNavbar = !!light;
    },
    SET_ACTIVE_SECTION(state, section) {
      state.activeSection = section;
    },
    setErrorType(state, errorType) {
      state.errorType = errorType;
    },
  },
});

export default store;

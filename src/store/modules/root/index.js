import { defineStore, acceptHMRUpdate } from "pinia";
import state from "./state";
import actions from "./actions";
import getters from "./getters";

const useRoot = defineStore("root", {
  // arrow function recommended for full type inference
  state: state,
  getters: getters,
  actions: {
    ...actions(),
  },
});

// make sure to pass the right store definition, `useRoot` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRoot, import.meta.hot));
}

export default useRoot;

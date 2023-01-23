import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import * as storeList from "@/store/list.js";

// Create the app
const app = createApp(App);

// Add the router
app.use(router);

// Add the store
app.use(store);

// initiate global store data
let stored = {};
// loop through available store
for (const key of Object.keys(storeList)) {
  // register available store
  stored = {
    ...stored,
    [key.replace(/use/, "").toLowerCase()]: storeList[key](),
  };
}
// set global store variable
app.config.globalProperties.$store = stored;

// Export the app
export default app;

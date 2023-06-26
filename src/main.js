import { createApp } from "vue";
import rsTravel from "./rsTravel.vue";
import store from "./store";

createApp(rsTravel).use(store).mount("#rs-travel");

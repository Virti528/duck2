import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import "element-plus/dist/index.css";
import router from "@/router";
createApp(App).use(router).mount("#app");

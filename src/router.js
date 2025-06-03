import { createRouter } from "vue-router";
import SignForm from "./components/SignForm.vue";

const routes = [
  { path: "/", component: SignForm },
  { path: "/about", component: SignForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import About from "../views/About.vue";
import Collar from "../views/Collar.vue";
import Anillo from "../views/Anillo.vue";
import Search from "../views/Search.vue";
import Checkout from "../views/Checkout.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/collar",
    name: "Collar",
    component: Collar,
    props: true,
  },
  {
    path: "/anillo",
    name: "Anillo",
    component: Anillo,
    props: true,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    props: true,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    props: true,
  },
  {
    path: "/shop/:gender/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

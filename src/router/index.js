import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/gerenciamento",
      name: "gerenciamento",
      component: () => import("../views/GerenciamentoView.vue"),
    },
    {
      path: "/tomeumcookie",
      name: "cookie",
      component: () => import("../views/CookieView.vue"),
    },
    {
      path: "/categorias",
      name: "categorias",
      component: () => import("../views/CategoriasView.vue"),
    },
    {
      path: "/autor",
      name: "autor",
      component: () => import("../views/AutorView.vue"),
    },
    {
      path: "/editora",
      name: "editora",
      component: () => import("../views/EditoraView.vue"),
    },
  ],
});

export default router;

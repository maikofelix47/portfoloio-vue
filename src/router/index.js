import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/Skills.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      children: [
        {
          path: "",
          name: "projects-home",
          component: () => import("../views/Projects.vue"),
        },
        {
          path: ":projectId",
          name: "project",
          component: () => import("../views/Project.vue"),
        },
      ],
    },
  ],
});

export default router;

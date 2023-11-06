import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

import { createRouter, createWebHistory } from "vue-router";

const routes = setupLayouts(generatedRoutes);

// Debug routes
console.log({ routes });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

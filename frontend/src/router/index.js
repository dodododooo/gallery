/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => {
    const statics = [];
    const children = [];
    let index = null;

    routes.forEach((route) => {
      if (route.path == '/') {
        index = route;
        index.redirect = '/home';
      } else if (route.meta?.static) {
        statics.push(route);
      } else {
        children.push(route);
      }
    });
    return [
      {
        ...index,
        children,
      },
      ...statics,
    ];
  },
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

// autoload routers
const modules = import.meta.globEager('./**/*.js')

// setting router
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
  routes: Object.entries(modules)
    .map(([path, m]) => {
      return m.default;
    })
    .flatMap((arr) => arr),
});

// set title page
router.beforeEach((to, from, next) => {
    document.title = `Fawaz Hutomi Abdurahman | ${to.meta.title}`;
    next();
});

export default router;

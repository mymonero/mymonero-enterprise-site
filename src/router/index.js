import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Terms from '../views/Terms.vue'
import Privacy from '../views/Privacy.vue'
import Success from '../views/Success.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 30,
        behavior: 'smooth',
      }
    }
  }
})
export default router
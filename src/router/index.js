import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue'
import Demographics from '../views/Demographics.vue'
import Services from '../views/Services.vue'
import Financial from '../views/Financial.vue'
import Startup from '../views/Startup.vue'
import Progress from '../views/Progress.vue'

const routes = [
  {
    path: '/',
    name: 'overview',
    component: Overview,
  },
  {
    path: '/demographics',
    name: 'demographics',
    component: Demographics,
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
  },
  {
    path: '/financial',
    name: 'financial',
    component: Financial,
  },
  {
    path: '/startup',
    name: 'startup',
    component: Startup,
  },
  {
    path: '/progress',
    name: 'progress',
    component: Progress,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/daycare-business-plan/' : '/'),
  routes,
})

export default router

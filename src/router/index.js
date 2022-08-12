import { createRouter, createWebHistory } from 'vue-router'
import TemplateEcommerce from '../views/templates/EcommerceTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TemplateEcommerce
    },
  ]
})

export default router

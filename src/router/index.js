import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/posts/:post_id',
    name: 'PostView',
    component: () => import('../views/PostView.vue'),
    props: true
  },
  {
    path: '/posts/edit/:post_id',
    name: 'PostEdit',
    component: () => import('../views/PostEdit.vue'),
    props: true
  },
  {
    path: '/posts/add',
    name: 'PostAdd',
    component: () => import('../views/PostAdd.vue'),
    // props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

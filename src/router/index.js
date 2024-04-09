import { createRouter, createWebHistory } from 'vue-router';
// Containers
const Container = () => import('@/layouts/container');

// Components
import dashboardPage from '@/views/dashboard';
const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'dashboard page',
    component: Container,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard page',
        component: dashboardPage
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

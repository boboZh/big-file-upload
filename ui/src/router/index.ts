import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routeModules = import.meta.glob('@/views/**/*.route.ts', {
  eager: true,
  import: 'default', // 加载默认导出
})
const routes: RouteRecordRaw[] = []
for (let key in routeModules) {
  routes.push(routeModules[key] as RouteRecordRaw)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/views/home/index.vue'),
    },
    ...routes,
  ],
})

export default router

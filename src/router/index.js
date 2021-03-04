import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchCity from "@/views/SearchCity";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Search',
    component: SearchCity
  },
  {
    path: '/WeatherDetails/:cityname',
    name: 'WeatherDetails',
    component: () => import('../views/WeatherDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

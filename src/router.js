import Vue from 'vue'
import Router from 'vue-router'
import Landing from "./views/Landing/index.vue"
import Home from "./views/Home/index.vue"
import Student from "./views/Student/index.vue"
import Elderly from "./views/Elderly/index.vue"
import Layout from "@/views/Layout";


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
    routes: [
      {
        path: '/landing',
        name: 'landing',
        component: Landing
      },
      {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: { name: "landing"},
        children: [
          {
            path: '/home',
            name: 'home',
            component: Home
          },
          {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About/index.vue')
          },
          {
            path: "/students",
            name: "students",
            component: Student
          },
          {
            path: "/elderly",
            name: "elderly",
            component: Elderly
          }
        ]
      }
    ]
})

export default router;
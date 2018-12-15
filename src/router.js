import Vue from 'vue'
import Router from 'vue-router'
import Landing from "./views/landing/index.vue"
import Student from "./views/student/index.vue"
import Join from "./views/join/index.vue"
import Elderly from "./views/elderly/index.vue"
import Layout from "@/views/layout"


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'landing',
        component: Landing
      },
      {
        path: '',
        name: 'layout',
        component: Layout,
        children: [
          {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/about/index.vue')
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
          },
          {
            path: "/students/join",
            name: "join",
            component: Join
          }

        ]
      }
    ]
})

export default router;

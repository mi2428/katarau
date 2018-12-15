import Vue from 'vue'
import Router from 'vue-router'
import Landing from "./views/landing/index.vue"
import Layout from "@/views/layout"
import Student from "./views/student/index.vue"
import Elderly from "./views/elderly/index.vue"
import Join from "./views/join/index.vue"
import Register from "./views/join/components/registration_form.vue"
import Confirm from "./views/join/components/confirmation.vue"
import SignIn from "./views/sign_in/index.vue"


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
            path: "/elderly",
            name: "elderly",
            component: Elderly
          },
          {
            path: "/students",
            name: "students",
            component: Student
          },
          {
            path: "/students/signin",
            name: "signin",
            component: SignIn
          },
          {
            path: "/students/join",
            name: "join",
            component: Join,
            redirect: {name: 'form'},
            children: [
              {
                path: 'form',
                name: 'form',
                component: Register
              },
              {
                path: 'confirm',
                name: 'confirm',
                component: Confirm,
                props: true
              }
            ]
          }
        ]
      }
    ]
})

export default router;

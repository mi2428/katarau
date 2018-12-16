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
import Profile from "./views/profile/index.vue"
import Me from "./views/profile/components/userprofile.vue"
import ModifyForm from "./views/profile/components/modified_form.vue"
import ConfirmMe from "./views/profile/components/confirmation.vue"
import Workrequest from "./views/work_request/index.vue"
import Help from "./views/help/index.vue"

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
            path: "/help",
            name: "help",
            component: Help
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
            path: "/students/workrequest",
            name: "workrequest",
            component: Workrequest
          },
          {
            path: "/students/profile",
            name: "profile",
            component: Profile,
            redirect: {name: 'me'},
            children: [
              {
                path: 'me',
                name: 'me',
                component: Me,
                props: true
              },
              {
                path: 'form',
                name: 'form',
                component: ModifyForm,
                props: true
              },
              {
                path: 'Modifyconfirm',
                name: 'Modifyconfirm',
                component: ConfirmMe,
                props: true
              }
            ]
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
                component: Register,
                props: true
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

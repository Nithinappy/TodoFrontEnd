import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7087e242 = () => interopDefault(import('..\\pages\\CreateTodo.vue' /* webpackChunkName: "pages/CreateTodo" */))
const _c4c0aadc = () => interopDefault(import('..\\pages\\GetAllTodos.vue' /* webpackChunkName: "pages/GetAllTodos" */))
const _6d685d0f = () => interopDefault(import('..\\pages\\UpdateTodo.vue' /* webpackChunkName: "pages/UpdateTodo" */))
const _20ad8fac = () => interopDefault(import('..\\pages\\UserHome.vue' /* webpackChunkName: "pages/UserHome" */))
const _2362b3ae = () => interopDefault(import('..\\pages\\UserLogin.vue' /* webpackChunkName: "pages/UserLogin" */))
const _fd5667f8 = () => interopDefault(import('..\\pages\\UserRegistration.vue' /* webpackChunkName: "pages/UserRegistration" */))
const _0cbf777c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreateTodo",
    component: _7087e242,
    name: "CreateTodo"
  }, {
    path: "/GetAllTodos",
    component: _c4c0aadc,
    name: "GetAllTodos"
  }, {
    path: "/UpdateTodo",
    component: _6d685d0f,
    name: "UpdateTodo"
  }, {
    path: "/UserHome",
    component: _20ad8fac,
    name: "UserHome"
  }, {
    path: "/UserLogin",
    component: _2362b3ae,
    name: "UserLogin"
  }, {
    path: "/UserRegistration",
    component: _fd5667f8,
    name: "UserRegistration"
  }, {
    path: "/",
    component: _0cbf777c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

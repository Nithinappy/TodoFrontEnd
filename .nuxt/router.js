import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c2d1c43 = () => interopDefault(import('..\\pages\\CreateTodo.vue' /* webpackChunkName: "pages/CreateTodo" */))
const _36a1b0b1 = () => interopDefault(import('..\\pages\\GetAllTodos.vue' /* webpackChunkName: "pages/GetAllTodos" */))
const _490d9710 = () => interopDefault(import('..\\pages\\UpdateTodo.vue' /* webpackChunkName: "pages/UpdateTodo" */))
const _58b2032a = () => interopDefault(import('..\\pages\\UserHome.vue' /* webpackChunkName: "pages/UserHome" */))
const _81c494e6 = () => interopDefault(import('..\\pages\\UserLogin.vue' /* webpackChunkName: "pages/UserLogin" */))
const _a8e67d76 = () => interopDefault(import('..\\pages\\UserRegistration.vue' /* webpackChunkName: "pages/UserRegistration" */))
const _65ad0da1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4c2d1c43,
    name: "CreateTodo"
  }, {
    path: "/GetAllTodos",
    component: _36a1b0b1,
    name: "GetAllTodos"
  }, {
    path: "/UpdateTodo",
    component: _490d9710,
    name: "UpdateTodo"
  }, {
    path: "/UserHome",
    component: _58b2032a,
    name: "UserHome"
  }, {
    path: "/UserLogin",
    component: _81c494e6,
    name: "UserLogin"
  }, {
    path: "/UserRegistration",
    component: _a8e67d76,
    name: "UserRegistration"
  }, {
    path: "/",
    component: _65ad0da1,
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

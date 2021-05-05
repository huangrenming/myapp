const routes = [
  { path: '/', component: () => import('@/views/index.vue') },
  { path: '/b', component: () => import('@/views/page.vue') },
  { path: '/c', component: () => import('@/views/page2.vue') }
]

// eslint-disable-next-line no-undef
const router = new VueRouter({
  routes
})

module.exports = router

// Routing
const routes = [
  { path: '/home', component: Home },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
]

const router = new VueRouter({ routes })

// App declaration
const App = new Vue({
  router
}).$mount('#app')
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import EvenetBus from '@/plugins/event-bus'
import msToMm from '@/filters/ms-to-mm'
import routes from '@/routes'
import blur from '@/directives/blur'
import store from '@/store/index'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(EvenetBus)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

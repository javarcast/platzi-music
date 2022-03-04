import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import eventBus from '@/plugins/event-bus'
import msToMm from '@/filters/ms-to-mm'
import routes from '@/routes'
import blur from '@/directives/blur'
import store from '@/store/index'
import i18n from '@/i18n'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(eventBus)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount('#app')

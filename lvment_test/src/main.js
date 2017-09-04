// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Search from './components/Search/index.js'
import Pagination from './components/Pagination/index.js'
import SortStrip from './components/SortStrip/index.js'
Vue.config.productionTip = false

Vue.use(Search)
Vue.use(Pagination)
Vue.use(SortStrip)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

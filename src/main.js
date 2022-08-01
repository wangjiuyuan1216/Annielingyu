import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false



import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})

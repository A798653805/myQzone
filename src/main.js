// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import vueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './components/interceptor/http'
import { emoji } from './components/emoji/emoji'
import '../static/less/common.less'

Vue.prototype.emoji = emoji

Vue.config.productionTip = false
Vue.prototype.axios = axios;

Vue.use(ElementUI);
Vue.use(vueQuillEditor)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  template: '<App/>',
  components: { App }
})

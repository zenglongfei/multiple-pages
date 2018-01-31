
import Vue from 'vue'
import Index from './index.vue'
import Dialog from '../../plugins/dialog.js'

Vue.use(Dialog)

new Vue({
  el: '#index',
  render: (h) => h(Index)
})

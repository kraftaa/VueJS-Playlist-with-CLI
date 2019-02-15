import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

// custom directives

Vue.directive('rainbow', {
    //functionality
    bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8)
    }
})

Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
var VueResource = require('vue-resource');

Vue.use(VueResource);




new Vue({
  el: '#app',
   data: {
    message: '',
  }
})

Vue.component('buscador', {
	template: '<div> Un buscador personalizado</div>'
	})

new Vue({
    el: '#my_view',
    data: {
       origin: ''
    },

    ready: function() {

        // GET request
this.$http.get('https://swapi.co/api/films', function (data) {            // set data on vm
            this.$set('origin', data)

        }).error(function (data, status, request) {
            // handle error
        })

      }
})
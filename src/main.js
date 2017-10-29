import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);


new Vue({
  el: '#app',

  data: {
       message: ' '
        },
methods:{
	post: function(){
    this.$http.post('https://jsonplaceholder.typicode.com/posts', {
    	title: this.message,
    	body: "hola",
    	userId:1
    }).then (function(data){
  	console.log(data);

  });
}}})
/*
new Vue({
  el: '#app1'

   data: {
    origin:''
  },
  methods:{
      getData: function(){
        this.$http.get('https://swapi.co/api/films').then(response => {
          this.origin = response.data;
        }, response => {
          console.log("ERROR")
        });
      }
    },
   mounted: function(){
      this.getData();
   } 
})
*/


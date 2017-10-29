new Vue({
  el: '#app',

  data: {
       message: ' '
        },
methods:{
	post: function(){
    this.$http.post('http://localhost/rest/books/word', {
    	query: this.message
    }).then (function(data){
  	console.log(data);

  });
}}})



new Vue({
  el: '#app',

  data: {
       message: ' ',
       origin:''
        },
methods:{
	post: function(){
    this.$http.post('http://localhost/rest/books/word', {query: this.message}).then (response => {
  	   console.log(response.data);
       this.origin = response.data
    });
  }}
})



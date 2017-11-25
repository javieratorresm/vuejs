new Vue({
  el: '#app',

  data: {
       message: ' ',
       checked_libro  : false,
       checked_year  : false,
       checked_autor  : false,
       checked_editorial  : false,
       origin:''
        },
methods:{
	post: function(){
    if(this.checked_libro == true){
     this.$http.post('http://localhost/rest/books/word', {query: this.message}).then (response => {
       console.log(response.data);
       this.origin = response.data
     })}
     if (this.checked_autor == true){
     this.$http.post('http://localhost/rest/books/word', {query: this.message}).then (response => {
       console.log(response.data);
       this.origin = response.data
     })}

if (this.checked_editorial== true){
     this.$http.post('http://localhost/rest/books/word', {query: this.message}).then (response => {
       console.log(response.data);
       this.origin = response.data
     })}
     if (this.checked_year == true){
     this.$http.post('http://localhost/rest/books/word', {query: this.message}).then (response => {
       console.log(response.data);
       this.origin = response.data
     })};
  


  }}
})

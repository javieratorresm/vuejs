new Vue({
  el: '#app',
   data: {
    message: '',
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

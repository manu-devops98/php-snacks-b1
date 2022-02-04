var app = new Vue({
  el: '#app',
  data: {
    cars: [],
    },
    methods: {
        getCars() {
            axios.get('http://localhost:8888/php-snacks-b1/server/controller.php?cars=all').then(
                (result) => {
                console.log(result);
          }
            ).catch((error) => {
          console.log(error);
      })      
    },
    },
    created() {
        this.getCars();
    }
})
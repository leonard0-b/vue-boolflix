Vue.config.devtools = true;

var app = new Vue (
  {
    el: "#root",
    data: {
      search: "",
      movies: [],
      series: [],
    },
    methods: {
      getMovie: function (){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e23a6721c7b2483cf2f94f3a47f7288d&language=it&query=${this.search}`)
          .then((response) => {
          console.log(response.data.results);
          this.movies = response.data.results;
          console.log(this.movies);

          this.movies.sort((a, b) => (b.vote_average - a.vote_average));

        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=e23a6721c7b2483cf2f94f3a47f7288d&language=it&query=${this.search}`)
          .then((response)=> {
            // console.log(response);
            this.series = response.data.results;
            // console.log(this.series);
            this.series.forEach((episodi) => {
              // console.log(episodi);
              this.movies.push(episodi);
            });

          })
        })
      },

    }
  }
);

Vue.config.devtools = true;

var app = new Vue (
  {
    el: "#root",
    data: {
      search: "",
      api_key: "e23a6721c7b2483cf2f94f3a47f7288d",
      lang: "it",
      uri: "https://api.themoviedb.org/3",
      movies: [],
      series: [],
    },
    methods: {
      getMovie: function (){
        axios.get(`${this.uri}/search/movie?api_key=${this.api_key}&language=${this.lang}&query=${this.search}`)
          .then((response) => {
          console.log(response.data.results);
          this.movies = response.data.results;
          console.log(this.movies);

        axios.get(`${this.uri}/search/tv?api_key=${this.api_key}&language=${this.lang}&query=${this.search}`)
          .then((response)=> {
            // console.log(response);
            this.series = response.data.results;
            // console.log(this.series);
            this.series.forEach((episodi) => {
              // console.log(episodi);
              this.movies.push(episodi);

              // ordinol'array in base al voto, dal maggiore al minore
              this.movies.sort((a, b) => (b.vote_average - a.vote_average));
            });
          })
        })
      },

    }
  }
);

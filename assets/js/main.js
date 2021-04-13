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
      selected: "",
      placeholderSearch: "Cerca un film o una serie...",
      searchTitle: "Tutti i Generi",
      movieGenres: []
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

              // ordino l'array in base al voto, dal maggiore al minore
              this.movies.sort((a, b) => (b.vote_average - a.vote_average));
              this.search = "";
            });
          })
        })
      },
      votes: function (vote) {
        return Math.round(vote / 2)
        console.log(vote);
      },
      ita: function (){
        this.lang = "it"
        this.placeholderSearch = "Cerca un film o una serie...";
        this.searchTitle = "Tutti i Generi"
        console.log(this.lang);
      },
      eng: function (){
        this.lang = "en"
        this.placeholderSearch = "Search movies or tv series..."
        this.searchTitle = "All Genres"
        console.log(this.lang);
      },
      getGenre: function (){
        axios.get(`${this.uri}/genre/movie/list?api_key=${this.api_key}&language=${this.lang}`)
          .then((response) => {
            console.log(response.data.genres);
            this.movieGenres = response.data.genres;
        })
      }
    }
  }
);

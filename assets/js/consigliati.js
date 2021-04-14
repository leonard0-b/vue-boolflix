Vue.config.devtools = true;

var app = new Vue (
  {
    el: "#root",
    data: {
      index: 0,
      cons: [
        "https://image.tmdb.org/t/p/original/nG5zmbVeYlcDhckrPAe06fArywn.jpg",
        "https://image.tmdb.org/t/p/original/fEolr0bwBR7m0sHSJC8u8grnhBv.jpg",
        "https://image.tmdb.org/t/p/original/tNE9HGcFOH8EpCmzO7XCYwqguI0.jpg",
        "https://image.tmdb.org/t/p/original/n0sUMqBk6BNZfFUfaA99GmMdoEq.jpg",
        "https://image.tmdb.org/t/p/original/98OOSRzIpH3AbRllrCgHfYLrQMw.jpg",
        "https://image.tmdb.org/t/p/original/bUxoCldj0V9Y2bgQuUSFbSjKEWw.jpg",
      ],
    },
    mounted(){
      
    },
    methods: {
     // creo funzione per scorrere avanti al click della freccia destra
     next: function() {
       // se l'index dell'array è minore della lunghezza dell'array - 1
       if (this.index < this.cons.length - 1) {
         // continua a scorrere
         this.index++
       } else {
         // altrimenti index = 0 per tornare alla prima
         this.index = 0
       }
     },
     // creo funzione per scorrere indietro al click della freccia sinistra
     prev: function() {
       // se l'index dell'array è maggiore di 0
       if (this.index > 0) {
         // allora continua a decrescere
         this.index--
       } else {
         // altrimenti se l'index è uguale a lungheza array - 1 torna all'ultima
         this.index = this.cons.length - 1
       }
     },
    }
  }
);

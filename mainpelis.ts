import {Imdb} from "./Imdb2"

import {Movie} from "./movie"


let movie1 = new Movie("Avatar", 2009, "USA", "Ciencia ficción");
let movie2 = new Movie("Titanic", 1997, "USA", "Drama");
let movie3 = new Movie("Indiana Jones y la última cruzada", 1989, "USA", "Aventuras");

let Imdb1 = new Imdb([movie1, movie2, movie3]);

console.log(Imdb1);
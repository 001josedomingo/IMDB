"use strict";
exports.__esModule = true;
var Imdb2_1 = require("./Imdb2");
var movie_1 = require("./movie");
var movie1 = new movie_1.Movie("Avatar", 2009, "USA", "Ciencia ficción");
var movie2 = new movie_1.Movie("Titanic", 1997, "USA", "Drama");
var movie3 = new movie_1.Movie("Indiana Jones y la última cruzada", 1989, "USA", "Aventuras");
var Imdb1 = new Imdb2_1.Imdb([movie1, movie2, movie3]);
console.log(Imdb1);

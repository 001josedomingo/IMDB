import {Imdb} from "./Imdb2"

import {Movie} from "./movie"

const fs = require ("fs")



let movie1 = new Movie("Avatar", 2009, "USA", "Ciencia ficción");
let movie2 = new Movie("Titanic", 1997, "USA", "Drama");
let movie3 = new Movie("Indiana Jones y la última cruzada", 1989, "USA", "Aventuras");

let Imdb1 = new Imdb([movie1, movie2, movie3]);
Imdb1.escribirEnFicheroJSON("Imdb2.json");


//console.log(Imdb1);
/*
fs.writeFileSync("imdbBBDD.json",JSON.stringify(Imdb1)); 
let peliculas = fs.readFileSync("imdbBBDD.json", "utf-8");
let IMDBdatos:Imdb = JSON.parse(peliculas);

console.log(IMDBdatos.peliculas[0].title);


Imdb1.escribirEnFicheroJSON("Catálogo películas");*/

console.log(Imdb1.obtenerInstanciaIMDB("Imdb2.json").peliculas[0].title);
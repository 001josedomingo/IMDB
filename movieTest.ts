import {Movie} from "./movie"
import {Professional} from "./IMDB"

let movie1 = new Movie("Avatar", 2009, "USA", "Ciencia ficción");



let professional01:Professional = new Professional("Ana",40,"Woman",60,170,
    "Brown","Green","race01",false,"USA",4,"Actor");
let professional02:Professional= new Professional("María",50,"Woman",60,170,
    "Black","Blue","race02",false,"USA",2,"Director");
let professional03:Professional= new Professional("Juan",70,"Man",60,170,
    "Black","Blue","race03",true,"USA",6,"Write");
let professional04:Professional= new Professional("Laura",25,"Woman",68,165,
    "Brown","Green","race01",false,"USA",0,"Actor");
let professional05:Professional= new Professional("Pedro",50,"Man",90,185,
    "Brown","Green","racerace01",false,"USA",1,"Actor");


movie1.actors = [professional01, professional04, professional05];
movie1.director = professional02;
movie1.writer = professional03;
movie1.language = "Inglés";
movie1.plataform = "Universal";
movie1.isMCU = false;
movie1.mainCharacterName = "Jake";
movie1.producer = "James Cameron";
movie1.distributor = "Filmax";

console.log(movie1.printPeliculas());

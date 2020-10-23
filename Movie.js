"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.printPeliculas = function () {
        var actores = "";
        for (var i = 0; i < this.actors.length; i++) {
            actores += this.actors[i];
        }
        console.log("Title:" + " " + this.title + "\n" +
            "Release Year:" + " " + this.releaseYear + "\n" +
            "Actors:" + " " + actores.toString + "\n" +
            "Nacionality:" + " " + this.nacionality + "\n" +
            "Director:" + " " + this.director.toString() + "\n" +
            "Writer:" + " " + this.writer.toString() + "\n" +
            "Language:" + " " + this.language + "\n" +
            "Plataform:" + " " + this.plataform + "\n" +
            "Is MCU:" + " " + this.isMCU + "\n" +
            "Main character name:" + " " + this.mainCharacterName + "\n" +
            "Producer:" + " " + this.producer + "\n" +
            "Distributor:" + " " + this.distributor + "\n" +
            "Genre:" + " " + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;

import {Movie} from "./movie"
const fs = require("fs");

export class Imdb
{
    public peliculas:Movie[];


    constructor(peliculas:Movie[])
    {
        this.peliculas = peliculas;

    }

    escribirEnFicheroJSON(nombreFichero:string)
    {
        fs.writeFileSync(nombreFichero, JSON.stringify(this.peliculas));
    }

    obtenerInstanciaIMDB(nombreFichero:string)
    {  
       let pelis = fs.readFileSync(nombreFichero, "utf-8")
       let imdb:Imdb = new Imdb([]);
       imdb.peliculas = JSON.parse(pelis);
       return imdb;  
    }
   

    
}





import {Professional} from "./professional"

export class Movie
{
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nacionality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    constructor (title:string, releaseYear:number, nacionality:string, genre:string)
    {
        this.title = title; 
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre
    }


    public printPeliculas()
    {
        let actores:string = "";

        for (let i =0; i < this.actors.length;i++)
        {
            this.actors[i];
        }

        console.log(

            "Title:" + " " + this.title + "\n"+
            "Release Year:" + " " + this.releaseYear + "\n" +
            "Actors:" + " " + this.actors.toString() + "\n" +
            "Nacionality:" + " " + this.nacionality + "\n" +
            "Director:" + " "+ this.director.toString() + "\n" +
            "Writer:" + " "+ this.writer.toString() + "\n" +
            "Language:" + " " + this.language + "\n" +
            "Plataform:" + " " + this.plataform + "\n" + 
            "Is MCU:" + " " + this.isMCU + "\n" +
            "Main character name:" + " " + this.mainCharacterName + "\n" +
            "Producer:" + " " + this.producer + "\n" +
            "Distributor:" + " " + this.distributor + "\n" +
            "Genre:" + " " + this.genre );
    }

} 
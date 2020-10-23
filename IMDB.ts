export class Professional

{
        public name:string;
        public age:number;
        public genre:string;
        public weight:number;
        public height:number;
        public hairColor:string;
        public eyeColor:string;
        public race:string;
        public isRetired:boolean;
        public nationality:string;
        public oscarsNumber:number;
        public profession:string;


    constructor(part_name:string,part_age:number,part_genre:string,part_weight:number,part_height:number,
                part_Colorhair:string,part_eyeColor:string,part_race:string,part_isRetired:boolean,
                part_nationality:string,part_oscarNumer:number,part_profession:string)
    
    {
        this.name           = part_name;
        this.age            = part_age;
        this.genre          = part_genre;
        this.weight         = part_weight;
        this.height         = part_height;
        this.hairColor      = part_Colorhair;
        this.eyeColor       = part_eyeColor;
        this.race           = part_race;
        this.isRetired      = part_isRetired;
        this.nationality    = part_nationality;
        this.oscarsNumber   = part_oscarNumer;
        this.profession     = part_profession;
    };

 
            public getprint()
            
                {  
                    console.log(
                        "Name-"+this.name+"\n"+
                        "Age-"+this.age+"\n"+
                        "Genre-"+this.genre+"\n"+
                        "Weight(kg)-"+this.weight+"\n"+
                        "Height(cm)-"+this.height+"\n"+
                        "Hair Color-"+this.hairColor+"\n"+
                        "Eye Color-"+this.eyeColor+"\n"+
                        "Race-"+this.race+"\n"+
                        "isRetired-"+this.isRetired+"\n"+
                        "nationality-"+this.nationality+"\n"+
                        "oscars Number-"+this.oscarsNumber+"\n"+
                        "profession-"+this.profession+"\n"                       
                        );
                                           
                        
                };


            

           

           
 
          

           
              
           
             
};


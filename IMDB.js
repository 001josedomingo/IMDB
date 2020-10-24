"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(part_name, part_age, part_genre, part_weight, part_height, part_Colorhair, part_eyeColor, part_race, part_isRetired, part_nationality, part_oscarNumer, part_profession) {
        this.name = part_name;
        this.age = part_age;
        this.genre = part_genre;
        this.weight = part_weight;
        this.height = part_height;
        this.hairColor = part_Colorhair;
        this.eyeColor = part_eyeColor;
        this.race = part_race;
        this.isRetired = part_isRetired;
        this.nationality = part_nationality;
        this.oscarsNumber = part_oscarNumer;
        this.profession = part_profession;
    }
    ;
    Professional.prototype.toString = function () {
        return ("Name-" + this.name + "\n" +
            "Age-" + this.age + "\n" +
            "Genre-" + this.genre + "\n" +
            "Weight(kg)-" + this.weight + "\n" +
            "Height(cm)-" + this.height + "\n" +
            "Hair Color-" + this.hairColor + "\n" +
            "Eye Color-" + this.eyeColor + "\n" +
            "Race-" + this.race + "\n" +
            "isRetired-" + this.isRetired + "\n" +
            "nationality-" + this.nationality + "\n" +
            "oscars Number-" + this.oscarsNumber + "\n" +
            "profession-" + this.profession + "\n");
    };
    ;
    return Professional;
}());
exports.Professional = Professional;
;

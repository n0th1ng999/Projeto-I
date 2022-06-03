export default class Achievements{
    #id = 0
    #name = '' // Achievement Name
    #imageUrl = '' ; // Image Url
    #description = '' ; // Description of Achievement
    #funcIdentifier = '' // Identifier for type of Achievement

    constructor(AchievmentsDB, name, imageUrl, Description , funcIdentifier){
        this.#id = AchievmentsDB.length == 0 ? 1 : AchievmentsDB[AchievmentsDB.length - 1].id + 1;
        this.#name = name;
        this.#imageUrl = imageUrl;
        this.#description = Description;
        this.#funcIdentifier = funcIdentifier;

    }

    get id() { return this.#id; }

    get name() { return this.#name; }

    get imageUrl() { return this.#imageUrl; }

    get description() { return this.#description; }

    get funcIdentifier() { return this.#funcIdentifier; }

    
    set name(name){   if(name.length >= 5 && name.length <= 20){
        this.#name = name
    }else{
        throw new Error('Name lenght must be between 5-20 characters')
    }}

    set imageUrl(imageUrl){this.#imageUrl = imageUrl}

    set description(description){ this.#description = description}

    set funcIdentifier(funcIdentifier){this.#funcIdentifier = funcIdentifier}
}

// TO DO 
// ESCLARECER SE OS ACHIEVEMENTS SAO HARDCODED ? COM VARIAVEIS QUE PODEM SER MUDADAS PELO ADMIN OU PODEM SER INTRODUZIDAS PELO ADMIN
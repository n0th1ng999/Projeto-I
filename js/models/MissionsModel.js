const MissionsDB = localStorage.getItem('MissionsDB') || []
export default class Missions{
    #id = 0
    #name = ''
    #quest = '' // Description of quest
    #xp = 0 // Xp gain
    #funcIdentifier = '' // Identifier for type of Mission
    #type = '' // daily , weekly , monthly
    
    constructor(name, quest, xp , funcIdentifier, type ){
        this.#id = MissionsDB.length == 0 ? 1 : MissionsDB[MissionsDB.length - 1].id + 1;
        this.#name = name ;
        this.#quest = quest ;
        this.#xp = xp ;
        this.#funcIdentifier = funcIdentifier
        this.#type = type
        
    }

    get id() { return this.#id;}
    
    get name() { return this.#name;}

    get quest() { return this.#quest;}

    get xp() { return this.#xp;}

    get funcIdentifier() { return this.#funcIdentifier}

    get type() { return this.#type;}




    set name(name) {   if(name.length >= 5 && name.length <= 20){
            this.#name = name
        }else{
            throw new Error('Name lenght must be between 5-20 characters')
        } }
        

    set quest(quest) {if(quest.length >= 5 && quest.length <= 75){
        this.#name = quest
    }else{
        throw new Error('Name lenght must be between 5-75 characters')
    } }

    set xp(xp) { this.#xp = xp; }

    set funcIdentifier(funcIdentifier) { this.#funcIdentifier = funcIdentifier; }

    set type(type) { this.#type = type;}

}


// TO DO 
// ESCLARECER SE AS MISSIONS SAO HARDCODED ? COM VARIAVEIS QUE PODEM SER MUDADAS PELO ADMIN OU PODEM SER INTRODUZIDAS PELO ADMIN

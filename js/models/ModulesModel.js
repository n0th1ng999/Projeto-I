export default class Modules{
    id = 0
    name = ''
    rank = ''
    lessons = [] // array of Lesson objects
    requisitedModules = []
    
    constructor(ModulesDB, name, lessons = [] , rank, requisitedModules = []){
        this.id = ModulesDB.length == 0 ? 1 : ModulesDB[ModulesDB.length - 1].id + 1;
        this.rank = rank ;
        this.name = name ;
        this.lessons = lessons || [] ;
        this.requisitedModules = requisitedModules
    }
    
    get id(){
        return this.id
    }

    get name(){
        return this.name
    }

    get lessons(){
        return this.lessons
    }

    get rank(){return this.rank}

    set name(value){
        if(value.length >= 5 && value.length <= 20){
            this.name = value
        }else{
            throw new Error('Name lenght must be between 5-20 characters')
        }
    }

    set lessons(array){

        if(Array.isArray(array)){
            this.lessons = array
        }else{
            throw new Error("Lessons array must be an array")
        }
        
    
    }

    set rank(value){ 
        if(value == 'beginner' || value == 'intermediate' || value == 'pro'){
            this.rank = value
        }else{
            throw new Error('Module Rank not valid')
        }
    }

}

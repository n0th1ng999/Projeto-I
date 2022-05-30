let usersDB = []

export class users{
    #id = 0
    #name = ""
    #password = ""
    #email = ""
    #rank=""
    #Achievements = [] // array of Achievement Id's
    #Lessons = [] // array of Lesson Id's
    #Friends = [] // array of Friend Id's'
    #allXp = 0 // All time Xp
    #weekXp = 0 // week Xp


    constructor(name, password, email){
        this.#id = usersDB.length == 0 ? 1 : usersDB[usersDB.length - 1].id + 1
        this.#name = name
        this.#password   = password
        this.#email = email
        this.#rank = 'begginner'
        this.#Achievements = []
        this.#Lessons = []
        this.#Friends = []
        this.#allXp = 0
        this.#weekXp = 0

    }

        get id(){
            return this.#id
        }

        get name(){
            return this.#name
        }

        get password(){
            return this.#password
        }

        get email(){
            return this.#email
        }

        get rank(){
            return this.#rank
        }

        get Achievements(){
            return this.#Achievements
        }

        get Lessons(){
            return this.#Lessons
        }

        get Friends(){
            return this.#Friends
        }

        get allXp(){
            return this.#allXp
        }

        get weekXp(){
            return this.#weekXp
        }


        set name(value){
            if(value.length >= 5 && value.length <= 15){
                this.#name = value
            }else{
                throw new Error('Name lenght must be between 5-15 characters')
            }
        }

        set password(value){
            if(value.length >= 5 && value.length <= 15){
                this.#password = value
            }else{
                throw new Error('Password lenght must be between 5-15 characters')
            }
        }
        
        set email(value){
            if(value.includes('@') && value.includes('.')){
                
            }else{}
        }
}
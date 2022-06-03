

export default class users{
    id = 0
    name = ""
    password = ""
    email = ""
    rank=""
    Achievements = [] // array of Achievement Id's
    Lessons = [] // array of Completed Lessons Id's'
    Friends = [] // array of Friend Id's'
    allXp = 0 // All time Xp
    weekXp = 0 // week Xp
    blocked = false


    constructor(usersDB ,name, password, email){

      


        this.id = usersDB.length == 0 ? 1 : usersDB[usersDB.length - 1].id + 1
        this.name = name
        this.password   = password
        this.email = email
        this.rank = 'begginner'
        this.Achievements = [] 
        this.Lessons = []  
        this.Friends = []
        this.allXp = 0
        this.weekXp = 0
        this.blocked = false

    }

        get id(){
            return this.id
        }

        get name(){
            return this.name
        }

        get password(){
            return this.password
        }

        get email(){
            return this.email
        }

        get rank(){
            return this.rank
        }

        get Achievements(){
            return this.Achievements
        }

        get Lessons(){
            return this.Lessons
        }

        get Friends(){
            return this.Friends
        }

        get allXp(){
            return this.allXp
        }

        get weekXp(){
            return this.weekXp
        }

        get blocked(){ 
            return this.blocked
        }

        set name(value){
            if(value.length >= 5 && value.length <= 20){
                this.name = value
            }else{
                throw new Error('Name lenght must be between 5-20 characters')
            }
        }

        set password(value){
            if(value.length >= 5 && value.length <= 20){
                this.password = value
            }else{
                throw new Error('Password lenght must be between 5-20 characters')
            }
        }
        
        set email(value){
            if(value.includes('@') && value.includes('.')){
                this.email =  value
            }else{
                throw new Error('invalid email')
            }
        }

        set blocked(boolean){
            this.blocked = boolean
        }

        finishLesson(LessonId) {
            
            if(this.Lessons.indexOf(LessonId) == -1){
                this.Lessons.push(LessonId)
            }else{
                throw new Error('Lesson was already completed')
            }
            
        }

        getAchievement(AchievementId) {
            
            if(this.Achievements.indexOf(AchievementId) == -1){
                this.Achievements.push(AchievementId)
            }else{
                throw new Error('Achievement was already completed')
            }
            
        }

        addFriend(friendId) {
            
            if(this.Friends.indexOf(friendId) == -1){
                this.Friends.push(friendId)
            }else{
                throw new Error('Friend was already added')
            }
            
        }

        addXP(value) {
            this.allXp  += value
            this.weekXp += value

        }

        resetWeekXP(){
            this.weekXp = 0
        }

}
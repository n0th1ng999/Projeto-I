let usersDB = localStorage.getItem('usersDB') // load into string
usersDB = JSON.parse(usersDB)

let loggedInUser = sessionStorage.getItem('loggedUser')
loggedInUser = JSON.parse(loggedInUser)

let AchievementsDB = localStorage.getItem('AchievementsDB')
AchievementsDB  = JSON.parse(AchievementsDB)

let ModulesDB = localStorage.getItem('ModulesDB')
ModulesDB = JSON.parse(ModulesDB)





if(!loggedInUser){

    window.location.replace("../Index.html")

}

for (const Module of ModulesDB) {

    for (const lesson of Module.lessons) {
        
        if(loggedInUser.Lessons[loggedInUser.Lessons.length - 1])

        if(loggedInUser.Lessons[loggedInUser.Lessons.length - 1] == lesson){
            
            console.log(Module.rank)

            if(Module.rank == 'pro')
                loggedInUser.rank = Module.rank
            if(Module.rank == 'intermediate' && loggedInUser.rank != 'pro')
                loggedInUser.rank = Module.rank
            if(Module.rank == 'beginner')
                null

        }
    }
}

for (const Achievement of AchievementsDB) {
    
    //Function Mesaures week or all xp
    function Achievement_XP(prop,amount) {
        
        if(prop >= amount){
            if(!(loggedInUser.Achievements.find(id => id == Achievement.id)))
            loggedInUser.Achievements.push(Achievement.id)
            sessionStorage.setItem('loggedUser',JSON.stringify(loggedInUser)) 
            for (const user of usersDB) {
                if(loggedInUser.id == user.id){
                    user.Achievements = loggedInUser.Achievements
                    localStorage.setItem('usersDB',JSON.stringify(usersDB)) 
                }
            }  
        }
    }
    
    //Function Mesaures week or all xp
    function Achievement_Rank(target) {
        
        if(loggedInUser.rank == target){
            if(!(loggedInUser.Achievements.find(id => id == Achievement.id)))
            loggedInUser.Achievements.push(Achievement.id)
            sessionStorage.setItem('loggedUser',JSON.stringify(loggedInUser))
            for (const user of usersDB) {
                if(loggedInUser.id == user.id){
                    user.Achievements = loggedInUser.Achievements
                    localStorage.setItem('usersDB',JSON.stringify(usersDB)) 
                }
            }
        
        }
    }



    if(Achievement.funcIdentifier == 1){
        
        let prop = Achievement.funcProps[0]
        console.log(prop)

        if(prop == "allXp"){
            prop = loggedInUser.allXp
        } 
        else if(prop == "weekXP"){
            prop = loggedInUser.weekXp
        } else {
            console.log('Invalid prop')
        }

        const target = Achievement.funcProps[1]

        Achievement_XP(prop,target)
    }

    if(Achievement.funcIdentifier == 2){
        
        
        let target = Achievement.funcProps[0]
        console.log(target)
        
        if(target == "beginner"){
 
            Achievement_Rank(target)
        } 
        else if(target == "intermediate"){

            Achievement_Rank(target)
        } else if(target == "pro"){

            Achievement_Rank(target)
            
        }else {
            console.log('Invalid prop')
        }

    }

}

console.log(loggedInUser)
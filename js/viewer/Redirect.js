let usersDB = localStorage.getItem('usersDB') // load into string
usersDB = JSON.parse(usersDB)

let loggedInUser = sessionStorage.getItem('loggedUser')
loggedInUser = JSON.parse(loggedInUser)

let AchievementsDB = localStorage.getItem('AchievementsDB')
AchievementsDB  = JSON.parse(AchievementsDB)





if(!loggedInUser){

    window.location.replace("../Index.html")

}


for (const Achievement of AchievementsDB) {
    
    //Function Mesaures week or all xp
    function Achievement_XP(prop,amount) {
        
        if(prop >= amount){
            loggedInUser.Achievements.push(Achievement.id)
            sessionStorage.setItem('loggedUser',JSON.stringify(loggedInUser)) 
              
        }
    }
    
    //Function Mesaures week or all xp
    function Achievement_Rank(target) {
        
        if(loggedInUser.rank == target){
            if(!(loggedInUser.Achievements.find(id => id == Achievement.id)))
            loggedInUser.Achievements.push(Achievement.id)
        }
        
        alert(loggedInUser) 
    }




    if(Achievement.funcIdentifier == 1){
        
        let prop = Achievement.funcProps[0]
        
        if(prop == "allXp"){
            prop = loggedInUser.allXp
        } 
        else if(prop == "weekXp"){
            prop = loggedInUser.weekXp
        } else {
            console.log('Invalid prop')
        }

        const target = Achievement.funcProps[1]

        Achievement_XP(prop,target)
    }

    if(Achievement.funcIdentifier == 2){
        
        
        const target = Achievement.funcProps[0]

        if(target == "beginner"){
            target = loggedInUser.rank
        } 
        else if(target == "intermediate"){
            target = loggedInUser.rank

        } else if(target == "pro"){
            target = loggedInUser.rank
            
        }else {
            console.log('Invalid prop')
        }

        Achievement_Rank(target)
    }

}

console.log(loggedInUser)
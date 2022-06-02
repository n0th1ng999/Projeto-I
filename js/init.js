import users   from './models/usersModel.js'
import Lessons from './models/LessonsModel.js'
import Modules from './models/ModulesModel.js'
import Exercises from './models/ExercisesModel.js'
import Missions from './models/MissionsModel.js'
import Achievements from './models/AchievementsModel.js'

const date = new Date();

/* Check existence of LocalDB Storage */
let usersDBjson = localStorage.getItem('usersDB') || false

let LessonsDBjson = localStorage.getItem('LessonsDB') || false

let ExercisesDBjson = localStorage.getItem('ExercisesDB') || false 

let AchievementsDBjson = localStorage.getItem('AchievementsDB') || false

let ModulesDBjson = localStorage.getItem('ModulesDB') || false 

let MissionsDBjson = localStorage.getItem('MissionsDB') || false



/* if it doesnt exist, create it */
if(!usersDBjson){ 
    /* create usersDB */
    console.log('Creating usersDB')
    localStorage.setItem('usersDB','[]')
    const usersDB =  []
    
    /* push users to usersDB */
    usersDB.push(
    new users('Tiago','Password','Email@email.com')
    ,new users('Gabriela','Password','Gmail@email.com'))
    console.log(usersDB);

    /* pass usersDB to string */
    usersDBjson = JSON.stringify(usersDB)
    console.log(usersDBjson);
    
    /* pass usersDB to localStorage */
    localStorage.setItem('usersDB',usersDBjson)
    localStorage.removeItem('usersDB')


    /* testing */
    let A1 = new users('Tiago','Password','Email@email.com')
    const Test = new users('Tiago','Password','Email@email.com')
    
    

    localStorage.setItem('TEST', JSON.stringify(Test))
}



if(!LessonsDBjson){ 
    localStorage.setItem('LessonsDB','[]')
}

if(!ExercisesDBjson){ 
    localStorage.setItem('ExercisesDB','[]')
}

if(!AchievementsDBjson){ 
    localStorage.setItem('AchievementsDB','[]')
}

if(!ModulesDBjson){ 
    localStorage.setItem('ModuleDB','[]')
}

if(!MissionsDBjson){ 
    localStorage.setItem('MissionsDB','[]')
}


/* 0 - 6 (from Sunday to Saturday)  */
/* reset each user XP at monday     */ 
let today = date.getDay()

if (today == 1 ) {
    for (const user of UsersDB) {
        user.resetWeekXP()        
    }
} 


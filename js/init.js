import users   from './models/usersModel.js'
import Lessons from './models/LessonsModel.js'
import Module from './models/ModuleModel.js'
import Exercises from './models/ExercisesModel.js'
import Missions from './models/MissionsModel.js'
import Achievements from './models/AchievementsModel.js'

const date = new Date();


const usersDB = localStorage.getItem('UsersDB') || false
const LessonsDB = localStorage.getItem('LessonsDB') || false
const ExercisesDB = localStorage.getItem('ExercisesDB') || false 
const AchievementsDB = localStorage.getItem('AchievementsDB') || false
const ModuleDB = localStorage.getItem('ModuleDB') || false 
const MissionsDB = localStorage.getItem('MissionsDB') || false

console.log(usersDB)


/* if it doesnt exist, create it */
if(!usersDB){ 
    localStorage.setItem('UsersDB','[]')
}

if(!LessonsDB){ 
    localStorage.setItem('LessonsDB','[]')
}

if(!ExercisesDB){ 
    localStorage.setItem('ExercisesDB','[]')
}

if(!AchievementsDB){ 
    localStorage.setItem('AchievementsDB','[]')
}

if(!ModuleDB){ 
    localStorage.setItem('ModuleDB','[]')
}

if(!MissionsDB){ 
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


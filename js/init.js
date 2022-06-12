import users   from './models/usersModel.js'
import Lessons from './models/LessonsModel.js'
import Modules from './models/ModulesModel.js'
import Exercises from './models/ExercisesModel.js'
import Missions from './models/MissionsModel.js'
import Achievements from './models/AchievementsModel.js'

const date = new Date();

/* Check existence of LocalDB Storage */
let usersDBjson = localStorage.getItem('usersDB') 

let LessonsDBjson = localStorage.getItem('LessonsDB') 

let ExercisesDBjson = localStorage.getItem('ExercisesDB') 

let AchievementsDBjson = localStorage.getItem('AchievementsDB') 

let ModulesDBjson = localStorage.getItem('ModulesDB')  

let MissionsDBjson = localStorage.getItem('MissionsDB') 

/* if it doesnt exist, create it */


    /* INITIALIZING USERSDB */
        if(!usersDBjson){ 
            console.log('Creating USERS');
             /* create usersDB */
            localStorage.setItem('usersDB','[]')
            const usersDB =  []
            
            /* push users to usersDB */
            usersDB.push(new users(usersDB,'Tiago','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'Gabriela','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'Gabrielo','Password','Email@mail.com'))
            console.log(usersDB);

            /* pass usersDB to string */
            usersDBjson = JSON.stringify(usersDB)
            console.log(usersDBjson);
            
            /* pass usersDB to localStorage */
            localStorage.setItem('usersDB',usersDBjson)

            }

    /* INITIALIZING LessonsDB */
        if(!LessonsDBjson){ 
            /* create LessonsDB */
            localStorage.setItem('LessonsDB','[]')
            const LessonsDB =  []
            
            /* push Lessons to LessonsDB */
            LessonsDB.push(new Lessons(LessonsDB,'This',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'That',[],'',20))
            console.log(LessonsDB);

            /* pass LessonsDB to string */
            LessonsDBjson = JSON.stringify(LessonsDB)
            console.log(LessonsDBjson);
            
            /* pass LessonsDB to localStorage */
            localStorage.setItem('LessonsDB',LessonsDBjson)
        }

    /* INITIALIZING ExercisesDB */
        if(!ExercisesDBjson){ 
            localStorage.setItem('ExercisesDB','[]')

            const ExercisesDB =  []
            
            /* push Lessons to LessonsDB */
            ExercisesDB.push(new Exercises(ExercisesDB,'What is ... ?',['Answer 1','Answer 2','Answer 3','Answer 4'],1,3))
            ExercisesDB.push(new Exercises(ExercisesDB,'What is ... ? . 2',['Answer 1','Answer 2','Answer 3','Answer 4'],1,4))
            console.log(ExercisesDB);

            /* pass LessonsDB to string */
            ExercisesDBjson = JSON.stringify(ExercisesDB)
            console.log(ExercisesDBjson);
            
            /* pass LessonsDB to localStorage */
            localStorage.setItem('ExercisesDB',ExercisesDBjson)
        }
    
    /* INITIALIZING AchievementsDB */
        if(!AchievementsDBjson){ 
            localStorage.setItem('AchievementsDB','[]')
            const AchievementsDB =  []

            AchievementsDB.push(new Achievements(AchievementsDB,'Achievement','test.png','this is a description'))
            AchievementsDBjson = JSON.stringify(AchievementsDB)

            localStorage.setItem('AchievementsDB', AchievementsDBjson)

        }

    /* INITIALIZING ModulesDB */
        if(!ModulesDBjson){ 
            localStorage.setItem('ModulesDB','[]')
            const ModulesDB =  []
            
        
            /* push Lessons to LessonsDB */
            ModulesDB.push(new Modules(ModulesDB,'Begin',[1,2],'beginner'))
            ModulesDB.push(new Modules(ModulesDB,'Begun',[],'beginner'))
            console.log(ModulesDB);

            /* pass LessonsDB to string */
            ModulesDBjson = JSON.stringify(ModulesDB)
            console.log(ModulesDBjson);
            
            /* pass LessonsDB to localStorage */
            localStorage.setItem('ModulesDB',ModulesDBjson)
        }

    /* INITIALIZING MissionsDB */
        if(!MissionsDBjson){ 
            
        }


/* 0 - 6 (from Sunday to Saturday)  */
/* reset each user XP at monday     */ 
let today = date.getDay()

if (today == 1 ) {
    for (const user of UsersDB) {
        user.resetWeekXP()        
    }
} 


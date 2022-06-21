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
            usersDB.push(new users(usersDB,'User1','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User2','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User3','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User4','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User5','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User6','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User7','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User8','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User9','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User10','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User11','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User12','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User13','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User14','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User15','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User16','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User17','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User18','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User19','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User20','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User21','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User22','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User23','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User24','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User25','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User26','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User27','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User28','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User29','Password','Email@mail.com'))
            usersDB.push(new users(usersDB,'User30','Password','Email@mail.com'))
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
            LessonsDB.push(new Lessons(LessonsDB,'Introduction to Grammar Rules',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Alphabet',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Numbers',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Day-to-Day Words',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Colours',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Greetings and Partings',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Phrases for Introductions',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Questions for When You`re Meeting Someone + How to Answer Them',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Small Talk',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Other Common Questions',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Sentence Structure',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Animals',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Weather',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Family',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Days of the Week and Months',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Christmas',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Valentine`s Day',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Halloween',[],'',20))
            LessonsDB.push(new Lessons(LessonsDB,'Thanksgiving',[],'',20))

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
            ExercisesDB.push(new Exercises(ExercisesDB,
                'We only need to know the symbols/gestures to communicate through ASL '
                ,['True','False'],2,1))
            ExercisesDB.push(new Exercises(ExercisesDB,
                'In ASL you should use your facial expressions and body movement to express yourself'
                ,['True','False'],1,1))
            ExercisesDB.push(new Exercises(ExercisesDB,
                'ASL is 80% about signing and 20% about your body movement and facial expressions'
                ,['True','False'],2,1))
            ExercisesDB.push(new Exercises(ExercisesDB,
                'The lack of certain words doesn`t affect communication through ASL'
                ,['True','False'],2,1))
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

            AchievementsDB.push(new Achievements(AchievementsDB,
                'Your first 50 XP','test.png','Gain 50 XP',1,['allXp',50]))
            AchievementsDB.push(new Achievements(AchievementsDB,
                'Your first 100 XP in a week','test.png','Gain 50 XP',1,['weekXP',50]))
            AchievementsDB.push(new Achievements(AchievementsDB,
                'Intermediate','test.png','Reach intermediate',2,['intermediate']))
            AchievementsDB.push(new Achievements(AchievementsDB,
                'Intermediate','test.png','Reach Pro',2,['pro']))
    

            AchievementsDBjson = JSON.stringify(AchievementsDB)

            localStorage.setItem('AchievementsDB', AchievementsDBjson)

        }

    /* INITIALIZING ModulesDB */
        if(!ModulesDBjson){ 
            localStorage.setItem('ModulesDB','[]')
            const ModulesDB =  []
            
        
            /* push Lessons to LessonsDB */
            ModulesDB.push(new Modules(ModulesDB,'Module 1',[1,2],'beginner'))
            ModulesDB.push(new Modules(ModulesDB,'Module 2',[],'beginner'))

            
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

let reset = JSON.parse(localStorage.getItem('reset')) 

if (today == 6 ) {
    
    if(!reset){
            console.log('XP RESET !!!')

            for (const user of usersDB) {
                user.weekXp = 0        
            }
        
            localStorage.setItem('usersDB',JSON.stringify(usersDB))

            localStorage.setItem('reset',JSON.stringify(true))

    }
} 

if (today == 5 ) {
    localStorage.setItem('reset',JSON.stringify(false))
}



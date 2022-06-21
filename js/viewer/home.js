let usersDB = localStorage.getItem('usersDB') // load into string
usersDB = JSON.parse(usersDB)

let ExercisesDB = localStorage.getItem('ExercisesDB') // load into string
ExercisesDB = JSON.parse(ExercisesDB)

let LessonsDB = localStorage.getItem('LessonsDB')
LessonsDB = JSON.parse(LessonsDB)

let AchievementsDB = localStorage.getItem('AchievementsDB')
AchievementsDB = JSON.parse(AchievementsDB)

let ModulesDB = localStorage.getItem('ModulesDB')
ModulesDB = JSON.parse(ModulesDB)

let loggedUser = sessionStorage.getItem('loggedUser')
loggedUser = JSON.parse(loggedUser)


sessionStorage.setItem('UserToVisit',JSON.stringify(loggedUser))

const iconDisplay = document.querySelector('#iconDisplay')
const UserName = document.querySelector('#UserName')
const CurrentModule = document.querySelector('#CurrentModule')
const ModuleCompletion = document.querySelector('#ModuleCompletion')
const ModuleName = document.querySelector('#ModuleName')
const ModuleRank = document.querySelector('#ModuleRank')
const ProgressBarIndicator = document.querySelector('#ProgressBarIndicator');
const UserWeekXp = document.querySelector('#UserWeekXp')
const UserAllXp = document.querySelector('#UserAllXp')
const AchievementPercentage = document.querySelector('#AchievementPercentage')
const userPosition = document.querySelector('#userPosition')


UserName.innerHTML = loggedUser.name + "!"

let CurrentModuleIndicator
for (const Module of ModulesDB) {


    if(Module.lessons.find(lesson => lesson == loggedUser.Lessons[loggedUser.Lessons.length-1]))
    CurrentModuleIndicator = Module

    
}
if(CurrentModuleIndicator){
    
    let i = 0 // lessons completed
    for (const lesson of CurrentModuleIndicator.lessons) {
        if(loggedUser.Lessons.find(l => l == lesson))
        i += 1
    }

}
    
    
    ModuleCompletion.innerHTML += Math.round( ( loggedUser.Lessons.length / LessonsDB.length * 100 ) * 100) / 100 + ' %'
    
    ProgressBar.style.setProperty("--percentage",( loggedUser.Lessons.length / LessonsDB.length * 100 )+'%') 

    ProgressBarIndicator.innerHTML += Math.round( ( loggedUser.Lessons.length / LessonsDB.length * 100 ) * 100) / 100 + ' %'

    ProgressBarIndicator.style.setProperty("--percentage",( loggedUser.Lessons.length / LessonsDB.length * 100 )+'%') 

if(CurrentModuleIndicator){
    
    ModuleName.innerHTML = CurrentModuleIndicator.name
    
    ModuleRank.innerHTML = CurrentModuleIndicator.rank

}else{

    ModuleName.innerHTML = ModulesDB[0].name

    ModuleCompletion.innerHTML = '0 %'

    ModuleRank.innerHTML = ModulesDB[0].rank
}


UserWeekXp.innerHTML = loggedUser.weekXp

UserAllXp.innerHTML = loggedUser.allXp

UserRank.innerHTML = loggedUser.rank

AchievementPercentage.innerHTML = Math.round( (loggedUser.Achievements.length / AchievementsDB.length) *100) * 100 + ' %'

iconDisplay.src = `../Media/imgs/Avatars/${loggedUser.Avatar}.svg`


usersDB.sort((a , b) => {
    if(b.weekXp < a.weekXp){
        return -1
    }   
})

userPosition.innerHTML = "#" + usersDB.findIndex(user => user.id == loggedUser.id) + 1



let dailyExercises = []

const date = new Date(); 

let yesterday = JSON.parse(localStorage.getItem('yesterday'))

const today = date.getDay()

for (const Exercise of ExercisesDB) {
    if(loggedUser.Lessons.find(l => l == Exercise.LessonId))
        dailyExercises.push(Exercise)
}

let exercisesstring = ''

let RandomExerciseIndex = Math.floor(Math.random() * dailyExercises.length);

document.querySelector('#btnToDailyExercises').addEventListener('click', () => {
  
    if(loggedUser.Lessons.length > 0){
    if(today != yesterday){
      
        document.querySelector('#DailyExercise-Modal').style.display = 'flex'
        
        yesterday = today

       
            if(dailyExercises[RandomExerciseIndex].Answers.length > 1){
            
                exercisesstring += `<label>${dailyExercises[RandomExerciseIndex].question}</label>
                <select id="${dailyExercises[RandomExerciseIndex].id}" class="Exercise" >`

                

                for (const AnswerID in dailyExercises[RandomExerciseIndex].Answers) {

                    exercisesstring  += `<option value="${AnswerID}">${dailyExercises[RandomExerciseIndex].Answers[AnswerID]}</option>`
                    
                }
                
                exercisesstring += `</select>` 

            }else if(dailyExercises[RandomExerciseIndex].Answers.length == 1){
                
                exercisesstring  += `<label>${dailyExercises[RandomExerciseIndex].question}</label>
                <input type="text" id="${dailyExercises[RandomExerciseIndex].id}" class="Exercise_Input">`
                
            }

            document.querySelector('#DailyExercise-Modal .Custom_Modal_Body').innerHTML = exercisesstring
            
            //localStorage.setItem('yesterday',JSON.stringify(yesterday))

        }else{

            alert('Daily exercise has already been done')

        }

    }else{

        alert('You have no exercises available!')
    }

})

document.querySelector('#DailyExercise-Modal_Close').addEventListener('click', () => {
    document.querySelector('#DailyExercise-Modal').style.display = 'none'
})

document.querySelector('#FinishDailyExercise').addEventListener('click', () => {

    let pass = true

    document.querySelectorAll('.Exercise').forEach(Exercise => {

        let Ex = ExercisesDB.find(Ex => Ex.id == Exercise.id) 

        if(!(Ex.CorrectAnswer == Exercise.value))
            pass = false

    })

    document.querySelectorAll('.Exercise_Input').forEach(Exercise => {

        let Ex = ExercisesDB.find(Ex => Ex.id == Exercise.id)    

        if(!(Ex.Answers.find(Answer => Answer == Exercise.value)))
            pass = false

    })

    let DailyExerciseXp = JSON.parse(localStorage.getItem('DailyExerciseXp'))

    if(pass) {
        
        loggedUser.allXp += DailyExerciseXp
        
        loggedUser.weekXp += DailyExerciseXp

        sessionStorage.setItem('loggedUser',JSON.stringify(loggedUser))

        for (let User of usersDB) {

            if(User.id == loggedUser.id){

                User.allXp = loggedUser.allXp

                User.weekXp = loggedUser.weekXp

                localStorage.setItem('usersDB',JSON.stringify(usersDB))

                console.log(usersDB)
                              
                }
            }

            document.querySelector('#FinishDailyExercise').innerHTML = "Close"

            document.querySelector('#DailyExercise-Modal .Custom_Modal_Body').innerHTML = 
            `<h2>Daily exercise completed !!</h2>
            <p>You've gained ${DailyExerciseXp} XP</p>`

            document.querySelector('#FinishDailyExercise').addEventListener('click', () => {

                document.querySelector('#DailyExercise-Modal').style.display = 'none'
            }) 
    }else{

        document.querySelector('#DailyExercise-Modal .Custom_Modal_Body').innerHTML = 
        `<h2>Daily exercise failed !!</h2>
        <p>Try again tomorrow</p>`
        
        document.querySelector('#FinishDailyExercise').innerHTML = "Close"

        document.querySelector('#FinishDailyExercise').addEventListener('click', () => {
                
            document.querySelector('#DailyExercise-Modal').style.display = 'none'
        
        }) 
    }

})
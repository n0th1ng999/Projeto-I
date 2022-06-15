let usersDB = localStorage.getItem('usersDB') // load into string
usersDB = JSON.parse(usersDB)

let LessonsDB = localStorage.getItem('LessonsDB')
LessonsDB = JSON.parse(LessonsDB)

let AchievementsDB = localStorage.getItem('AchievementsDB')
AchievementsDB = JSON.parse(AchievementsDB)

let ModulesDB = localStorage.getItem('ModulesDB')
ModulesDB = JSON.parse(ModulesDB)

let loggedUser = sessionStorage.getItem('loggedUser')
loggedUser = JSON.parse(loggedUser)

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
    
    ModuleCompletion.innerHTML += Math.round( ( i / CurrentModuleIndicator.lessons.length * 100 ) * 100) / 100 + ' %'
    
    ProgressBar.style.setProperty("--percentage",( i / CurrentModuleIndicator.lessons.length * 100 ))

    ProgressBarIndicator.innerHTML += Math.round( ( i / CurrentModuleIndicator.lessons.length * 100 ) * 100) / 100 + ' %'
}

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

userPosition.innerHTML = usersDB.findIndex(user => user.id == loggedUser.id) + 1


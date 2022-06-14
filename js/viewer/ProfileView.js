let loggedUser = sessionStorage.getItem('loggedUser')
loggedUser = JSON.parse(loggedUser)

let usersDB = localStorage.getItem('usersDB')
usersDB = JSON.parse(usersDB)

let ExercisesDBjson = localStorage.getItem('ExercisesDB')
let ExercisesDB = JSON.parse(ExercisesDBjson)

let LessonsDBjson = localStorage.getItem('LessonsDB') 
let LessonsDB = JSON.parse(LessonsDBjson)

let ModulesDBjson = localStorage.getItem('ModulesDB') 
let ModulesDB = JSON.parse(ModulesDBjson)

let AchievementsDBjson = localStorage.getItem('AchievementsDB')
let AchievementsDB = JSON.parse(AchievementsDBjson)




const ProfileImageContainer = document.querySelector('#Profile_Image_Container')

const ProfileNameContainer = document.querySelector('#Profile_Name_Container')


const Course_Completion = document.querySelector('#Course_Completion')

const Current_Module_Completion = document.querySelector('#Current_Module_Completion')

const AvatarNum = 2

loggedUser.Lessons.push(6)

// console.log(window.location.href) // USE URL TO GET ID OF USER 

ProfileImageContainer.innerHTML += `<img class="Profile" width="100" src=../Media/imgs/Avatars/${AvatarNum}.svg> `

ProfileNameContainer.innerHTML = loggedUser.name

//STATISTICS

Course_Completion.innerHTML = Math.round((loggedUser.Lessons.length / LessonsDB.length * 100 ) * 100) / 100 + '%'

Course_Completion.style.setProperty("--percentage",loggedUser.Lessons.length / LessonsDB.length * 100 ) 

let CurrentModule
for (const Module of ModulesDB) {


    if(Module.lessons.find(lesson => lesson == loggedUser.Lessons[loggedUser.Lessons.length-1]))
        CurrentModule = Module

    
}

console.log(CurrentModule);

let i = 0 // lessons completed
for (const lesson of CurrentModule.lessons) {
    if(loggedUser.Lessons.find(l => l == lesson))
    i += 1
}

Current_Module_Completion.innerHTML += Math.round( ( i / CurrentModule.lessons.length * 100 ) * 100) / 100 + '%'

Current_Module_Completion.style.setProperty("--percentage",( i / CurrentModule.lessons.length * 100 ))

//  Levels Completed || XP || Rank || Lessons Until Next Rank

loggedUser.rank = 'beginner'

let LIR = [] // LESSON IN RANK OF USER 

let LUNR = [] // LESSON UNTIL NEXT RANK OF USER




for (const Module of ModulesDB) {


    if(Module.rank == loggedUser.rank){
        LIR.push(...Module.lessons)
    }
}


for (const Lesson_ID of LIR) {

    if(loggedUser.Lessons.find(Lesson => Lesson == Lesson_ID))

        LUNR.push(loggedUser.Lessons.find(Lesson => Lesson == Lesson_ID))

}

for (const Achievement of AchievementsDB) {
    document.querySelector('#Achievements').innerHTML += `<div><img alt="${Achievement.imageUrl}" src="${Achievement.imageUrl}"><h3>${Achievement.name}</h3> <p>${Achievement.description}</p></div>`
}




document.querySelector('#Levels_Until_Next_Rank').innerHTML = LIR.length - LUNR.length 

document.querySelector('#Rank').innerHTML = loggedUser.rank

document.querySelector('#XP').innerHTML = loggedUser.allXp

document.querySelector('#Lessons_Completed').innerHTML = loggedUser.Lessons.length



const Top10Table = document.querySelector('#Top10Table tbody')

    usersDB.sort((a , b) => {
        if(b.weekXp < a.weekXp){
            return -1
        }   
    })

let place = 1
for (const user of usersDB) {

    if(loggedUser.id == user.id) {
        Top10Table.innerHTML += `<tr class="user_row"><td>${place}</td><td>${user.name}</td><td>${user.weekXp}</td></tr>`
    }else{
        Top10Table.innerHTML += `<tr><td>${place}</td><td>${user.name}</td><td>${user.weekXp}</td></tr>`     
    }
    
    if(place == 10)
        break;

    place += 1
}

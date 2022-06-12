let loggedUser = sessionStorage.getItem('loggedUser')
loggedUser = JSON.parse(loggedUser)

let ExercisesDBjson = localStorage.getItem('ExercisesDB')
let ExercisesDB = JSON.parse(ExercisesDBjson)

let LessonsDBjson = localStorage.getItem('LessonsDB') 
let LessonsDB = JSON.parse(LessonsDBjson)

let ModulesDBjson = localStorage.getItem('ModulesDB') 
let ModulesDB = JSON.parse(ModulesDBjson)

let usersDB = localStorage.getItem('usersDB')
usersDB = JSON.parse(usersDB)


const ProfileImageContainer = document.querySelector('#Profile_Image_Container')

const ProfileNameContainer = document.querySelector('#Profile_Name_Container')


const Course_Completion = document.querySelector('#Course_Completion')

const Current_Module_Completion = document.querySelector('#Current_Module_Completion')

const AvatarNum = 2

loggedUser.Lessons.push(6)

console.log(window.location.href) // USE URL TO GET ID OF USER 

ProfileImageContainer.innerHTML += `<img class="Profile" width="100" src=../Media/imgs/Avatars/${AvatarNum}.svg> `

ProfileNameContainer.innerHTML = loggedUser.name

//STATISTICS

Course_Completion.innerHTML = Math.round((loggedUser.Lessons.length / LessonsDB.length * 100 ) * 100) / 100 + '%'

console.log(loggedUser.Lessons.length)


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


//  Levels Completed || XP || Rank || Lessons Until Next Rank




loggedUser.rank = 'beginner'

let LIR = [] // LESSON IN RANK OF USER 

let LUNR = [] // LESSON UNTIL NEXT RANK OF USER

console.log(loggedUser);


for (const Module of ModulesDB) {

    console.log(Module);
    if(Module.rank == loggedUser.rank){
        LIR.push(...Module.lessons)
    }
}
console.log(LIR);

for (const Lesson_ID of LIR) {

    if(loggedUser.Lessons.find(Lesson => Lesson == Lesson_ID))

        LUNR.push(loggedUser.Lessons.find(Lesson => Lesson == Lesson_ID))

}

document.querySelector('#Levels_Until_Next_Rank').innerHTML = LIR.length - LUNR.length 

document.querySelector('#Rank').innerHTML = loggedUser.rank

document.querySelector('#XP').innerHTML = loggedUser.allXp

document.querySelector('#Lessons_Completed').innerHTML = loggedUser.Lessons.length
let UserToVisit = sessionStorage.getItem('UserToVisit')
UserToVisit = JSON.parse(UserToVisit)

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

const ProfileRankContainer = document.querySelector('#Profile_Rank_Container')


const Course_Completion = document.querySelector('#Course_Completion')

const Current_Module_Completion = document.querySelector('#Current_Module_Completion')



if(!UserToVisit){
    UserToVisit = loggedUser
}

// console.log(window.location.href) // USE URL TO GET ID OF USER 

ProfileImageContainer.innerHTML += `<img class="Profile" width="100" src=../Media/imgs/Avatars/${UserToVisit.Avatar}.svg> `

ProfileNameContainer.innerHTML = UserToVisit.name

if(UserToVisit.id == loggedUser.id){
    ProfileNameContainer.innerHTML += `<div class="edit" ><a href="EditProfile.html"><img src="../Media/imgs/Icons/Pencil.png"></a></div>`
}

ProfileRankContainer.innerHTML = UserToVisit.rank

//STATISTICS

Course_Completion.innerHTML = `<div class="innercircle">${Math.round((UserToVisit.Lessons.length / LessonsDB.length * 100 ) * 100) / 100 + '%'}</div>`

Course_Completion.style.setProperty("--percentage",UserToVisit.Lessons.length / LessonsDB.length * 100 + '%') 

let CurrentModule
for (const Module of ModulesDB) {


    if(Module.lessons.find(lesson => lesson == UserToVisit.Lessons[UserToVisit.Lessons.length-1]))
        CurrentModule = Module

    
}


if(CurrentModule){
    
    let i = 0 // lessons completed
    for (const lesson of CurrentModule.lessons) {
        if(UserToVisit.Lessons.find(l => l == lesson))
        i += 1
    }
    
    Current_Module_Completion.innerHTML = `<div class="innercircle">${Math.round( ( i / CurrentModule.lessons.length * 100 ) * 100) / 100 + ' %'}</div>`
    
    Current_Module_Completion.style.setProperty("--percentage",( i / CurrentModule.lessons.length * 100 + '%' ))

}else{

    Current_Module_Completion.innerHTML = `<div class="innercircle">0%</div>`
    
    Current_Module_Completion.style.setProperty("--percentage",( 0 ))

}

//  Levels Completed || XP || Rank || Lessons Until Next Rank

UserToVisit.rank = 'beginner'

let LIR = [] // LESSON IN RANK OF USER 

let LUNR = [] // LESSON UNTIL NEXT RANK OF USER


for (const Module of ModulesDB) {


    if(Module.rank == UserToVisit.rank){
        LIR.push(...Module.lessons)
    }
}

for (const Lesson_ID of LIR) {

    if(UserToVisit.Lessons.find(Lesson => Lesson == Lesson_ID))

        LUNR.push(UserToVisit.Lessons.find(Lesson => Lesson == Lesson_ID))

}

for (const Achievement of AchievementsDB) {
    AchievementDomString = ''

    AchievementDomString += 
    `
    <div id="${Achievement.id}" class="Achievement flex-column padding-L">
    <div class="AchievementFrame">
    <img alt="${Achievement.imageUrl}" src="../Media/imgs/IconAchievements/${Achievement.imageUrl}">
    </div>
    <h3>${Achievement.name}</h3> <p>${Achievement.description}</p>
    `
    

    if(UserToVisit.Achievements.find( AchivementID => AchivementID == Achievement.id ))
    AchievementDomString += `<p>Completed</p>`

    AchievementDomString += `</div>`

    document.querySelector('#Achievements').innerHTML += AchievementDomString
}

document.querySelector('#Levels_Until_Next_Rank').innerHTML = LIR.length - LUNR.length 

document.querySelector('#Rank').innerHTML = UserToVisit.rank

document.querySelector('#XP').innerHTML = UserToVisit.allXp

document.querySelector('#Lessons_Completed').innerHTML = UserToVisit.Lessons.length

const Top10Table = document.querySelector('#Top10Table tbody')

    usersDB.sort((a , b) => {
        if(b.weekXp < a.weekXp){
            return -1
        }   
    })

let place = 1
for (const user of usersDB) {

    if(UserToVisit.id == user.id) {
        Top10Table.innerHTML += `<tr class="user_row"><td>${place}</td><td>${user.name}</td><td>${user.weekXp}</td></tr>`
    }else{
        Top10Table.innerHTML += `<tr><td>${place}</td><td>${user.name}</td><td>${user.weekXp}</td></tr>`     
    }
    
    if(place == 10)
        break;

    place += 1
}

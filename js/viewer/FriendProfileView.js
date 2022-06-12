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

const AvatarNum = 2

ProfileImageContainer.innerHTML += `<img class="Profile" width="100" src=../Media/imgs/Avatars/${AvatarNum}.svg> `

ProfileNameContainer.innerHTML = loggedUser.name
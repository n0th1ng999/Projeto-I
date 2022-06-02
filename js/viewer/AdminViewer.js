import users   from '../models/usersModel.js'
import Lessons from '../models/LessonsModel.js'
import Modules from '../models/ModulesModel.js'
import Exercises from '../models/ExercisesModel.js'
import Missions from '../models/MissionsModel.js'
import Achievements from '../models/AchievementsModel.js'

const TbodyUserTable = document.querySelector('#UserTable tbody')

let usersDB = localStorage.getItem('usersDB')
usersDB = JSON.parse(usersDB)
console.table(usersDB)

for (const user of usersDB) {
    TbodyUserTable.innerHTML += `<tr><td>${user?.id}</td><td>${user?.name}</td><td>${user?.email}</td><td><button class="Block_User_btn" id="${user?.id}"></button></td></tr>`
    
}

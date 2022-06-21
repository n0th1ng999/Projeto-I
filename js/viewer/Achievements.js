let UserToVisit = sessionStorage.getItem('UserToVisit')
UserToVisit = JSON.parse(UserToVisit)

let loggedInUser = sessionStorage.getItem('loggedUser')
loggedInUser = JSON.parse(loggedInUser)

if(!UserToVisit){
    UserToVisit = loggedInUser
}

let usersDB = localStorage.getItem('usersDB') // load into string
usersDB = JSON.parse(usersDB)

let AchievementsDB = localStorage.getItem('AchievementsDB')
AchievementsDB = JSON.parse(AchievementsDB)

let AchievementDomString
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

document.querySelector('#username').innerHTML = UserToVisit.name
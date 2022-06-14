let loggedInUser = sessionStorage.getItem('loggedUser')
loggedInUser = JSON.parse(loggedInUser)

let usersDB = localStorage.getItem('usersDB') // load into string
usersDB = JSON.parse(usersDB)

let AchievementsDB = localStorage.getItem('AchievementsDB')
AchievementsDB = JSON.parse(AchievementsDB)

let AchievementDomString
for (const Achievement of AchievementsDB) {
    AchievementDomString = ''

    AchievementDomString += 
    `<a id="${Achievement.id}"><div>
    <img alt="${Achievement.imageUrl}" src="${Achievement.imageUrl}">
    <h3>${Achievement.name}</h3> <p>${Achievement.description}</p>`
    

    if(loggedInUser.Achievements.find( AchivementID => AchivementID == Achievement.id ))
    AchievementDomString += `<p>Completed</p>`

    AchievementDomString += `</div></a>`

    document.querySelector('#Achievements').innerHTML += AchievementDomString
}

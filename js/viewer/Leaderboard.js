let loggedUser = sessionStorage.getItem('loggedUser')
loggedUser = JSON.parse(loggedUser)

let usersDB = localStorage.getItem('usersDB')
usersDB = JSON.parse(usersDB)

let UsersDBRank = []

usersDB[0].rank = 'intermediate'

loggedUser.Friends.push(2)

usersDB.forEach(user => {
    if(user.rank == loggedUser.rank) {
        UsersDBRank.push(user)
    }
})

console.log(UsersDBRank);


// LOAD TABLES

function LoadTable(prop,DB,Table,last_place) {
    
    Table.innerHTML = ''
    let place = 1
    
    DB.sort((a , b) => {
        if(b[prop] < a[prop]){
            return -1
        }   
    })

    for (const user of DB) {

        if(loggedUser.id == user.id) {
            Table.innerHTML += `<tr class="user_row"><td>${place}</td><td>${user.name}</td><td>${user.weekXp}</td></tr>`
        }else if(loggedUser.Friends.find(friendid => friendid == user.id)){
            Table.innerHTML += `<tr class="friend_row"><td>${place}</td><td>${user.name}</td><td>${user.weekXp}</td></tr>`
        }else{
            Table.innerHTML += `<tr><td>${place}</td><td>${user.name}</td><td>${user.weekXp}</td></tr>`     
        }
        
        if(place == last_place)
            break;
            
        place += 1
    }

    document.querySelectorAll('.InsertUserRank').forEach(span => span.innerHTML = loggedUser.rank)
}

// LOAD TABLES



// THIS IS TOP 10 TABLE THIS WEEK
const Top10Table_Week = document.querySelector('#Top10Table_Week tbody')

LoadTable('weekXp',usersDB,Top10Table_Week,10)

// THIS IS TOP 10 TABLE THIS WEEK IN RANK
const Top10Table_Week_Rank = document.querySelector('#Top10Table_Week_Rank tbody')

LoadTable('weekXp',UsersDBRank,Top10Table_Week_Rank,10)

// THIS IS TOP 10 TABLE ALL TIME
const Top10Table = document.querySelector('#Top10Table tbody')


LoadTable('allXp',usersDB,Top10Table,10)

// THIS IS TOP 10 TABLE ALL TIME IN RANK
const Top10Table_Rank = document.querySelector('#Top10Table_Rank tbody')

LoadTable('allXp',UsersDBRank,Top10Table_Rank,10)

const Top50Table = document.querySelector('#Top50Table tbody')



document.querySelectorAll('.LoadBigTable').forEach(btn => btn.addEventListener('click',() => {

    if(btn.value == "Top10Table_Week"){
        Top50TableTitle.innerHTML = "Top 50 Table this week"
        LoadTable('weekXp',usersDB,Top50Table,50)

    }else if(btn.value == "Top10Table_Week_Rank"){
        Top50TableTitle.innerHTML = "Top 50 Table this week within <span class='InsertUserRank'></span>"
        LoadTable('weekXp',UsersDBRank,Top50Table,50)

    }else if(btn.value == "Top10Table"){
        Top50TableTitle.innerHTML = "Top 50 Table <span class='InsertUserRank'></span>"
        LoadTable('allXp',usersDB,Top50Table,50)

    }else if(btn.value == "Top10Table_Rank"){
        Top50TableTitle.innerHTML = "Top 50 Table within <span class='InsertUserRank'></span>"
        LoadTable('allXp',UsersDBRank,Top50Table,50)

    }


}))


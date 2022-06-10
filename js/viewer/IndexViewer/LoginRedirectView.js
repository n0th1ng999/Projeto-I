let usersDB = localStorage.getItem('usersDB') // load into string
usersDB = JSON.parse(usersDB)

let loggedInUser = sessionStorage.getItem('LoggedInUser')
loggedInUser = JSON.parse(loggedInUser)

if(loggedInUser){

   if(usersDB.find(user => user.id === loggedInUser.id)){    
        window.location.replace("/html/home.html")
    } 
}


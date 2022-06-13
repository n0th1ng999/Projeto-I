let usersDB = localStorage.getItem('usersDB') // load into string
usersDB = JSON.parse(usersDB)

let loggedInUser = sessionStorage.getItem('loggedUser')
loggedInUser = JSON.parse(loggedInUser)

// Username 

const username = document.getElementById('username')

const password = document.getElementById('password')

const passwordShow = document.getElementById('passwordShow')

const Change_User = document.getElementById('Change_User')


username.value = loggedInUser.name

password.value = loggedInUser.password

Change_User.addEventListener('click',()=>{

    loggedInUser.name = username.value
    
    loggedInUser.password = password.value

})

let show = false
passwordShow.addEventListener('click',()=>{
    console.log('click')

    if(!show){
        password.setAttribute("type", "text")
        show = true
    }
    
    else{
        password.setAttribute("type","password")
        show = false
    }

    
})
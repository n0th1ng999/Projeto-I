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

    const loggedInUserJSON = JSON.stringify(loggedInUser)
    
    sessionStorage.setItem('loggedUser',loggedInUserJSON)

    usersDB.find(User => User.id == loggedInUser.id).name = loggedInUser.name

    usersDB.find(User => User.id == loggedInUser.id).password = loggedInUser.password

    usersDB.find(User => User.id == loggedInUser.id).Avatar = loggedInUser.Avatar

    localStorage.setItem('usersDB', JSON.stringify(usersDB))

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

const ProfileFrames = document.querySelectorAll('.pfpFrame')

const ProfileFramesCheck = document.querySelectorAll('.pfpFrameCheck')

ProfileFramesCheck[parseInt(loggedInUser.Avatar)-1].innerHTML += `<img class="check" src="../Media/imgs/Icons/Correct.png">`

function LoadPfpButton(){

    for (const pfpIndex in ProfileFrames) {
        
        if (Object.hasOwnProperty.call(ProfileFrames, pfpIndex)) {
            
            ProfileFrames[pfpIndex].addEventListener('click', ()=>{
                
                ProfileFrames[pfpIndex].setAttribute("id",pfpIndex) 
                
                loggedInUser.Avatar = parseInt( ProfileFrames[pfpIndex].id) + 1 
                
                clearChecks()

                ProfileFramesCheck[parseInt(loggedInUser.Avatar)-1].innerHTML += `<img class="check" src="../Media/imgs/Icons/Correct.png">`
            
                console.log(loggedInUser.Avatar)    
    
                })
            
            }

        }

    }
               
LoadPfpButton()

function clearChecks() {
    ProfileFramesCheck.forEach(pfp => pfp.innerHTML = '')
}
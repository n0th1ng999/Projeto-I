let loggedUser = sessionStorage.getItem('loggedUser')
loggedUser = JSON.parse(loggedUser)

let usersDB = localStorage.getItem('usersDB')
usersDB = JSON.parse(usersDB)

const FriendsList = document.querySelector('#FriendsList')
function LoadFriends() {
    FriendsList.innerHTML = ''
    for (const user of usersDB) {
        if(loggedUser.Friends.find(u => u == user.id)){
        FriendsList.innerHTML +=
        `<div  class=" bg-white  d-flex card-friend margin-M space-between ">
        <div class="d-flex align-items-center gap-L  margin-S">
            <a id="${user.id}" class="VisitProfile">
                <div class="pfpFrame pfpFrame-Orange">
                    <img src="../Media/imgs/Avatars/${user.Avatar}.svg" alt="User Avatar">
                </div>
            </a>
            <h4  class="Heading f-size-M color-Black padding-L">${user.name}</h4>
        </div>
      
        </div>`
    }
}

    VisitProfileLoad()
}


const AddFriendsDiv = document.querySelector('#AddFriendsDiv')


document.querySelector('#friendSearchBtn').addEventListener('click', () => {
    
    LoadUsers()

})

function VisitProfileLoad(){ 

    document.querySelectorAll('.VisitProfile').forEach(btn => btn.addEventListener('click', ()=>{
        
        let UserToVisit = usersDB.find(User => User.id == btn.id)

        sessionStorage.setItem('UserToVisit',JSON.stringify(UserToVisit))

        console.log(UserToVisit);
        
        window.location.href = "Profile.html"
        
    }))
}

function AddFriendButonLoad() {
    document.querySelectorAll('.AddFriendButon').forEach(btn => btn.addEventListener('click', () => {

        
        loggedUser.Friends.push(btn.id)
        sessionStorage.setItem('loggedUser',JSON.stringify(loggedUser))
        
        LoadUsers()

        LoadFriends()

    }))

}

function RemoveFriendButonLoad() {
    document.querySelectorAll('.AddedFriendButon').forEach(btn => btn.addEventListener('click', () => {

        loggedUser.Friends = loggedUser.Friends.filter(friend => friend != btn.id)
        sessionStorage.setItem('loggedUser',JSON.stringify(loggedUser))
        LoadUsers()

        LoadFriends()

    }))

}

function LoadUsers(){
    AddFriendsDiv.innerHTML = ''
    for (const user of usersDB) {
        
        if(user.name.toLowerCase().includes(document.querySelector('#friendSearch').value.toLowerCase())){
            if((user.id == loggedUser.id)){
                
                AddFriendsDiv.innerHTML +=
                `
                <div  class=" bg-white  d-flex card-friend margin-M space-between ">
                    <div class="d-flex align-items-center gap-L  margin-S">
                        <a id="${user.id}" class="VisitProfile">
                            <div class="pfpFrame pfpFrame-Orange">
                                <img src="../Media/imgs/Avatars/${user.Avatar}.svg" alt="User Avatar">
                            </div>
                        </a>
                        <h4  class="Heading f-size-M color-Black padding-L">${user.name}</h4>
                    </div>
                  
                </div>
           `
                
            }else if(!(loggedUser.Friends.find(u => u == user.id ))){
            AddFriendsDiv.innerHTML +=
           `
                <div  class=" bg-white  d-flex card-friend margin-M space-between ">
                    <div class="d-flex align-items-center gap-L  margin-S">
                        <a id="${user.id}" class="VisitProfile">
                            <div class="pfpFrame pfpFrame-Orange">
                                <img src="../Media/imgs/Avatars/${user.Avatar}.svg" alt="User Avatar">
                            </div>
                        </a>
                        <h4  class="Heading f-size-M color-Black ">${user.name}</h4>
                    </div>
                    <button id="${user.id}" class="bg-Orange h-full square AddFriendButon">
                        <h4 class="f-size-S Heading color-White padding-L">Add</h4>
                    </button>
                </div>
           `

        }else{
            AddFriendsDiv.innerHTML +=
            `
                <div  class=" bg-white  d-flex card-friend margin-M space-between ">
                    <div class="d-flex align-items-center gap-L  margin-S">
                        <a id="${user.id}" class="VisitProfile">
                            <div class="pfpFrame pfpFrame-Orange">
                                <img src="../Media/imgs/Avatars/${user.Avatar}.svg" alt="User Avatar">
                            </div>
                        </a>
                        <h4  class="Heading f-size-M color-Black padding-L">${user.name}</h4>
                    </div>
                    <button id="${user.id}" class="bg-White h-full square AddedFriendButon">
                        <h4 class="f-size-S Heading color-Black">Added</h4>
                    </button>
                </div>
           `

            }
        }
         
        }

        AddFriendButonLoad()
        
        RemoveFriendButonLoad()

        VisitProfileLoad()
    }


LoadFriends()
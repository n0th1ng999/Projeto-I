const UserDBjson = localStorage.getItem('usersDB')
const usersDB = JSON.parse(UserDBjson)

/* Open Modal ...*/

document.querySelector('#Login_Button').addEventListener('click', ()=>{
    
    document.querySelector('#Sign-In-Modal').style.display = 'flex';
  
})

document.querySelector('#Sign-In-Modal_Close').addEventListener('click', ()=>{
    
    document.querySelector('#Sign-In-Modal').style.display = 'none';
  
})

/* Get values ...*/

const Username = document.querySelector('#Sign-In-Modal_Username')

const Password = document.querySelector('#Sign-In-Modal_Password')

document.querySelector('#SignInBtn').addEventListener('click', ()=>{

    let loggedUser = usersDB.find(user => (user.name == Username.value && user.password == Password.value))
    
    if(loggedUser){

        console.log(loggedUser)

        sessionStorage.setItem('loggedUser',JSON.stringify(loggedUser))

        window.location.replace("/html/home.html")

    }else{

        alert('Username or Password not correct !!!')

    }

})
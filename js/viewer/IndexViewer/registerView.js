import users from '../../models/usersModel.js'

const usersDBjson = localStorage.getItem('usersDB')
const usersDB = JSON.parse(usersDBjson)

console.log(usersDB);

/* OPEN MODAL */
document.querySelectorAll('.Register_Button').forEach(btn => btn.addEventListener('click', ()=>{
    
    document.querySelector('#Sign-Up-Modal').style.display = 'flex';
    
}))

document.querySelector('#Sign-Up-Modal_Close').addEventListener('click', ()=>{
    
    document.querySelector('#Sign-Up-Modal').style.display = 'none';
    
})

/* Get values ...*/

const Username = document.querySelector('#Sign-Up-Modal_Username')

const Email = document.querySelector('#Sign-Up-Modal_Mail')

const Password = document.querySelector('#Sign-Up-Modal_Password')

const PasswordConfirm = document.querySelector('#Sign-Up-Modal_Password_Confirm')

document.querySelector('#SignUpBtn').addEventListener('click', ()=>{


    let loggedUser = usersDB.find(user => user.name === Username.value)
    
    if(loggedUser){
        
        alert('Username "'+loggedUser.name+'" Already in Use !!!')
        
        Username.value = ''

    }else{
        
        if(Password.value == PasswordConfirm.value){

            if(Username.value.length >= 5 && Username.value.length <= 20){

                if(Password.value.length >= 5 && Password.value.length <= 20){
                
                    if(Email.value.includes('@') && Email.value.includes('.')){

                        usersDB.push(new users(usersDB,Username.value,Password.value,Email.value))
                        
                        console.log(usersDB);
                
                    }else{

                        alert('Invalid Email adress')

                    }

                }else{

                    alert('Password must be at least 5 characters with a max of 20 characters')

                    }

            }else{
                
                alert('Username must be at least 5 characters with a max of 20 characters')
            
            }

        }else{

            alert('Password And Confirm Password mismatch')

        }

    }

})
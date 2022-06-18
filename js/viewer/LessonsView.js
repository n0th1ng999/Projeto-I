let loggedUser = sessionStorage.getItem('loggedUser')
loggedUser = JSON.parse(loggedUser)

let ExercisesDBjson = localStorage.getItem('ExercisesDB')
let ExercisesDB = JSON.parse(ExercisesDBjson)

let LessonsDBjson = localStorage.getItem('LessonsDB') 
let LessonsDB = JSON.parse(LessonsDBjson)

let ModulesDBjson = localStorage.getItem('ModulesDB') 
let ModulesDB = JSON.parse(ModulesDBjson)

let usersDBjson = localStorage.getItem('usersDB') 
let usersDB = JSON.parse(usersDBjson)

//TEST



/* LOAD LESSON TREE */
const Ranks = ['Beginner','Intermediate','Pro']
function LoadRank_Module_Lesson(){
    
    let RankModulesLessonsHtml= ``
    for (const Rank of Ranks) {
    
        RankModulesLessonsHtml += 
            `<div id="${Rank}"  class="w-full d-flex flex-column" >
                <h1>${Rank}</h1> `
            
        
        for (const Module of ModulesDB) {
            
            if(Module.rank == Rank.toLowerCase()){ 
    
                RankModulesLessonsHtml +=  
                `<h2>${Module.name}</h2>
                <div>`
    
            for (const Lesson of LessonsDB) {
                
                if(Module.lessons.find(el => el == Lesson.id)){
    
                    RankModulesLessonsHtml += 
                   
                    ` <div>
    
                    <h3>${Lesson.name}</h3>`
                
                    
                    // SE OS REQUESITOS SAO VAZIOS OU SE ESTAO VAZIOS


                    
                    if(loggedUser.Lessons.find(el => el == parseInt(Lesson.id))){
                        
                        RankModulesLessonsHtml += `<button id="${Lesson.id}" class="OpenLessonModal_btn" >${Lesson.name}</button>`
                        RankModulesLessonsHtml += `<p> Finished </p>`
                        
                    }else if(Lesson.requisitedLessons.every(Rl => loggedUser.Lessons.find(el => el == Rl)))
                    {
                        RankModulesLessonsHtml += `<button id="${Lesson.id}" class="OpenLessonModal_btn" >${Lesson.name}</button><p> Unlocked </p>` 

                    }else{
                        RankModulesLessonsHtml += ` <button disabled id="${Lesson.id}" class="OpenLessonModal_btn" >${Lesson.name}</button><p> Locked </p>`
                        
                    }
                    
                    
            

                    RankModulesLessonsHtml +=  `</div>  `
    
                    }        
                    
                }
    
                RankModulesLessonsHtml += `</div>`

            }
        }

        RankModulesLessonsHtml += `</div>`

    }
    
  
    document.querySelector('#ContainerLessons').innerHTML = RankModulesLessonsHtml
    Load_OpenLessonModal_btns()
}

LoadRank_Module_Lesson()




let CurrentLesson

function Load_OpenLessonModal_btns() {
    console.log('click');

    document.querySelectorAll('.OpenLessonModal_btn').forEach(btn => btn.addEventListener('click', () =>{

        CurrentLesson = LessonsDB.find(el => el.id == btn.id)
        
        document.querySelector('#Lesson-Modal-Title').innerHTML = CurrentLesson.name

        document.querySelector('#Exercises_Field').innerHTML = ''
        
        let exercisesstring = ''

        for (const Exercise of ExercisesDB) {
            
            if(Exercise.LessonId == CurrentLesson.id){

                if(Exercise.Answers.length > 1){
                    
                    exercisesstring += `<label>${Exercise.question}</label>
                    <select id="${Exercise.id}" class="Exercise" >`

                   

                    for (const AnswerID in Exercise.Answers) {

                        exercisesstring  += `<option value="${AnswerID}">${Exercise.Answers[AnswerID]}</option>`
                        
                    }
                    exercisesstring += `</select>` 
                }else if(Exercise.Answers.length == 1){
                    
                    exercisesstring  += `<label>${Exercise.question}</label>
                    <input type="text" id="${Exercise.id}" class="Exercise_Input">`

                }

            }

        }



        document.querySelector('#Exercises_Field').innerHTML = exercisesstring

        document.querySelector('#Lesson-Modal').style.display = 'flex';

        
    }))
}




document.querySelector('#Lesson-Modal_Close').addEventListener('click', ()=>{
    
    document.querySelector('#Lesson-Modal').style.display = 'none';
    
})

/* ON CLICK FINISH LESSON */
document.querySelector('#FinishLesson').addEventListener('click', () => {

    let pass = true

    document.querySelectorAll('.Exercise').forEach(Exercise => {

        let Ex = ExercisesDB.find(Ex => Ex.id == Exercise.id) 

        if(!(Ex.CorrectAnswer == Exercise.value))
            pass = false

    })

    document.querySelectorAll('.Exercise_Input').forEach(Exercise => {

        let Ex = ExercisesDB.find(Ex => Ex.id == Exercise.id)    

        if(!(Ex.Answers.find(Answer => Answer == Exercise.value)))
            pass = false

    })
    
    console.log(pass);

    if(pass){
        if(!(loggedUser.Lessons.find(L => L == CurrentLesson.id))){

        loggedUser.Lessons.push(parseInt(CurrentLesson.id))
        
        loggedUser.allXp += CurrentLesson.xp
        
        loggedUser.weekXp += CurrentLesson.xp

        sessionStorage.setItem('loggedUser',JSON.stringify(loggedUser))

        for (let User of usersDB) {

            if(User.id == loggedUser.id){

                User.Lessons = loggedUser.Lessons

                User.allXp = loggedUser.allXp

                User.weekXp = loggedUser.weekXp

                localStorage.setItem('usersDB',JSON.stringify(usersDB))

                console.log(usersDB)
                              
            }
            
            
            }
        }
       
        
            document.querySelector('#Lesson-Modal').style.display = 'none';

      

       
        LoadRank_Module_Lesson()
    }else{

        alert('Not all the Answers are correct')

    }

})
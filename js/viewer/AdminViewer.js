import users from '../models/usersModel.js'
import Lessons from '../models/LessonsModel.js'
import Modules from '../models/ModulesModel.js'
import Exercises from '../models/ExercisesModel.js'
import Missions from '../models/MissionsModel.js'
import Achievements from '../models/AchievementsModel.js'

/* QUERY SELECTION TBODY --------------------------------*/
const TbodyUserTable = document.querySelector('#UserTable tbody')
const TbodyModulesTable = document.querySelector('#ModulesTable tbody')
//const TbodyLessonsTable = document.querySelector('#LessonsTable tbody')
//const TbodyExercisesTable = document.querySelector('#ExercisesTable tbody')
//const TbodyMissionsTable = document.querySelector('#MissionsTable tbody')
//const TbodyAchievementsTable = document.querySelector('#AchievementsTable tbody')


/* LOAD DB */

let usersDB = localStorage.getItem('usersDB') // load into string
usersDB = JSON.parse(usersDB)

//console.table(usersDB)

let ModulesDB = localStorage.getItem('ModulesDB') // load into string
ModulesDB = JSON.parse(ModulesDB)
//console.log(ModulesDB);

//console.table(ModuleDB)

let LessonsDB = localStorage.getItem('LessonsDB') // load into string
LessonsDB = JSON.parse(LessonsDB)

//console.table(LessonsDB)

let ExercisesDB = localStorage.getItem('ExercisesDB') // load into string
ExercisesDB = JSON.parse(ExercisesDB)

//console.table(ExercisesDB)

let MissionsDB = localStorage.getItem('MissionsDB') // load into string
MissionsDB = JSON.parse(MissionsDB)

//console.table(MissionsDB)

let AchievementsDB = localStorage.getItem('AchievementsDB') // load into string
AchievementsDB = JSON.parse(AchievementsDB)

//console.table(AchievementsDB)


/* User Table Functions */

/* Refresh User Table */
function UserTable() {
    TbodyUserTable.innerHTML = ''
    for (const user of usersDB) {
        if (user.blocked == false) {
            TbodyUserTable.innerHTML += `<tr>
                <td>${user?.id}</td>
                <td>${user?.name}</td>
                <td>${user?.email}</td>
                <td><button class="btn btn-danger Block_User_btns" id="${user?.id}">Block</button></td>
                </tr>`

            BlockButtons()
            UnblockButtons()

        } else {
            if (user.blocked == true) {
                TbodyUserTable.innerHTML += `<tr>
                    <td>${user?.id}</td>
                    <td>${user?.name}</td>
                    <td>${user?.email}</td>
                    <td><button class="btn btn-success Unblock_User_btns" id="${user?.id}">Block</button></td>
                    </tr>`

                BlockButtons()
                UnblockButtons()
            }
        }
    }
}

/* Block Buttons function */
function BlockButtons() {

    document.querySelectorAll('.Block_User_btns').forEach(

        Block_User_btn => Block_User_btn.addEventListener('click', () => {

            for (const user of usersDB) {

                if (user.id == Block_User_btn.id) {

                    user.blocked = true

                    UserTable()
                }
            }
        }))

}

/* UnBlock Buttons function */
function UnblockButtons() {

    document.querySelectorAll('.Unblock_User_btns').forEach(

        unblock_User_btn => unblock_User_btn.addEventListener('click', () => {

            for (const user of usersDB) {

                if (user.id == unblock_User_btn.id) {

                    user.blocked = false

                    UserTable()
                }
            }
        }))
}



/* User Table Functions */
document.querySelector('#btnSaveUsers').addEventListener('click', () => {
    localStorage.setItem('usersDB', JSON.stringify(usersDB))
})


UserTable() // initate table 

/* User Modules Functions */
function ModulesTable() {
    //console.log(TbodyModulesTable);
    TbodyModulesTable.innerHTML = ''
    for (const module of ModulesDB) {

        TbodyModulesTable.innerHTML += `
                      
                <tr class="bg-light  text-dark">
                <th class="">${module?.id}</th>
                <th class="">${module?.name}</th>
                <th class="">${module?.rank}</th>
                <th class="">
                <button id="${module?.id}" class="EditModalModule btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#EditModalModule" >Change Module</button>
                <div class="btn-group-vertical">
                <button id="${module?.id}" class="btn btn-default ModuleListUp" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                </svg>
                </button>
                <button id="${module?.id}" class="btn btn-default ModuleListDown" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                </button>
                </div>
                  </th>
                </tr>
                
                `

        // FOR EACH LESSONID OF THIS MODULE
        for (const LessonID of module.lessons) {

            // LOOP THROUGH LESSONS
            for (const Lesson of LessonsDB) {

                // CHECK MODULE EACH ID ARRAY OF LESSONS == Module.id
                if (LessonID == Lesson.id) {

                    // LOOP THROUGH LESSONS

                            TbodyModulesTable.innerHTML += `<tr>
                                    <td>${Lesson?.id}</td>
                                    <td>${Lesson?.name}</td>
                                    <td>${Lesson?.xp}</td>
                                    <td>
                                    <button id="${Lesson?.id}" data-bs-toggle="modal" data-bs-target="#EditModal_Lesson" class="lesson_edit_btns btn btn-secondary">
                                    Change Lesson
                                    </button>
                                    </td>
                                    </tr>
                                    <tr>`
                        

                    }
                
            }
        }

    }

    EditModuleModal_LoadModule()
    
    LoadModuleOrderListButtons()

    OpenEditLessonModal()

}

function LoadModuleOrderListButtons() {
    
    document.querySelectorAll('.ModuleListDown').forEach(btn => btn.addEventListener('mouseup', () => {

        for (const ModuleIndex in ModulesDB) {

            if(ModulesDB[ModuleIndex].id == btn.id){

                if(ModuleIndex < ModulesDB.length - 1){

                    const tempModule =  ModulesDB[ ModuleIndex ]

                    ModulesDB[ ModuleIndex ] = ModulesDB[parseInt(ModuleIndex) + 1 ] 

                    ModulesDB[parseInt(ModuleIndex) + 1] = tempModule

                    break;
               

                }
            }
        }
        
        localStorage.setItem('ModulesDB', JSON.stringify(ModulesDB))

        ModulesTable()


    }))

    document.querySelectorAll('.ModuleListUp').forEach(btn => btn.addEventListener('mouseup', () => {

        for (const ModuleIndex in ModulesDB) {

            if(ModulesDB[ModuleIndex].id == btn.id){

                if(ModuleIndex > 0){

                    const tempModule =  ModulesDB[ ModuleIndex ]

                    ModulesDB[ ModuleIndex ] = ModulesDB[parseInt(ModuleIndex) - 1 ] 

                    ModulesDB[parseInt(ModuleIndex) - 1] = tempModule

                    break;
               

                }
            }
        }
        
        localStorage.setItem('ModulesDB', JSON.stringify(ModulesDB))

        ModulesTable()
        
    }))


}


ModulesTable()

/* CREATE MODULE BUTTON */

/* Fieldset */
/*Input Name */
const CreateModuleModal_ModuleNameInput = document.querySelector('#CreateModuleModal_ModuleNameInput')

/*Select Rank */
const CreateModuleModal_ModuleRankSelect = document.querySelector('#CreateModuleModal_ModuleRankSelect')

/*Select Lessons, Add button and Table to show chosen lessons*/
const CreateModuleModal_ModuleLessonsSelect = document.querySelector('#CreateModuleModal_ModuleLessonsSelect')

const CreateModuleModal_ModuleLessonsSave = document.querySelector('#CreateModuleModal_ModuleLessonsSave')

const CreateModuleModal_ModuleLessonsTable = document.querySelector('#CreateModuleModal_ModuleLessonsTable tbody')

/* Button / Save / Close */
/*Save Module Button*/
const CreateModuleModal_SaveBtn = document.querySelector('#CreateModuleModal_SaveBtn')

/*Close Module Button*/
const CreateModuleModal_CloseBtn = document.querySelector('#CreateModuleModal_CloseBtn')

let CreateModuleModal_arrayOfLessons = []

function createModule() {
    let CreateModuleModal_arrayOfLessons_ids = []
    for (const Lesson of CreateModuleModal_arrayOfLessons) {
        CreateModuleModal_arrayOfLessons_ids.push(Lesson.id)
    }

    if (CreateModuleModal_ModuleNameInput.value) {
        console.log('Pushing ...');
        ModulesDB.push(new Modules(ModulesDB, CreateModuleModal_ModuleNameInput.value, CreateModuleModal_arrayOfLessons_ids, CreateModuleModal_ModuleRankSelect.value))
        console.log(ModulesDB);
        ModuleModal_Clear()
        ModulesTable()
    } else {
        alert('Please fill in the name of the module')
    }
}

function ModuleModal_Clear() {
    console.log('clearing...');
    CreateModuleModal_arrayOfLessons = []
    CreateModuleModal_ModuleNameInput.value = ''
    CreateModuleModal_ModuleRankSelect.value = ''
    CreateModuleModal_ModuleLessonsSelect.value = ''
    CreateModuleModal_ModuleLessonsTable.innerHTML = ''
    console.log(CreateModuleModal_arrayOfLessons);

}

function ModuleModal_LessonsTable() {

    CreateModuleModal_ModuleLessonsTable.innerHTML = ''

    for (const Lesson of CreateModuleModal_arrayOfLessons) {

        CreateModuleModal_ModuleLessonsTable.innerHTML += `<tr><td>${Lesson.id}</td><td>${Lesson.name}</td><td><button id="${Lesson.id}" class="Remove_Lesson btn btn-danger">Remove</td></tr>`

    }
}

function ModuleModal_LessonsSelect() {

    for (const Lesson of LessonsDB) {

        CreateModuleModal_ModuleLessonsSelect.innerHTML += `<option value="${Lesson.id}">${Lesson.name}</option>`
    }
}


function AddLessonToTable() {

    if (!(CreateModuleModal_arrayOfLessons.find(Lesson => Lesson.id == CreateModuleModal_ModuleLessonsSelect.value))) {

        for (const Lesson of LessonsDB) {

            if (Lesson.id == CreateModuleModal_ModuleLessonsSelect.value) {

                CreateModuleModal_arrayOfLessons.push(Lesson)

            }

        }
        ModuleModal_LessonsTable()
        LoadRemovFrom_arrayFunc()
        //console.table(CreateModuleModal_arrayOfLessons);

    }

}

function RemoveFrom_arrayOfLessons(Remove_id) {

    CreateModuleModal_arrayOfLessons = CreateModuleModal_arrayOfLessons.filter(Lesson => Lesson.id != Remove_id)
    ModuleModal_LessonsTable()
    LoadRemovFrom_arrayFunc()
    //console.table(CreateModuleModal_arrayOfLessons);

}

function LoadRemovFrom_arrayFunc() {
    document.querySelectorAll('.Remove_Lesson').forEach(
        btn => btn.addEventListener(
            'click', () => {
                RemoveFrom_arrayOfLessons(btn.id)
            }))
}



CreateModuleModal_ModuleLessonsSave.addEventListener('click', () => {
    AddLessonToTable()
})

CreateModuleModal_SaveBtn.addEventListener('click', () => {
    createModule()
})

CreateModuleModal_CloseBtn.addEventListener('click', () => {
    ModuleModal_Clear()
})

ModuleModal_LessonsSelect()

//console.table(ModulesDB)

/* EDIT MODULES BUTTONS */

/*Input Name */
const EditModalModule_ModuleNameInput = document.querySelector('#EditModalModule_ModuleNameInput')

/*Select Rank */
const EditModalModule_ModuleRankSelect = document.querySelector('#EditModalModule_ModuleRankSelect')

/*Select Lessons, Add button and Table to show chosen lessons*/
const EditModalModule_LessonsSelect = document.querySelector('#EditModalModule_LessonsSelect')

const EditModalModule_ModuleLessonsSave = document.querySelector('#EditModalModule_ModuleLessonsSave')

const EditModalModule_ModuleLessonsTable = document.querySelector('#EditModalModule_ModuleLessonsTable tbody')

/*Create Module Button*/
const EditModalModule_SaveBtn = document.querySelector('#EditModalModule_SaveBtn')

/*Delete Module Button*/
const EditModalModule_DelBtn = document.querySelector('#EditModalModule_DelBtn')

/* ARRAY OF LESSONS TO EDIT */
let EditModalModule_ArrayOfLessons = []
// ADD LESSON IN MODULE 
function EditModuleModal_LessonsSelect() {

    EditModalModule_LessonsSelect.innerHTML = ''
    
    for (const Lesson of LessonsDB) {

        EditModalModule_LessonsSelect.innerHTML += `<option value="${Lesson.id}">${Lesson.name}</option>`
    }
}

/* LOAD THE LESSONS FROM MODULE TO THE TABLE */
function EditModal_LoadLessonTable() {
    console.log(EditModalModule_ArrayOfLessons);

    EditModalModule_ModuleLessonsTable.innerHTML = ''

    for (const Lesson of EditModalModule_ArrayOfLessons) {
        
        EditModalModule_ModuleLessonsTable.innerHTML += `<tr><td>${Lesson.id}</td><td>${Lesson.name}</td><td><button id="${Lesson.id}" class="btns_edit_removeLesson btn btn-danger">Remove</button></td></tr>`
    
    }

     console.log(EditModalModule_ArrayOfLessons);

    edit_removeLesson()
}

/* INTIALIZING BUTTONS FOR EACH MODULE*/

let ModuleToEdit /* ID OF MODULE TO EDIT */

function EditModuleModal_LoadModule() {
    document.querySelectorAll('.EditModalModule').forEach(btn => {
        btn.addEventListener('click', () => {
            for (const module of ModulesDB) {
                if (module.id == btn.id) {
                    ModuleToEdit = module
                    break;
                }
            }

            EditModalModule_ArrayOfLessons = []

            for (const lessonId of ModuleToEdit.lessons) {

                let row = LessonsDB.find(lesson => lesson.id == lessonId)

                if(row){
                    EditModalModule_ArrayOfLessons.push(row)
                }

            }

            EditModalModule_ModuleNameInput.value = ModuleToEdit.name

            EditModalModule_ModuleRankSelect.value = ModuleToEdit.rank


            EditModal_LoadLessonTable() /*LOAD LESSONS OF CLICKED MODULE*/

            EditModuleModal_LessonsSelect() /*LOAD LESSONS FROM LESSONDB*/



        })
    })
}

/*ADDS EVENT LISTENER TO REMOVE BUTTONS IN LESSONS TABLE ON EDIT MODAL */
function edit_removeLesson() {

    document.querySelectorAll('.btns_edit_removeLesson').forEach(btn => btn.addEventListener('click', () => {

        EditModalModule_ArrayOfLessons = EditModalModule_ArrayOfLessons.filter(Lesson => Lesson.id != btn.id)

        EditModal_LoadLessonTable() /*LOAD LESSONS OF CLICKED MODULE*/

    }))

}

/* CLICKING SAVE */
EditModalModule_SaveBtn.addEventListener('click', () => {

    let EditModalModule_ArrayOfLessonsIds = []

    console.log(EditModalModule_ArrayOfLessonsIds)

    for (const Lesson of EditModalModule_ArrayOfLessons) {

        EditModalModule_ArrayOfLessonsIds.push(Lesson.id)
    }

    for (let Module of ModulesDB) {
        if (Module.id == ModuleToEdit.id) {

            Module.name = EditModalModule_ModuleNameInput.value

            Module.rank = EditModalModule_ModuleRankSelect.value

            Module.lessons = EditModalModule_ArrayOfLessonsIds

        }
    }

    /*UPLOAD MODULESDB*/

    const ModulesDBjson = JSON.stringify(ModulesDB)

    localStorage.setItem('ModulesDB', ModulesDBjson)

    ModulesTable()

})

/* CLICKING SAVE */
EditModalModule_DelBtn.addEventListener('click', () => {


    let EditModalModule_ArrayOfLessonsIds = []

    for (const Lesson of EditModalModule_ArrayOfLessons) {

        EditModalModule_ArrayOfLessonsIds.push(Lesson.id)
    }


    for (let Module of ModulesDB) {
        
        console.log(Module);

        if (Module.id == ModuleToEdit.id) {

            let ModuleIndex = ModulesDB.indexOf(Module);

            ModulesDB.splice(ModuleIndex, 1);
        }
    }

    
    /*UPLOAD MODULESDB*/

    const ModulesDBjson = JSON.stringify(ModulesDB)

    localStorage.setItem('ModulesDB', ModulesDBjson)

    ModulesTable()

})

/* ADD LESSONS TO TABLE BUTTON*/
EditModalModule_ModuleLessonsSave.addEventListener('click', () => {

    let tempL = LessonsDB.find(lesson => lesson.id == EditModalModule_LessonsSelect.value)


    EditModalModule_ArrayOfLessons.find(lesson => lesson == tempL) ? null : EditModalModule_ArrayOfLessons.push(tempL)


    let EditModalModule_ArrayOfLessonsIds = []

    for (const Lesson of EditModalModule_ArrayOfLessons) {
        EditModalModule_ArrayOfLessonsIds.push(Lesson.id)
    }

    ModuleToEdit.lessons = EditModalModule_ArrayOfLessonsIds


    EditModal_LoadLessonTable()
})


/* CREATE LESSONS */
const CreateModal_Lesson = document.querySelector('#CreateModal_Lesson')

const lesson_create_name = document.querySelector('#lesson_create_name')

const lesson_create_xp = document.querySelector('#lesson_create_xp')

const lesson_create_videoUrl = document.querySelector('#lesson_create_videoUrl')

const lesson_create_Savebtn = document.querySelector('#lesson_create_Savebtn')


lesson_create_Savebtn.addEventListener('click', () => {

    if(lesson_create_name.value){
    

    LessonsDB.push(new Lessons(LessonsDB,lesson_create_name.value,[],lesson_create_videoUrl.value,lesson_create_xp.value))
    
    

    lesson_create_name.value = ''

    lesson_create_xp.value = 0

    lesson_create_videoUrl.value = ''

    ModulesTable()
    }
})




/* EDIT LESSONS */
let LessonToEdit

/* FieldSet */
const EditModal_Lesson_Name = document.querySelector('#EditModal_Lesson_Name')

const EditModal_Lesson_XP = document.querySelector('#EditModal_Lesson_XP')

const EditModal_Lesson_Url = document.querySelector('#EditModal_Lesson_Url')

const EditModal_Lesson_CurrentUrl = document.querySelector('#EditModal_Lesson_CurrentUrl')

/* Buttons / DELETE / SAVE */
const EditModal_Lesson_DelBtn = document.querySelector('#EditModal_Lesson_DelBtn')

const EditModal_Lesson_SaveBtn = document.querySelector('#EditModal_Lesson_SaveBtn')

function OpenEditLessonModal() {

    const lesson_edit_btns = document.querySelectorAll('.lesson_edit_btns')

    lesson_edit_btns.forEach(lesson_edit_Btn => lesson_edit_Btn.addEventListener('click', () => {

        for (const Lesson of LessonsDB) {

            if (Lesson.id == lesson_edit_Btn.id) {

                EditModal_Lesson_Name.value = Lesson.name

                EditModal_Lesson_XP.value = Lesson.xp

                if (Lesson.urlVideo) {
                   
                    EditModal_Lesson_CurrentUrl.innerHTML = '<strong>Current Video File:</strong> '

                    EditModal_Lesson_CurrentUrl.innerHTML += Lesson.urlVideo
                }

                LessonToEdit = Lesson

            }
        }

        

    }))
}

EditModal_Lesson_SaveBtn.addEventListener('click', () => {

    LessonToEdit.name = EditModal_Lesson_Name.value 

    LessonToEdit.xp = parseInt(EditModal_Lesson_XP.value)

    if (EditModal_Lesson_Url.value) {

        LessonToEdit.urlVideo = EditModal_Lesson_Url.value
    }

    for (let Lesson of LessonsDB) {

        if (Lesson.id == LessonToEdit.id){

            Lesson = LessonToEdit
        }
    }

    const LessonsDBjson = JSON.stringify(LessonsDB)

    localStorage.setItem('LessonsDB', LessonsDBjson)


    

    ModulesTable()

})

EditModal_Lesson_DelBtn.addEventListener('click', () => {
    
    LessonsDB = LessonsDB.filter(Lesson => Lesson.id == LessonToEdit.id)
    
    const LessonsDBjson = JSON.stringify(LessonsDB)

    localStorage.setItem('LessonsDB', LessonsDBjson)

    ModulesTable()
})

/* EXERCISES TABLE */
    const ExercisesTableTbody = document.querySelector('#ExercisesTable tbody')

    /* EXERCISES MODAL BUTTON */
    const Exercises_CreateBtn = document.querySelector('#Exercises_CreateBtn')

    /* EXERCISES MODAL FieldSet */

        /* EXERCISE NAME */

    const CreateModal_Exercise_name = document.querySelector('#CreateModal_Exercise_name')

        /* ANSWERS / INPUT / ADD / TABLE / SELECT */

    const CreateModal_Exercise_Answer_input = document.querySelector('#CreateModal_Exercise_Answer_input')

    const CreateModal_Exercise_Answer_btn = document.querySelector('#CreateModal_Exercise_Answer_btn')  

    const TableQuestions_Create = document.querySelector('#TableQuestions_Create tbody')

    const CreateModal_Exercise_CorrectAnswer = document.querySelector('#CreateModal_Exercise_CorrectAnswer')

         /* SELECT LESSON */

    const CreateModal_Exercise_Lesson = document.querySelector('#CreateModal_Exercise_Lesson')

    /* EXERCISES MODAL Save */
    const CreateModal_Exercise_Savebtn = document.querySelector('#CreateModal_Exercise_Savebtn')

    /* EXERCISES LOAD TABLE*/
    function LoadExercisesTable() {
        ExercisesTableTbody.innerHTML=''
        for (const Exercise of ExercisesDB) {
            for (const Lesson of LessonsDB) {
                if(Exercise.LessonId == Lesson.id){
                    
                   
                    let row = ''

                    row += 
                    `
                    <tr class="Exercise-Row">
                    <td>${Exercise.id}</td>
                    <td>${Lesson.name}</td>
                    <td>${Exercise.question}</td>
                    <td>
                    `
                   
                    for(const AnswerIndex in Exercise.Answers) {
        
                        if( AnswerIndex == Exercise.CorrectAnswer){
                            row += 
                            `<span class="text-success">
                            ${Exercise.Answers[parseInt(AnswerIndex)]}
                            </span><br>`
                        }
                        else{
                            row += 
                            `<span> ${Exercise.Answers[parseInt(AnswerIndex)]} </span><br>`
                        }
                    }

                    row += `</td><td><button id="${Exercise.id}" class="Exercise_edit btn btn-primary bg-primary" data-bs-toggle="modal" 
                    data-bs-target="#EditModal_Exercise">Edit Exercise</button></td></tr>`

                    ExercisesTableTbody.innerHTML+=row
                } 
            
            }

        }
        Load_EditExercise()
    }


    let Exercise_Answers = []

    Exercises_CreateBtn.addEventListener("click", () => {
        
        Exercise_Answers = []

        CreateModal_Exercise_name.value = ''

        CreateModal_Exercise_Answer_input.value = ''

        CreateModal_Exercise_CorrectAnswer.value = ''

        CreateModal_Exercise_Lesson.value = ''

        LoadToSelect_Lessons(CreateModal_Exercise_Lesson)

        LoadToSelect_Answers(CreateModal_Exercise_CorrectAnswer)

    })

    CreateModal_Exercise_Answer_btn.addEventListener('click', ()=> {

        console.log(CreateModal_Exercise_Answer_btn);

        if(CreateModal_Exercise_Answer_input.value){

        Exercise_Answers.push(CreateModal_Exercise_Answer_input.value)
        }   

        LoadToTable_Answers(TableQuestions_Create)

        LoadToSelect_Answers(CreateModal_Exercise_CorrectAnswer)

    })
    

    function LoadToSelect_Lessons(target){

 
        target.innerHTML = ''

        for (const Lesson of LessonsDB) {
            target.innerHTML += `<option value="${Lesson.id}">${Lesson.name}</option>`
        }
        
    }

    function LoadToSelect_Answers(target){

    
        target.innerHTML = ''

        for (const AnswerIndex in Exercise_Answers) {
            target.innerHTML += `<option value="${AnswerIndex}">${Exercise_Answers[AnswerIndex]}</option>`
        }
        
    }

    function LoadToTable_Answers(target){
        target.innerHTML = ''

        for (const AnswerIndex in Exercise_Answers) {
            target.innerHTML += `<tr> 
            <td> ${parseInt(AnswerIndex)+1} </td>
            <td>${Exercise_Answers[AnswerIndex]}</td>
            <td><button id="${AnswerIndex}" class="btn btn-danger RemoveAnswer">Remove</button></td>
            </tr>`
        }

        Load_RemoveAnswer()
    }

    function Load_RemoveAnswer(){

        document.querySelectorAll('.RemoveAnswer').forEach(btn => btn.addEventListener('click', () => {

            for (const ExerciseIndex in Exercise_Answers) {
                
                if(btn.id == parseInt(ExerciseIndex)){
                    
                    Exercise_Answers.splice(parseInt(ExerciseIndex) , 1) 
                }
            }
                LoadToTable_Answers(TableQuestions_Create)

                LoadToSelect_Answers(CreateModal_Exercise_CorrectAnswer)

            }))
        }
        


    LoadExercisesTable() 

    CreateModal_Exercise_Savebtn.addEventListener('click', () => {

        if(CreateModal_Exercise_name.value){

            if(Exercise_Answers){

        ExercisesDB.push(new Exercises(ExercisesDB, CreateModal_Exercise_name.value , Exercise_Answers , CreateModal_Exercise_CorrectAnswer.value , CreateModal_Exercise_Lesson.value))
            
    }
        }

        Exercise_Answers = []

        const ExercisesDBjson = JSON.stringify(ExercisesDB)

        localStorage.setItem('ExercisesDB', ExercisesDBjson)
  
        LoadExercisesTable() 

    })


/* EDIT EXERCISE MODAL */ 
    const EditModal_Exercise_name = document.querySelector('#EditModal_Exercise_name')

    const EditModal_Exercise_Answer_input = document.querySelector('#EditModal_Exercise_Answer_input')

    const EditModal_Exercise_Answer_btn = document.querySelector('#EditModal_Exercise_Answer_btn')

    const TableQuestions_Edit = document.querySelector('#TableQuestions_Edit tbody')

    const EditModal_Exercise_CorrectAnswer = document.querySelector('#EditModal_Exercise_CorrectAnswer')

    const EditModal_Exercise_Lesson = document.querySelector('#EditModal_Exercise_Lesson')

    const  EditModal_Exercise_Savebtn = document.querySelector('#EditModal_Exercise_Savebtn')

    /* INITIALIZE Load_EditExercise */

    let ExerciseToEdit 
    function Load_EditExercise(){

        
        document.querySelectorAll('.Exercise_edit').forEach(btn => btn.addEventListener('click', ()=> {
            
            ExerciseToEdit = btn.id

            console.log('cliking');

            for (const Exercise of ExercisesDB) {
                
                if(Exercise.id == btn.id) {
                    

                    Exercise_Answers = Exercise.Answers.slice()

                    EditModal_Exercise_name.value = Exercise.question
                }
            
            }
            
            EditExercise_LoadTable()
            
            LoadToSelect_Lessons(EditModal_Exercise_Lesson)

            LoadToSelect_Answers(EditModal_Exercise_CorrectAnswer)
           
        }))
    }

    function EditExercise_LoadTable(){
        TableQuestions_Edit.innerHTML = ''

        for (const AnswerID in Exercise_Answers) {
            TableQuestions_Edit.innerHTML += 
            `
            <tr>
            <td>${AnswerID}</td>
            <td>${Exercise_Answers[AnswerID]}</td>
            <td><button id="${AnswerID}" class="RemoveAnswer btn btn-danger">Remove</button></td>
            </tr>
            `
            
        }

             Edit_Load_RemoveAnswer()

    }

    function Edit_Load_RemoveAnswer(){

        

        document.querySelectorAll('.RemoveAnswer').forEach(btn => btn.addEventListener('click', () => {

            for (const ExerciseIndex in Exercise_Answers) {
                
                if(btn.id == parseInt(ExerciseIndex)){
                    
               
                    Exercise_Answers.splice(parseInt(ExerciseIndex) , 1) 

                }
            }


            EditExercise_LoadTable()

            LoadToSelect_Lessons(EditModal_Exercise_Lesson)

            LoadToSelect_Answers(EditModal_Exercise_CorrectAnswer)

            
        }))


    }
    

    EditModal_Exercise_Answer_btn.addEventListener('click', () => {

        if(EditModal_Exercise_Answer_input.value){

            Exercise_Answers.push(EditModal_Exercise_Answer_input.value)
        
            EditExercise_LoadTable()
            
            LoadToSelect_Lessons(EditModal_Exercise_Lesson)

            LoadToSelect_Answers(EditModal_Exercise_CorrectAnswer)

            console.log(Exercise_Answers);
        }
    })

    EditModal_Exercise_Savebtn.addEventListener('click', () => {
        

        for (const Exercise of ExercisesDB) {

            if(Exercise.id == ExerciseToEdit){

                Exercise.question = EditModal_Exercise_name.value

                Exercise.Answers = Exercise_Answers

                Exercise.CorrectAnswer = EditModal_Exercise_CorrectAnswer.value

                Exercise.LessonId = EditModal_Exercise_Lesson.value
            
                const ExercisesDBjson = JSON.stringify(ExercisesDB)
                
                localStorage.setItem('ExercisesDB', ExercisesDBjson)

            }

            LoadExercisesTable()

        }

    })
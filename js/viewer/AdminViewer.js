import users   from '../models/usersModel.js'
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
    function UserTable(){
        TbodyUserTable.innerHTML = ''
        for (const user of usersDB) {
            if(user.blocked == false){
                TbodyUserTable.innerHTML += `<tr>
                <td>${user?.id}</td>
                <td>${user?.name}</td>
                <td>${user?.email}</td>
                <td><button class="btn btn-danger Block_User_btns" id="${user?.id}">Block</button></td>
                </tr>`

                BlockButtons()
                UnblockButtons()

            }else{
                if(user.blocked == true){
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
            
            for(const user of usersDB) {
                
                if(user.id == Block_User_btn.id) {
                    
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
            
            for(const user of usersDB) {
                
                if(user.id == unblock_User_btn.id) {
                    
                    user.blocked = false
        
                    UserTable()
                }
            } 
        }))
    }


    
    /* User Table Functions */
    document.querySelector('#btnSaveUsers').addEventListener('click', () => {
        localStorage.setItem('usersDB',JSON.stringify(usersDB))
    })

    
    UserTable() // initate table 

/* User Modules Functions */
    function ModulesTable() {
        //console.log(TbodyModulesTable);
        TbodyModulesTable.innerHTML = ''
        for( const module of ModulesDB){

            TbodyModulesTable.innerHTML += `<tr>
                <th>${module?.id}</th>
                <th>${module?.name}</th>
                <th>${module?.rank}</th>
                <th><button id="${module?.id}" class="btn btn-primary">Change Module</button></th>
                </tr>
                <tr>`

                // FOR EACH LESSONID OF THIS MODULE
                for (const LessonId of module.lessons) {

                    // LOOP THROUGH MODULES
                    for (const Module of ModulesDB) {

                        // CHECK IF LessonId == Module.id
                        if(LessonId == Module.id){

                            // LOOP THROUGH LESSONS
                            for (const Lesson of LessonsDB) {
                                
                                // CHECK IF ID OF LESSON == LESSONID FROM MODULE
                                if(Lesson.id == LessonId){
                                    TbodyModulesTable.innerHTML += `<tr>
                                    <td>${Lesson?.id}</td>
                                    <td>${Lesson?.name}</td>
                                    <td>${Lesson?.xp}</td>
                                    <td><button id="${Lesson?.id}" class="btn btn-secondary">Change Lesson</button></td>
                                    </tr>
                                    <tr>`
                            }

                            }
                        }
                    }
                }

        }
    }

    ModulesTable()

    /* CREATE MODULES */

    /*Input Name */
    const CreateModuleModal_ModuleNameInput = document.querySelector('#CreateModuleModal_ModuleNameInput')

    /*Select Rank */
    const CreateModuleModal_ModuleRankSelect = document.querySelector('#CreateModuleModal_ModuleRankSelect')  

    /*Select Lessons, Add button and Table to show chosen lessons*/
    const CreateModuleModal_ModuleLessonsSelect = document.querySelector('#CreateModuleModal_ModuleLessonsSelect')
    const CreateModuleModal_ModuleLessonsSave = document.querySelector('#CreateModuleModal_ModuleLessonsSave')
    const CreateModuleModal_ModuleLessonsTable = document.querySelector('#CreateModuleModal_ModuleLessonsTable tbody')

    /*Create Module Button*/
    const CreateModuleModal_SaveBtn = document.querySelector('#CreateModuleModal_SaveBtn')
    
    let CreateModuleModal_arrayOfLessons = []
    
    function createModule(){



        new Modules(ModulesDB,CreateModuleModal_ModuleNameInput.value,[],CreateModuleModal_ModuleRankSelect.value)
    }


    function ModuleModal_LessonsTable(){
        
        CreateModuleModal_ModuleLessonsTable.innerHTML=''

            for (const Lesson of CreateModuleModal_arrayOfLessons) {

                CreateModuleModal_ModuleLessonsTable.innerHTML += `<tr><td>${Lesson.id}</td><td>${Lesson.name}</td><td><button id="${Lesson.id}" class="Remove_Lesson btn btn-danger">Remove</td></tr>`
            
            }
    }

    function ModuleModal_LessonsSelect(){
        
        for (const Lesson of LessonsDB) {
            
            CreateModuleModal_ModuleLessonsSelect.innerHTML += `<option value="${Lesson.id}">${Lesson.name}</option>`
        }
    }

    
    function AddLessonToTable(){
      
        if(!(CreateModuleModal_arrayOfLessons.find(Lesson => Lesson.id == CreateModuleModal_ModuleLessonsSelect.value))){
        
            for (const Lesson of LessonsDB) {

            if(Lesson.id == CreateModuleModal_ModuleLessonsSelect.value){

                CreateModuleModal_arrayOfLessons.push(Lesson)

                }

            }
            ModuleModal_LessonsTable()
            LoadRemovFrom_arrayFunc()
            //console.table(CreateModuleModal_arrayOfLessons);
            
        }

    }

    function RemoveFrom_arrayOfLessons(Remove_id){
        
        CreateModuleModal_arrayOfLessons = CreateModuleModal_arrayOfLessons.filter(Lesson => Lesson.id != Remove_id)
        ModuleModal_LessonsTable()
        LoadRemovFrom_arrayFunc()
        //console.table(CreateModuleModal_arrayOfLessons);
        
    }

    function LoadRemovFrom_arrayFunc(){
        document.querySelectorAll('.Remove_Lesson').forEach(
            btn => btn.addEventListener(
                'click', () => {
                    RemoveFrom_arrayOfLessons(btn.id)
        }))
    }
   
   CreateModuleModal_ModuleLessonsSave.addEventListener('click', ()=>{AddLessonToTable()})

    ModuleModal_LessonsSelect()
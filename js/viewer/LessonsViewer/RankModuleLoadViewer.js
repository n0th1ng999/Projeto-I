let loggedUser = sessionStorage.getItem('loggedUser')
loggedUser = JSON.parse(loggedUser)

//loggedUser.Lessons.push(2)

let LessonsDBjson = localStorage.getItem('LessonsDB') 
let LessonsDB = JSON.parse(LessonsDBjson)

let ModulesDBjson = localStorage.getItem('ModulesDB') 
let ModulesDB = JSON.parse(ModulesDBjson)

const Ranks = ['Beginner','Intermediate','Pro']


let RankModulesLessonsHtml= ``
function LoadRank_Module_Lesson(){

    for (const Rank of Ranks) {
    
        RankModulesLessonsHtml += 
            `<div id="${Rank}" >
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
    
                    <h3>${Lesson.name}</h3>
                
                    <button id="${Lesson.id}">${Lesson.name}</button>`
                    


                    if(loggedUser.Lessons.find(el => el == Lesson.id)){
    
                        RankModulesLessonsHtml += `<p>done</p>`
                        
                    }
    
                    RankModulesLessonsHtml +=  `</div>  `
    
    
                    }        
                    
                }
    
                RankModulesLessonsHtml += `</div>`
            }
        }
        RankModulesLessonsHtml += `</div>`
    }
    
    document.querySelector('body').innerHTML+= RankModulesLessonsHtml
}

LoadRank_Module_Lesson()

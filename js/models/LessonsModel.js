export default class Lessons{
    id = 0
    name = ''
    requisitedLessons = [] // array of requisited Lessons id's
    urlVideo = '' // url 
    xp = 0 // Xp gain of lesson
   

    constructor(LessonsDB,name,requisitedLessons,urlVideo,xp) {
        this.id = LessonsDB.length == 0 ? 1 : LessonsDB[LessonsDB.length - 1].id + 1;
        this.name = name ;
        this.requisitedLessons = requisitedLessons
        this.urlVideo = urlVideo;
        this.xp = xp;
        
       
    }

    get id() { return this.id; }

    get name() { return this.name; }

    get requisitedLessons() { return this.requisitedLessons; }

    get urlVideo() { return this.urlVideo; }

    get xp() { return this.xp; }




    set name(string) { if(string.length >= 5 && string.length <= 15){
        this.name = string
    }else{
        throw new Error('Name lenght must be between 5-15 characters')
    } }

  
    
    set requisitedLessons(ArrayOfLessonIds) { if(Array.isArray(ArrayOfLessonIds)){
        this.requisitedLessons = ArrayOfLessonIds
    }else{
        throw new Error("Requisited Lessons must be an array")
    }}

    set urlVideo(string) { this.urlVideo = string; }
    
    set xp(value) { this.xp = value; }



}
export default class Exercises{
   id="" // Exercise ID
   question ="" // Question
   Answers = [] // Answers 
   CorrectAnswer = 0 // CorrectAnswer(s) Index
   LessonId = 0 // Respective Lesson Id

   constructor(ExercisesDB, question, Answers, CorrectAnswer, LessonId) {
      this.id = ExercisesDB.length == 0 ? 1 : ExercisesDB[ExercisesDB.length - 1].id + 1
      this.question = question
      this.Answers = Answers
      this.CorrectAnswer = CorrectAnswer
      this.LessonId = LessonId
   }

   get id() { return this.id }

   get question() { return this.question }

   get Answers() { return this.Answers }

   get CorrectAnswer() { return this.CorrectAnswer }

   get LessonId() { return this.LessonId }

   
   set question(question) { this.question = question}

   set Answers(answersArray) {
      if(Array.isArray(answersArray)){
         this.Answers = answersArray
      }else{
         throw new Error("Answers must be an array")
      }
}

   set CorrectAnswer(Id){ this.CorrectAnswer = Id;}

   set LessonId(Id){ this.LessonId = Id}

}
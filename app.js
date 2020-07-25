(function() {
  var questions;
  var inputAnswer;
  var Question = function(question, possibleAnswers = [answer1, answer2, answer3], correctAnswer) {
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
  };
  // Quiz Questions
  var jsQuestion = new Question("Is Javascript the best programming language?", possibleAnswers = ["1: Yes", "2: No", ], 1);
  var authorOfCourse = new Question("Who is the author of this course?", possibleAnswers = ["1: John", "2: Mark", "3: Jonas", "4: Costel"], 3);
  var whatIsCSS = new Question("What does CSS stand for?", possibleAnswers = ["1: Cross Style Syntax", "2: Cascading Style Sheets", "3: Create Something Strange"], 2);
  questions = [jsQuestion, authorOfCourse, whatIsCSS];
  // random Question Generator
  var randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  function actualQuiz(){
    var userScore=0;
    while (inputAnswer !== 0) {
      var quit = 0;
      randomQuestion = questions[Math.floor(Math.random() * questions.length)];
      console.log(randomQuestion.question);
      console.log(randomQuestion.possibleAnswers.join(" "));
      inputAnswer = parseInt(prompt(randomQuestion.question + " Your Answer:" + " \n To exit press 0."));
      if (inputAnswer === randomQuestion.correctAnswer) {
        userScore++;
        console.log("Correct answer, you won 1 point. Current points: "+userScore);
        alert("Correct!");
      } else if (inputAnswer !== randomQuestion.correctAnswer && inputAnswer !== 0) {
        userScore--;
        console.log("Wrong answer, you lost 1 point. Current points: "+ userScore);
        alert("Try Again");
      }
    }
  }
  actualQuiz();
})();

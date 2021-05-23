var score = 0;
var timeLeft = 180;
var container = document.getElementById("container");
var start;
var questionPlace = document.getElementById("question")
var answerPlace = document.getElementById("answers")
var strtbutton = document.querySelector("#start");
var questionIndex = 0
var questionArray =[
    {
        question: "question 1",
        answers:["answer1", "answer2","answer 3","answer4"],
        correctAnswer: "answer1"},
       { question: "question 2",
        answers:["answer1", "answer2","answer 3","answer4"],
        correctAnswer: 2},
        {question: "question 3",
        answers:["answer1", "answer2","answer 3","answer4"],
        correctAnswer: 3},
        {question: "question 4",
        answers:["answer1", "answer2","answer 3","answer4"],
        correctAnswer: 4
    }
]
function renderQuestion() {
    if(questionIndex>questionArray.length - 1){
        scorepage()
        return;
    }
    var displayedQuestion = questionArray[questionIndex];
    questionPlace.textContent =displayedQuestion.question
    
    answerPlace.innerHTML=""

    for ( var i =0; i < displayedQuestion.answers.length; i++) {
        var button = document.createElement("button");
        button.addEventListener("click",renderQuestion)
        button.textContent = displayedQuestion.answers[i];
        answerPlace.appendChild(button);
        questionIndex++
    }}
    // After final question move to high score page
    function scorepage() {
    //     document.body.createElement("input")
    console.log("scorepg")
    }
    // user inputs initials
    // document.createElement(InputEvent)
    
    // After answer move to next question and add score if right remove time if wrong x5
// function checkanswer(event){
//     var userInput = event.target.innerText
//     var rightAnswer = questionArray[questionIndex].correctAnswer
//     console.log(questionArray[questionIndex].correctAnswer)
    // if(userInput==rightAnswer){
    //     score++
    //     console.log(score)
    // }else{
    // }
    // renderQuestion
    // questionIndex++
// }


// saves highscore to local storage
localStorage.setItem("highscore", score)

// clears local storage
// btn.onclick localstorage.remove("highscore")

// button to restart quiz
strtbutton.addEventListener("click", function(){
    renderQuestion()
    header.style.display ="none";
    strtbutton.style.display ="none";
    startTime()
})
function startTime(){
var quiztimer = setInterval(function() {
    if (timeLeft <=0){
        clearInterval(quiztimer);
    } else {
        document.getElementById("timer").innerText = timeLeft + "s"
    }
     timeLeft--;
}, 1000);
}



var score = 0;
var timeLeft = 180;
var container = document.getElementById("container");
var start;
var questionPlace = document.getElementById("question")
var answerPlace = document.getElementById("answers")
var strtbutton = document.querySelector("#start");
var questionIndex = 0
var questionArray =[
    { question: "question 1",
        answers:["answer1", "answer2","answer 3","answer4"],
        correctAnswer: "answer1"},
        {question: "question 2",
        answers:["answer1", "answer2","answer 3","answer4"],
        correctAnswer: "answer2"},
        {question: "question 3",
        answers:["answer1", "answer2","answer 3","answer4"],
        correctAnswer: "answer3"},
        {question: "question 4",
        answers:["answer1", "answer2","answer 3","answer4"],
        correctAnswer: "answer4"},
    {question:"question 5",
    answers:["answer1", "answer2", "answer3", "answer4"],
    correctAnswer:"answer4"},
    {question:"question 6",
    answers:["answer1", "answer2", "answer3", "answer4"],
    correctAnswer:"answer4"}
]
function renderQuestion() {
    console.log(questionIndex)
    if(questionIndex > questionArray.length -1){
       stoptime()
        console.log("end")
        scorepage()
        return;
    }
    var displayedQuestion = questionArray[questionIndex];
    console.log(displayedQuestion)
    questionPlace.textContent = displayedQuestion.question

    answerPlace.innerHTML=""

    for ( var i =0; i < displayedQuestion.answers.length; i++) {
        var button = document.createElement("button");
        button.textContent = displayedQuestion.answers[i];
        answerPlace.appendChild(button);
        button.addEventListener("click", checkanswer)
    }
}
    // After final question move to high score page
    // user inputs initials
    function scorepage () {
        questionPlace.innerHTML ="Input Initials"
        var row = table.insertRow(1);
        var input = document.createElement("input");
        input.type = "text";
        answerPlace.appendChild(input);
    console.log("scorepg")
    }
    
    // After answer move to next question and add score if right remove time if wrong x5
function checkanswer(event){
    var userInput = event.target.innerText
    var rightAnswer = questionArray[questionIndex].correctAnswer
    console.log(questionArray[questionIndex].correctAnswer)
    if(userInput==rightAnswer){
        score++
        alert("correct!🎉")
        console.log(score)
    }else{
        alert("-20sec lol!")
        timeLeft -=20
    }
    renderQuestion()
    questionIndex++
}


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
    if (timeLeft ===0){
        scorepage
        function stoptime (){ clearInterval(quiztimer);}
    } else {
        document.getElementById("timer").innerText = timeLeft + "s"
    }
    timeLeft--;
}, 1000);
}



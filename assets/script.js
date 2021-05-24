var score = 0;
var timeLeft = 180;
var quiztimer;
var start;
var input;
var inputID;
var tableArea = document.getElementById("tablePlace");
var questionPlace = document.getElementById("question");
var answerPlace = document.getElementById("answers");
var strtbutton = document.querySelector("#start");
var questionIndex = 0;
var questionArray = [
    {
        question: "What were the indigenous people of Puerto Rico called?",
        answers: ["Aztecs", "Montezuma", "Tainos", "Caribbeans"],
        correctAnswer: "Tainos",
    },
    {
        question: "What was the leader of a Taino tribe called?",
        answers: ["Cacique", "Lider", "King", "Rey"],
        correctAnswer: "Cacique",
    },
    {
        question: "Who discovered Puerto Rico?",
        answers: ["Christopher Columbus", "Ponce de Leon", "George Washington", "Daddy Yankee"],
        correctAnswer: "Christopher Columbus",
    },
    {
        question: "What year was Puerto Rico discovered?",
        answers: ["1958", "1493", "1913", "1605"],
        correctAnswer: "1493",
    },
    {
        question: "What sport did the Tainos play?",
        answers: ["Cricket", "Handball", "Basketball", "Batu"],
        correctAnswer: "Batu",
    },
    {
        question: "Puerto Rico is part of the U.S",
        answers: ["True", "False",],
        correctAnswer: "True",
    },
];

function renderQuestion() {
    if (questionIndex > questionArray.length-1) {
        alert("You got " + score + " out of 6 correct!" )
        scorepage();
        document.getElementById("timer").innerText = "Finished!";
        clearInterval(quiztimer);
        return;
    }
    
    var displayedQuestion = questionArray[questionIndex];
    console.log(displayedQuestion);
    questionPlace.textContent = displayedQuestion.question;
    
    answerPlace.innerHTML = "";
    tableArea.style.visibility = "hidden"
    
    for (var i = 0; i < displayedQuestion.answers.length; i++) {
        var button = document.createElement("button");
        button.textContent = displayedQuestion.answers[i];
        answerPlace.appendChild(button);
        button.addEventListener("click", checkanswer);
    }
}
// After final question move to high score page
// user inputs initials
function scorepage() {
    questionPlace.innerHTML = "<strong>Input Initials<strong>";
    answerPlace.innerHTML = "";
    tableArea.style.visibility = "visible"
    
    
    input = document.createElement("input");
    input.type = "text";
    input.setAttribute("id", "userInput");
    answerPlace.appendChild(input);
    
    var confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm Initials";
    answerPlace.appendChild(confirmBtn);
    confirmBtn.addEventListener("click", saveInitials);
    
    var clearScore = document.createElement("button");
    clearScore.textContent = "Clear Scoreboard";
    answerPlace.appendChild(clearScore);
    clearScore.addEventListener("click",clearHighscore);
    
    var restartQuiz = document.createElement("button");
    restartQuiz.textContent = "Restart Quiz";
    answerPlace.appendChild(restartQuiz);
    restartQuiz.addEventListener("click", restart);
}

function restart() {
    score = 0;
    timeLeft = 180;
    questionIndex = 0;
    renderQuestion();
    startTime();
}
// saves highscore to local storage
function saveInitials() {
    var inputValue = document.getElementById("userInput").value;
    localStorage.setItem("initials", inputValue);
    localStorage.setItem("highscore", score);
    console.log(inputValue + score);
    
    var table = document.createElement("table");
    tableArea.appendChild(table);
    table.setAttribute("id", "table");
    var tableid = document.getElementById("table");
    var row = tableid.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = localStorage.getItem("initials");
    cell2.innerHTML = localStorage.getItem("highscore");
}
function clearHighscore(){
    localStorage.clear()
    score = 0
    console.log(localStorage)
    tableArea.innerHTML=""
}
// After answer move to next question and add score if right remove time if wrong x5
function checkanswer(event) {
    var userInput = event.target.innerText;
    var rightAnswer = questionArray[questionIndex].correctAnswer;
    console.log(questionArray[questionIndex].correctAnswer);
    if (userInput === rightAnswer) {
        score++;
        alert("Correct!🎉");
        console.log(score);
    } else {
        alert("-30sec lol!");
        timeLeft -= 30;
    }
    document.getElementById("score").innerText = score ;
    questionIndex++;
    renderQuestion();
}

strtbutton.addEventListener("click", function () {
    renderQuestion();
    header.style.display = "none";
    strtbutton.style.display = "none";
    startTime();
});
function startTime() {
    quiztimer = setInterval(function () {
        if (timeLeft === 0) {
            scorepage;
            clearInterval(quiztimer);
        } else {
            document.getElementById("timer").innerText = timeLeft + "s";
        }
        timeLeft--;
    }, 1000);
}

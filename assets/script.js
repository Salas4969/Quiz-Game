var Score = 0;
var timeLeft;
var createQuestion;
var createAnswer;
var container = document.getElementById("container");
var header = document.querySelector("#header");
var start;
var button = document.querySelector("#start");
localStorage.setItem("queastion 1", "answer");
localStorage.setItem("queastion 2", "answer");
localStorage.setItem("queastion 3", "answer");
localStorage.setItem("queastion 4", "answer");
localStorage.setItem("queastion 5", "answer");

start = document.querySelector("#start").onclick = startQuiz;

function startQuiz() {
    // start timer 40 sec for each q
  console.log("started");
  header.remove();
  button.remove();
  document.getElementById("question").innerHTML= "Who first discovered Puerto Rico? "
// Display 4 possible answers
var createbutton1 =document.createElement("button")
container.appendChild(createbutton1)
createbutton1.innerText="Answer"

var createbutton2 =document.createElement("button")
container.appendChild(createbutton2)
createbutton2.innerText="F.Answer"

var createbutton3 =document.createElement("button")
container.appendChild(createbutton3)
createbutton3.innerText="F.Answer"

var createbutton4 =document.createElement("button")
container.appendChild(createbutton4)
createbutton4.innerText="F.Answer"
// After answer move to next question and add score if right remove time if wrong x5

}
// After final question move to high score page 
// user inputs initials
// saves highscore to local storage 

// clears local storage

// button to restart quiz

// display time on right side

// Displays Score on left side
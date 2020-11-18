//Events 
//*start Game 
//* timer countdown increment 
//* selecting an answer 
//* Game over 
//* view highscores 
//* Enter a high score 

//Having functions that handle the events, clicks and what not 
// variables 
// * Timer 
// * time left
// * score
// * current question 
// * questions and their choices and correct answer 

//State Variables 
var questions = [
    {
        question: "Question 1 ",
        choices: [ 
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 3",
        ],
        answer: 2

    },
    {
        question: "Question 2 ",
        choices: [ 
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 3",
        ],
        answer: 2
    
    },
    {
        question: "Question 3 ",
        choices: [ 
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 3",
        ],
        answer: 2
    },
    {
        question: "Question 4 ",
        choices: [ 
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 3",
        ],
        answer: 2
    
    },
    {
        question: "Question 5 ",
        choices: [ 
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 3",
        ],
        answer: 2
    },
    {
        question: "Question 6 ",
        choices: [ 
            "choice 1",
            "choice 2",
            "choice 3",
            "choice 3",
        ],
        answer: 2
    
    }

]

//var timeLeft = 60;
//var timer = null;
//var score = 0;
//var currentQuestion = 0;


//Application Variables 
var startButtonEL = document.getElementById("startButton");
var introContainerEl = document.querySelector(".intro-container");

var questionContainerEl = document.querySelector(".question-container");

startButtonEL.addEventListener("click", function(event){
    alert("Start Game")
    introContainerEl.style.display = "none";
    questionContainerEl.style.display = "block";

});
//Event Delagation
document.addEventListener("click", function(event){
    if(event.target.classList.contains("answer-button")) {
    //data Attributes 
    console.log("get an answer", event.target.getAttribute("data-index"));
    }
});



var timeEl = document.querySelector("timer");
var timerLeft = 10;

function quizTimer() {
    var timeInterval = setInterval(function() {
        timerLeft--;
        timeEl.textContent = timerLeft + "time left";

        if(timerLeft==0) {
            clearInterval(timeInterval);
            console.log("its working!!!!!");

        }
    })

} 10000;


quizTimer();


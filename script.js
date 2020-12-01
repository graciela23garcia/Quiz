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
//object of questions, the choices and it's answers. 
var questions = [
    {
      question: "which one is a looping structure in JavaScript?",
      choices: ["All the below", "For", "While", "do-while loops"],
      answer: "All the below"
    },
    {
      question: "What are the two basic groups of data types in JavaScript?",
      choices: [
        "Primitive and attribute",
        "Primitive and reference types",
        "Reference types and attribute",
        "None of the above"
      ],
      answer: "Primitive and reference types"
    },
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      question: "Boolean operators that can be used in JavaScript include:",
      choices: [
        "'And' Operator &&",
        "'Or' Operator ||",
        "'Not' Operator !",
        "All the above"
      ],
      answer: "All the above"
    },
    {
      question:
        "Which one of these is not among the three different types of errors in JavaScript?",
      choices: [
        "Animation time errors",
        "Load time errors",
        "Run time errors",
        "Logical Errors"
      ],
      answer: "Animation time errors"
    },
    {
      question: "What is the data type of variables in JavaScript?",
      choices: [
        "Object data types",
        "Function data type",
        "None of the above",
        "All of the above"
      ],
      answer: "Object data types"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    },
    {
      question: "What is the type of Pop up boxes available in JavaScript?:",
      choices: ["Alert", "Confirm", "Prompt", "All the above"],
      answer: "All the above"
    }
  ];

var questionsEl = document.getElementById("questions");
var timerEl = document.querySelector(".time");
var submitButton = document.getElementById("submit");
var choicesEl = document.getElementById("choices");
var startButton = document.querySelector(".startQ");
var initialsEl = document.getElementById("initials");
var reportEl = document.getElementById("report");


//State Variables 
var currQuestionIndex = 0;
var time = questions.legnth * 15
var timerId;

//Display Questions in a function, creating HTML. Looping over question and choices 
function displayQuestion() {
    var currentQuestion = questions[currQuestionIndex];
    var questionEl = document.getElementById("question-display");
    questionEl.textContent = currentQuestion.question;
    
    choicesEl.innerHTML = "";
    //the loop to display choices 
    currentQuestion.choices.forEach(function(choice, i){
        var choiceDisplay = document.createElement("button");
        choiceDisplay.setAttribute("class", "choice");
        choiceDisplay.setAttribute("value", choice);
        choiceDisplay.textContent = i + 1 + ". " + choice;
        
        choiceDisplay.onclick = questionClick;

        choicesEl.appendChild(choiceDisplay);

    });
}

//CHecks if user guesses wrong. Penalized for time and displaying their time remainding
function questionClick() {
    if (this.value !== questions[currQuestionIndex].answer) {
        time -= 15;
       
        if (time < 0){
            time = 0;
        }
        timerEl.textContent = time;
        reportEl.textContent = "That is incorrect";
    } else {
        reportEl.textContent = "That is correct";
    }
    reportEl.setAttribute("class", "report");
    setTimeout(function(){
        reportEl.setAttribute("class", "report hide")
    }, 1000);

    currQuestionIndex++;
    if (currQuestionIndex === questions.legnth){
        endQuiz();
    } else {
        displayQuestion();
    }
}

//When user either runs out of time or has completed quiz
function endQuiz() {
    clearInterval(timerId);
    var endPageEL = document.getElementById("end-page");
    endPageEL.removeAttribute("class");
    finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
}






//HELP HERE  
startButton.addEventListener("click", function(event){
    console.log("YES");

});

//Sart Quiz. UN hide questions section. Start timer and show it
function startQuiz() {
    var startPageEl = document.getElementById("start-page");
    startPageEl.setAttribute("class", "hide");
    timerId = setInterval(timerCLock, 1000);
    timerEl.textContent = time;
    displayQuestion();

}

//This is timer and if user runs out of time the timer will end
function timerCLock () {
    time--
    timerEl.textContent = time;

    if (time<=0){
        endQuiz();
    }
}

function timerCLock() {
  //update the time 
  // check if the user ran out of time 
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    endQuiz()

  }
}

//get value of input box
//get saved scores from local storage, if there is not any then set itt to empty array 
//format new score object for the current user 
//save new object to localstorage 
//after saving, redirect to new page 

function saveHighscore() {
  var initials = initialsEl.value.trim();
  
  if (initials !== "") {
    var highscores =
    JSON.parse(window.localStorage.getItem("highscores")) || []

    var newScore = {
      score: time,
      initials: initials
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "score.html";
  }
}

function enterCheck() {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

//Create buttons for saveHighscore, startquiz, and checkforenter 
submitButton.onclick = saveHighscore;
startButton.onclick = startQuiz;
initialsEl.onclick = enterCheck;

// variables for elements
var startButton = document.querySelector("#quizBtn");
var questionsDiv = document.getElementById("questions");
var choicesList = document.getElementById("choicesList");
var questionTitle = document.getElementById("title");
var timer = document.getElementById("timer");
var gameOver = document.getElementById("gameOver");
var finalScore = document.getElementById("finalScore");

// store answers in an empty array
var userInput = [];

// Global variable to keep track of user score
var correctAnswer = 0;

// Declaring variable for how much time user has left 
var timeLeft = 60;

// variable to classify first question 
var questionNumber = 0

var questions = [
    {
        title: "An array starts at index of 0",
        choices: [ 
            "True",
            "False"
        ],
        answer: "True" 
    },
    {
        title: "Math.Random() will return:",
        choices: [
            "A number less than 1",
            "A number greater than 1",
            "Any random integer",
            "Any random number"
        ],
        answer: "A number less than 1"
    },
    {
        title: "While using a switch statement, the ___ will stop the block of code from being executed",
        choices: [
            "break",
            "return",
            "for-loop",
            "boolean"
        ],
        answer: "break"
    },
    {
        title: "A JavaScript for-loop is effective if you want to",
        choices: [
            "Run the same block of code over and over again",
            "Compare values",
            "Return an object when a button is clicked",
            "Style a webpage"
        ],
        answer: "Run the same block of code over and over again",
    },
    {
        title: "JavaScript objects:",
        choices: [
            "are variables",
            "Store many values",
            "Are stored inside of curly brackets",
            "All of the above"
        ],
        answer: "All of the above",
    },
]


// write a function that grabs the current question at index 0
function grabQuestion() {
    // Clear out previous questions 
    questionTitle.innerText = "";
    // Clear out previous answers (maybe innerHTML)
    choicesList.innerText = ""; 

    // variable that will grab the current question in the array we are working on
    var currentQuestion = questions[questionNumber];
    
    // create array to hold answers 
    let answers = currentQuestion.choices;

    // print the title of the current question to the h2
    questionTitle.innerText = currentQuestion.title;

    currentQuestion.choices.forEach((choice) => {
        // Create a button dynamically for each choice 
        var choiceButton = document.createElement("button");
        // Setting attribute for Button so we can store which button user selected 
        choiceButton.setAttribute("value", choice);
        // Put answer choices inside of button 
        choiceButton.textContent = choice;
        // Event listener to check answers 
        choiceButton.onclick = checkAnswer;
        // display the button on the page
        choicesList.appendChild(choiceButton);
        // move onto next question upon user input 
    });
}

// Declare function to check user answer 
function checkAnswer() {
    var currentQuestion = questions[questionNumber];
    if(this.value === currentQuestion.answer) {
        correctAnswer++;
    }
    else {
        // reduce time if wrong answer
        timeLeft = timeLeft-5;
    }
    // increase quesiton number by +1
    questionNumber++
    // check to see whether there is any questions left in the game
    if (questionNumber === questions.length) {
        // if there are no questions left, run the end game function 
        endGame();
    }
    // if quesitons left, grab that question
    else {
        grabQuestion();
    }
}

function endGame() {
    // Display final score 
    finalScore.innerText = correctAnswer;
    // Display game over message when the clock hits 0, and display the user score
    gameOver.removeAttribute("class");
};

// Start the clock when the StartQuiz function executes
function startClock() {
    // stop the clock at 0
    if (timeLeft === 0) {
        endGame();
    }
    // Display Time 
    timer.innerText = timeLeft;
    // Reduce time left by 1
    timeLeft--;
};


    // function that runs quiz questions
    function startQuiz() {
    // start the clock 
    setInterval(startClock, 1000);
    
    // hide the start screen
    var startScreen = document.getElementById("startScreen");
    startScreen.setAttribute("class","hide");

    // remove the hide class to display questions
    questionsDiv.removeAttribute("class");
    grabQuestion();
 };  

// starts quiz when button is clicked 
startButton.addEventListener("click", startQuiz);
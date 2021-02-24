// variables for elements
var startButton = document.querySelector("#quizBtn");
var questionsDiv = document.getElementById("questions");
var choicesList = document.getElementById("choicesList");
var questionTitle = document.getElementById("title");

// store answers in an empty array
var userInput = [];

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
function grabQuestion(){
    // variable that will grab the current question in the array we are working on
    var currentQuestion = questions[questionNumber];
    
    // create array to hold answers 
    let answers = [];

    answers = currentQuestion.choices;

    // print the title of the current question to the h2
    questionTitle.innerText = currentQuestion.title;
    // print the choices to the choiceList variable
    // choicesList.innerText = currentQuestion.choices;
    // use map method to wrap each answer in button
    let answersHTML = answers.map(answer => `<button class = "button">${answer}</button>`);
    // write the possible answers to the UI wrapped in button
    choicesList.innerHTML = answersHTML;
    // use event delegation to handle dynamic HTML button as any click in the body advances to next question
    document.addEventListener("click", function(e){
        console.log(e.target);
        // if user does not click on button do not proceed to next question
        // if = e.target.innerText 
        if (e.target.innerText === currentQuestion.answer){
            console.log("Correct!");
            answers.push("Correct");
            console.log(answers);
        }
        else{
            console.log("Wrong!");
        }
        // // push the targeted element into the answers array in global variables
        // else (e.target = button)
        //     // if e.target = button move onto next question
    })
}

// function that runs quiz questions
function startQuiz(){

    // input timer & display (set interval)

    // hide the start screen
    var startScreen = document.getElementById("startScreen");
    startScreen.setAttribute("class","hide");

    // remove the hide class to display questions
    questionsDiv.removeAttribute("class");
    grabQuestion();
 };  

// starts quiz when button is clicked 
startButton.addEventListener("click", startQuiz);
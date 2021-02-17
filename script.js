// variables for elements
var startButton = document.querySelector("#quizBtn")
var questionsDiv = document.getElementById("questions")
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

// function that runs quiz questions
function startQuiz(){
// hide the start screen
var startScreen = document.getElementById("startScreen");
startScreen.setAttribute("class","hide");
questionsDiv.removeAttribute("class");

    // what question we are going to print to the UI
    // targeting the H2 element for title to print 
    // targeting the UL element for choices to print 
    // print the question to the targeted H2 *since the questions is a variable do not have to make a string* <-- when referring to textContent documentation

 for (i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    var title = document.getElementById("title");
    var choiceBox = document.getElementById("choices");
    var choices = [];
    title.textContent = currentQuestion.title;

    // choices.innerHTML = "";  <-- clears any prior HTML content 
    // create another for loop to display the questions as selectable buttons

    for (i = 0; i < currentQuestion.choices.length; i++) {
        choices.push(currentQuestion.choices[i]);
    }
        console.log(choices);
 } 

// input timer & display (set interval)
};  

// starts quiz when button is clicked 
startButton.addEventListener("click", startQuiz);




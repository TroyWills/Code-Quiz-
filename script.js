// variables for elements
var startButton = document.querySelector("#demo")
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
    console.log(questions);
// hide the start screen
var startScreen = document.getElementById("startScreen")
startScreen.setAttribute("class","hide")
// unhides the class to display questions
questionsDiv.removeAttribute("class")

for (i = 0; i < questions.length; i++) {
    var questionTitle = questions[i].title
    var titleHeading = questionsDiv.appendChild("h2") // read docs on append child to get to work in console (innertext/ innerhtml <-- similiar to append child)
    titleHeading.value = questionTitle
}

// input timer & display (set interval)
};

// starts quiz when button is clicked 
startButton.addEventListener("click", startQuiz);




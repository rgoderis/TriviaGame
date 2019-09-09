var trivia = [ {
    question: "Is the Sky Blue",
    possibleAnswers: ["Yes", "No"],
    correctAnswer: "Yes"
}]

var startGame = false;
var number = 30;

// At start of game have start button visible and game div hidden

// When the user hits start, the button is hidden and the game div is visible
$("#button").on("click", function(){
    startGame = true;
    $("#button").css("display", "none");
    $("#game").css("display", "inline");
    // run function that starts the game
    playGame();
})

// The timer span counts down from 30
function decrement(){
    number --
}


// The question id displays a question from the array

// the answers div displays all possibleAnswers from the array

// set the clicked on aswer to be = userAnswer

// check to see if userAnswer === correctAnswer

// if so increase correct score and display correct answer text in question id and play gif

// if incorrect increase incorrect score show incorrect answer text and play gif

// if time runs out increase timesUp score show times up text and play gif

// after 20 secods run a timesUp and go to next question and reset timer

// after all the questions have been asked display correct score, incorrect score, and times up
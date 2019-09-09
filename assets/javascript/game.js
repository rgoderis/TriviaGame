var trivia = [ {
    question: "Is the Sky Blue",
    possibleAnswers: ["Yes", "No"],
    correctAnswer: "Yes"
}]

var startGame = false;
var number = 30;
var interval;

// function that decreases number each time it is run and display in time
function decrement(){
    number --
    $("#timer").text(number)
    if(number === 0){
        stop();
    }
}

// function that runs decrement every second
function timer(){
    clearInterval(interval)
    interval = setInterval(decrement, 1000)
}

// function that stops the timer
function stop() {
    clearInterval(interval);
  }

// At start of game have start button visible and game div hidden

$(document).ready(function() {
// When the user hits start, the button is hidden and the game div is visible
$("#button").on("click", function(){
    startGame = true;
    $("#button").css("display", "none");
    $("#game").css("display", "inline");
    // run function that starts the game
    timer();

})

// The timer span counts down from 30


// 
function playGame(){
    // runs timer
    timer();
    // The question id displays a question from the array

    // the answers div displays all possibleAnswers from the array

    // set the clicked on aswer to be = userAnswer

    // check to see if userAnswer === correctAnswer

    // if so increase correct score and display correct answer text in question id and play gif

    // if incorrect increase incorrect score show incorrect answer text and play gif

    // if time runs out increase timesUp score show times up text and play gif

    // after 20 secods run a timesUp and go to next question and reset timer

    // after all the questions have been asked display correct score, incorrect score, and times up
}
});
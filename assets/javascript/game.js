var trivia = [ {
    question: "Is the Sky Blue",
    possibleAnswers: ["Yes", "No"],
    correctAnswer: "Yes"
}]

var startGame = false;
var interval;
var questionIndex = 0;
var correct = 0;
var incorrect = 0;
var unAnswered = 0;
var question = trivia[questionIndex].question;
var possibleAnswers = trivia[questionIndex].possibleAnswers;
var selectedAnswer;
var correctAnswer = trivia[questionIndex].correctAnswer;
var number = 30;

// function that decreases number each time it is run and display in time
function decrement(){
    number --
    $("#timer").text(number)
    if(number === 0){
        stop();
        console.log("times up");
        unAnswered ++;
        reset();
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

  // write a function that asks a question from the trivia array
function askQuestion(){
    // check to see if there is still a question left to ask
    if(questionIndex < trivia.length){
        // starts the timer
        timer()
        // display question in question div
        $("#question").text(question)
        // loop through possible answers display possible answers in answers div
        for(var i = 0; i < possibleAnswers.length; i ++){
            $("#answers").append("<p class='answer'>"+ possibleAnswers[i] + "</p>")
        }
        // // start timer
        // timer();

    } else {
        // display end of game screen
        console.log("no more questions");
    }
}

// function that clears the previous question and answer and increased questionIndex
function reset(){
    $("#question").empty();
    $("#answers").empty();
    questionIndex++;
    askQuestion();
    number = 30;
}

// At start of game have start button visible and game div hidden

$(document).ready(function() {
// When the user hits start, the button is hidden and the game div is visible
$("#button").on("click", function(){
    startGame = true;
    $("#button").css("display", "none");
    $("#game").css("display", "inline");
    // run function that starts the game
    askQuestion();
});
// lets the user select an answer
$(document).on("click", ".answer", function(){
    console.log("you clicked on an answer");
    // check to see if selected answer = correct answer
    selectedAnswer = $(this).text()
    // if correct
    if(selectedAnswer === correctAnswer){
        console.log("Correct")
        stop()
        correct++
        // if incorrect
    } else {
        console.log("Wrong")
        stop()
        incorrect++
    }
    reset()
});








    // The question id displays a question from the array

    // the answers div displays all possibleAnswers from the array

    // set the clicked on aswer to be = userAnswer

    // check to see if userAnswer === correctAnswer

    // if so increase correct score and display correct answer text in question id and play gif

    // if incorrect increase incorrect score show incorrect answer text and play gif

    // if time runs out increase timesUp score show times up text and play gif

    // after 20 secods run a timesUp and go to next question and reset timer

    // after all the questions have been asked display correct score, incorrect score, and times up

});
var trivia = [ 
    { question: "John Snow's sword is called...",
    possibleAnswers: ["Wolf's Bane", "Long Claw", "Ice", "Oath Keeper"],
    correctAnswer: "Long Claw"},
    { question: "What is not one of the free cities",
    possibleAnswers: ["Braavos", "Volantis", "Pentos", "Quarth"],
    correctAnswer: "Quarth"},
    { question: "What are the Lanister house words",
    possibleAnswers: ["Hear Me Roar", "Family Duty Honor", "Ours Is The Fury", "A Lanister Always Pays His Debts"],
    correctAnswer: "Hear Me Roar"},
    { question: "The words, 'Unbent, Unbroken' belong to which house",
    possibleAnswers: ["Dorn", "Martel", "Tully", "Greyjoy" ],
    correctAnswer: "Martel"},
    { question: "Arya Stark trained with which secret society",
    possibleAnswers: ["The Sons of The Harpy", "The Warlocks", "The Faceless Men", "The Stone Men" ],
    correctAnswer: "The Faceless Men"},
    { question: "Which is not a continent is the World of Ice and Fire",
    possibleAnswers: ["Braavos", "Westeros", "Sothoryos", "Essos"],
    correctAnswer: "Braavos"},
    { question: "The Targaryens are descended from which ancient civilization",
    possibleAnswers: ["Volantis", "Asshai", "Astapor", "Valyria"],
    correctAnswer: "Valyria"},
    { question: "In the age of heroes, who is said to have built the Wall",
    possibleAnswers: ["Bran The Builder", "Garth Greenhand", "Lann The Clever", "Symeon Star-Eyes"],
    correctAnswer: "Bran The Builder"},
    { question: "This Stormland castle belonging the the Baratheons is called...",
    possibleAnswers: ["Storms Rock", "Casterly Rock", "Dragon Stone", "Storms End"],
    correctAnswer: "Storms End"},
]
var question;
var possibleAnswers;
var startGame = false;
var interval;
var questionIndex = 0;
var correct = 0;
var incorrect = 0;
var unAnswered = 0;
var selectedAnswer;
var correctAnswer;
var number = 15;

// function that decreases number each time it is run and display in time
function decrement(){
    number --
    $("#timer").text(number)
    if(number === 0){
        stop();
        console.log("times up");
        unAnswered ++;
        $("#question").text("For Shame! You didn't even try to answer!")
        $("#answers").html("<img src='assets/images/shame.gif' >")
        setTimeout(reset, 3000);
        setTimeout(askQuestion,3000);
        
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
        question = trivia[questionIndex].question;
        possibleAnswers = trivia[questionIndex].possibleAnswers;
        correctAnswer = trivia[questionIndex].correctAnswer
        // starts the timer
        timer()
        // display question in question div
        $("#question").text(question)
        // loop through possible answers display possible answers in answers div
        for(var i = 0; i < possibleAnswers.length; i ++){
            $("#answers").append("<p class='answer hoverable'>"+ possibleAnswers[i] + "</p>")
        }
    } else {
        // display end of game screen
        console.log("no more questions");
        $("#question").text("Final Score")
        $("#answers").append("Correct: "+ correct + "<br>")
        $("#answers").append("Incorrect: "+ incorrect+ "<br>")
        $("#answers").append("Unanswered: "+ unAnswered+ "<br>")
        $("#restart").css("display", "inline")
    }
}

// function that clears the previous question and answer and increased questionIndex
function reset(){
    $("#question").empty();
    $("#answers").empty();
    questionIndex++;
    number = 15;
    $("#timer").text(number)
}

// function that restarts game
function restartGame(){
    number = 15;
    questionIndex = 0;
    correct = 0;
    incorrect = 0;
    unAnswered = 0;
    startGame = false;   
    $("#restart").css("display", "none");
    $("#question").empty();
    $("#answers").empty();
    askQuestion();
}

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
        $("#question").text("Correct!")
        $("#answers").html("<img src='assets/images/correct.gif' >")
        stop()
        correct++
        // if incorrect
    } else {
        console.log("Wrong")
        $("#question").text("Wrong, the correct answer was " + trivia[questionIndex].correctAnswer)
        $("#answers").html("<img src='assets/images/wrong.gif' >")
        stop()
        incorrect++
    }
    // setTimeout(reset, 3000)
    setTimeout(reset, 3000);
    setTimeout(askQuestion,3000);
});

// set click listener on reset to restart the game
$("#restart").on("click", function(){
    // call function restartGame
    restartGame()
})

});
// variables for keeping track of quiz
var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerId;
var score = 0;

// variables for interacting with html  
var timerId = document.getElementById("time")
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit");


// used to test score ---- need to remove at end
// var score = 30;

var saveHighScore = function() {
    console.log("i am saving highscores");

  

    var initials = initialsEl.value.trim();

    if (initials !== "") {
        
        // get saved score from local storage, or if not set to empty array
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];     


        var newScore = {
            score: score,
            initials: initials  
        };

        //save to local storage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        //used while testing - for clearing the text from the input box
        // initialsEl.value = ""
    }
}

// used to check for secondary input method of enter when user presses enter key, run saveHighScore 
var checkForEnter = function(event) {
    // check if enter is pressed
    if (event.key === "Enter") {
     saveHighScore();
    }
 }


//if user clicks submit run function
submitBtn.addEventListener("click", saveHighScore);

// onkeyup to only run once the key is released
initialsEl.onkeyup = checkForEnter;





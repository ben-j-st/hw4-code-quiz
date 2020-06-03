var initialsEl = document.getElementById("initials");
var olEl = document.getElementById("ol-scores");
var submitBtn = document.getElementById("submit");
var clearBtn = document.getElementById("clear");

var score = Math.floor((Math.random()*10));

var saveHighScore = function() {
    console.log("i am saving highscores");

}
console.log(score)
// used to check for secondary input method of enter when user presses enter key, run saveHighScore 
var checkForEnter = function(event) {
    var intitals = initialsEl.nodeValue.trim();
    
    // check if enter is pressed
    if (event.key === "Enter") {
        saveHighScore();
    

        var newScore = {
            score: score,
            intitals: initials
        };
    }
}

//if user clicks submit run function
submitBtn.addEventListener("click", saveHighScore);

// onkeyup to only run once the key is released
initialsEl.addEventListener("onkeyup", checkForEnter);
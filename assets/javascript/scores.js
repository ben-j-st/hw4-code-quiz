var clearBtn = document.getElementById("clear");
var olEl = document.getElementById("ol-scores");

var printHighScore = function() {
    console.log("i am printing high scores");

    // get saved score from local storage, or if not set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || []; 
    
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score) {
        // create a li for each high score
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        //display them on page
        olEl.appendChild(liTag);
    })
}

var clearHighScores = function() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

clearBtn.addEventListener("click", clearHighScores)

// run on startup
printHighScore();
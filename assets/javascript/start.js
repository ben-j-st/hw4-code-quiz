// variables for keeping track of quiz
var currentQuestionIndex = 0;
var time = (questions.length) * 10;
var timerId;
var score = 0;

// variables for interacting with html  
var timerEl = document.getElementById("time")
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var initialsEl = document.getElementById("initials");
var startBtn = document.getElementById("start")
var submitBtn = document.getElementById("submit");
var titleEL = document.getElementById("question-title")
var scoreEl = document.getElementById("score");
var feedbackEl = document.getElementById("feedback");

// sound effect
var sfxRight = new Audio("assets/sfx/correct.mp3");
var sfxWrong = new Audio("assets/sfx/incorrect.mp3");


var startQuiz = function() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // un-hide questions section
    questionsEl.removeAttribute("class");
    
    // start timer
    timerId = setInterval(tikTock, 1000);

    // show starting time
    timerEl.textContent = time;

    // run function to get questions
    getQuestions();
}

var getQuestions = function() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];

    // update title to reflect current question
    titleEL.textContent = currentQuestion.title;

    //clear our any old choices
    choicesEl.innerHTML = "";

    // create a forEach to create elements for each choice
    currentQuestion.choices.forEach(function(choice, index) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);

        choiceBtn.textContent = index + 1 + ". " + choice;

        // attach click event to each button
        choiceBtn.addEventListener("click", questionClick);

        // display on page
        choicesEl.appendChild(choiceBtn);
    })
}

var questionClick = function() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
        // penalise time and score
        time = time - 10;
        score = score - 5;
        scoreEl.textContent = score;
        
        if ( time < 0) {
            time = 0;
        }

        // display new time on page
        timerEl.textContent = time;

        // play wrong sound effects
        sfxWrong.play();

        feedbackEl.textContent = "Wrong!";

        // alert user they were wrong on page somehow
    } else {
        sfxRight.play();
        // add 10 points to score
        score = score + 10;
        // alert user they were right
        scoreEl.textContent = score;

        feedbackEl.textContent = "Correct!";
    }

      // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // move onto the next question
    currentQuestionIndex++;

    // run check to see if run out of questions
    if (currentQuestionIndex === questions.length) {
        quizEnd();
        time = 0;
    } else {
        getQuestions();
    }
}

var quizEnd = function() {
    // stop interval timer
    clearInterval(timerId);

    // show end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    //show final score
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = score;

    // hide questions section
    questionsEl.setAttribute("class", "hide");
}

var tikTock = function() {
    //update time
    time--;
    timerEl.textContent = time;

    //  check if user has run out of time
    if (time <= 0) {
        quizEnd();
    }
}

var saveHighScore = function() {
    console.log("i am saving highscores");

    //trimming initials, text box only allows 3 characters
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

        // redirect to highscores after user enters there data 
        window.location.href = "highscore.html"
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

// user clicks the start button, run start function
startBtn.addEventListener("click", startQuiz)

// onkeyup to only run once the key is released
initialsEl.onkeyup = checkForEnter;





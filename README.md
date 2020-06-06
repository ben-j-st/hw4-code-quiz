## Coding Quiz

## Description 

This week's project was to design a multiple choice style coding quiz, that will run in the browser and utilise dynamically updated html and css powered by javascript. For this project we were given a gif of what the end product should function and look like. 


## Breakdown

Going into this build was a struggle given the complexities of javascript and not fully grasping the functionality of what the end product should have. After a fair bit of research i was able to arrive at a starting point of coding my highscores page  first to update and retrieve data from the local storage. 

Branching out from there I started the index page, where a bulk of the behind the scenes stuff happens, from shuffling divs around using the hide class to make things hidden from the user and its corresponding javascript logic.

This moved on towards the end product where I dynamically create buttons for each of the choices a given question has, and compare that against the answer provided in my questions object. 

## Usage 

Points are awarded for correct answers and removed for incorrect answers alongside a penalty against the user's time. Sound effects also play to the corresponding answer. 

Users have a maximum of 10 questions and are given 10 seconds for each question for a total of 100 seconds. 

Users can score a maximum of 100 points if all answers are correct and score a minimum of - 45 if every answer was incorrect. At the end of the quiz the user is asked to enter their initials into a text box with a maximum number of characters set at 3. 


## Links And Images

https://ben-j-st.github.io/hw4-code-quiz/
<img src=/assets/images/coding-quiz.jpg>

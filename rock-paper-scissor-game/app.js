// all the constants and variables

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock-image");
const paper_div = document.getElementById("paper-image");
const scissor_div = document.getElementById("scissor-image");

// Function of random number to make the computer choice 

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

// Function to convert the letter of the choice to the complete word 

function convertTwoWords(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissor";
}


// Function to describe what happen when you win, lose or draw 

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convertTwoWords(userChoice) + " beats " + convertTwoWords(computerChoice) + ". You win!!!😎";{
    document.getElementById(userChoice).classList.add('green-glow');
    }
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convertTwoWords(userChoice) + " loses to " + convertTwoWords(computerChoice) + ". You lost💩!!!";
    document.getElementById(userChoice).classList.add('red-glow');
}


function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convertTwoWords(userChoice) + " is equal to " + convertTwoWords(computerChoice) + ". It's a draw😢.";
    document.getElementById(userChoice).classList.add('gray-glow');

}

// Function to know how to win, lose or draw 

function game(userChoice) {
    const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
    break;
    case "ps":
    case "rp":
    case "sr":
        lose(userChoice, computerChoice);
    break;
    case "pp":
    case "rr":
    case "ss":
        draw(userChoice, computerChoice);
    break;
   }

}

// main function when we click on the html button

function main() {

rock_div.addEventListener('click', function() {
    game("r")});

paper_div.addEventListener('click', function() {
    game("p")});

scissor_div.addEventListener('click', function() {
    game("s")});

}

main();




















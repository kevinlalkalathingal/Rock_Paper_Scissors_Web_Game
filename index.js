var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    else if(letter === "p") return "Paper";
    else return "Scissors";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
  
    function win(userChoice, computerChoice){
        userScore++;
        userScore_span.innerHTML = userScore;
        result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} . You Win`;
        document.getElementById(userChoice).classList.add("green-glow"); 
        setTimeout( function(){ document.getElementById(userChoice).classList.remove("green-glow") }, 400);
    }

    function lose(userChoice, computerChoice){
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)} . You Lose`;
        document.getElementById(userChoice).classList.add("red-glow");
        setTimeout( function(){ document.getElementById(userChoice).classList.remove("red-glow") }, 400);
    }

    function tie(){
        result_p.innerHTML = "It's a Tie";
        document.getElementById(userChoice).classList.add("grey-glow");
        setTimeout( function(){ document.getElementById(userChoice).classList.remove("grey-glow") }, 400);
    }

    switch(userChoice + computerChoice)
    {
        case "rs" :
        case "pr" :
        case "sp" :
            win(userChoice, computerChoice);
            break;
        case "rp" :
        case "sr" :
        case "ps" :
            lose(userChoice, computerChoice);
            break;
        case "rr" :
        case "pp" :
        case "ss" :
            tie();
            break;
    }
}

function main(){
    rock_div.addEventListener('click', () => {
        game("r");
    });
    paper_div.addEventListener('click', () => {
        game("p");
    });
    scissors_div.addEventListener('click', () => {
        game("s");
    });
}

main();
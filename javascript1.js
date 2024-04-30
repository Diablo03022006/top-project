function computerChoice() {
    list = ["rock", "paper", "scissors"];
   let a = Math.floor(Math.random()*3);
    return list[a];
}


function humanChoice() {
    var b = prompt("?");
    while (!(b == "rock" || b == "paper" || b == "scissors")) {
        b = prompt("Enter the correct value");
    }
    return b;
}
 
let computerScore = 0;
let humanScore = 0;



function playGame() {
    function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "paper") {
        return true;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        return true;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        return true;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        return false;
    }
    else if ( humanChoice == "paper" && computerChoice == "rock") {
        return false;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        return false;}
    else if (humanChoice === computerChoice) {
                  return 3;
    }    
    }


let a = playRound(humanChoice(), computerChoice());


if (a == 3) {
    return 0;
}
else if (a == true) {
    computerScore++;
}
else if (a == false) {
     humanScore++;
}
}
function score(a, b) {
if (a > b) {
    console.log("You Win");
}

else if (a < b) {
   console.log("You lose");
}
}

playGame()
playGame()
playGame()
playGame()
playGame()
score(humanScore, computerScore)



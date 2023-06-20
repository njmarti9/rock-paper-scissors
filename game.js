const choices = ["rock", "paper", "scissors"]

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper"))
    {
        return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    }
    else if ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper"))
    {
        return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }
    else
    {
        return "It's a tie!"
    }
  }

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice(){
    var choice = window.prompt("Choose Rock, Paper, or Scissors", "rock");
    if (choice.toLowerCase() == "rock" || 
    choice.toLowerCase() == "paper" ||
    choice.toLowerCase() == "scissors")
    {
        return choice.toLowerCase()
    }
    else {
        return "ERROR"
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        console.log("Player Choice: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1))
        console.log("Computer Choice: " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1))
        console.log("Play round: " + playRound(playerSelection, computerSelection));
    }
}
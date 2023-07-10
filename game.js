const choices = ["rock", "paper", "scissors"];
var player = 0, computer = 0;

const container = document.querySelector('#container');

const content = document.createElement('h1');
content.classList.add('title');
content.textContent = 'Rock Paper Scissors!!!';
container.appendChild(content);

const rock = document.querySelector('#rockBtn');
rock.addEventListener('click', function (e) {
    console.log(playRound("rock", getComputerChoice()));
    checkForWin();
});

const paper = document.querySelector('#paperBtn');
paper.addEventListener('click', function (e) {
    console.log(playRound("paper", getComputerChoice()));
    checkForWin();
});

const scissors = document.querySelector('#scissorsBtn');
scissors.addEventListener('click', function (e) {
    console.log(playRound("scissors", getComputerChoice()));
    checkForWin();
});

/*const buttons = document.querySelectorAll('#btns');
for (i in buttons){
    buttons[i].addEventListener('click', function (e){
        console.log(playRound(buttons[i].getAttributeNames, getComputerChoice()));
        checkForWin();
    });
}*/

const playerScore = document.createElement('h3');
playerScore.classList.add('playerScore');
playerScore.textContent = 'Player: ' + player;
container.appendChild(playerScore);

const computerScore = document.createElement('h3');
computerScore.classList.add('computerScore');
computerScore.textContent = 'Computer: ' + computer;
container.appendChild(computerScore);

const results = document.createElement('p');
results.classList.add('results');
results.textContent = 'Press a Button Below:';
container.append(results);

function checkForWin(){
    if (player == 5)
    {
        results.textContent = 'You have made it to 5 wins and have won the game!';
        player = 0;
        computer = 0;
        playerScore.textContent = 'Player: ' + player;
        computerScore.textContent = 'Computer: ' + computer;
    }
    else if (computer == 5)
    {
        results.textContent = 'The computer has made it to 5 wins and has won the game :(';
        player = 0;
        computer = 0;
        playerScore.textContent = 'Player: ' + player;
        computerScore.textContent = 'Computer: ' + computer;
    }
}

function playRound(playerSelection, computerSelection) {
    console.log("Player: " + playerSelection + " Computer: " + computerSelection);
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper"))
    {
        results.textContent = "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        player++;
        playerScore.textContent = 'Player: ' + player;
        return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    }
    else if ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper"))
    {
        results.textContent = "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        computer++;
        computerScore.textContent = 'Computer: ' + computer;
        return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }
    else
    {
        results.textContent = "It's a tie!";
        return "It's a tie!"
    }
  }

function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
}
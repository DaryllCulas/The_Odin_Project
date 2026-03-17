let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissor");
    if(choice === null) {
        console.log("Game cancelled.");
        return getHumanChoice();
    } 
    if (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissor") {
        console.log("Invalid choice. Please choose rock, paper, or scissor.");
        return getHumanChoice();
    }
    choice = choice.toLowerCase();
    return choice;
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
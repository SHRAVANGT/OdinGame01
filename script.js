let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let number = Math.round(Math.random() * 10);

    let compChoice;
    if (number > 0 && number < 3.5) {
        compChoice = "rock"
    } else if (number > 3.5 && number < 7) {
        compChoice = "paper"
    } else {
        compChoice = "scissor"
    }
    return compChoice;

}


function getHumanChoice() {
    let humanChoice = String(prompt("State your choice-Rock ,Paper or Scissor")).toLowerCase();
    return humanChoice;
}

function playRound(compChoice, humanChoice) {
    if (compChoice === "rock" && humanChoice === "rock" || compChoice === "paper" && humanChoice === "paper" || compChoice === "scissor" && humanChoice === "scissor") {
        alert(`It's draw!! your choice ${humanChoice} and computer choice ${compChoice} are same`);
        console.log(`ScoreBoard you- ${humanScore} computer- ${computerScore}`);
        alert(`ScoreBoard you- ${humanScore} computer- ${computerScore}`);

    } else if (compChoice === "rock" && humanChoice === "scissor" || compChoice === "scissor" && humanChoice === "paper" || compChoice === "paper" && humanChoice === "rock") {
        alert(`You Lose! ${compChoice} defeats ${humanChoice}`)
        computerScore++;
        console.log(`ScoreBoard you- ${humanScore} computer- ${computerScore}`);
        alert(`ScoreBoard you- ${humanScore} computer- ${computerScore}`);

    } else if (humanChoice === "rock" && compChoice === "scissor" || humanChoice === "scissor" && compChoice === "paper" || humanChoice === "paper" && compChoice === "rock") {
        alert(`You Won! ${humanChoice} defeats ${compChoice}`)
        humanScore++;
        console.log(`ScoreBoard you- ${humanScore} computer- ${computerScore}`);
        alert(`ScoreBoard you- ${humanScore} computer- ${computerScore}`);
    } else {
        console.log('error-choice again and check it carefully')
        alert('error-choice again and check it carefully')

    }
}

function playGame() {
    let count = 1;
    while (count < 6) {
        let humanChoice = getHumanChoice()
        let compChoice = getComputerChoice()
        playRound(compChoice, humanChoice)
        count++;
    }
    if (humanScore > computerScore) {
        console.log('You Won')
        alert(`You won by ${humanScore-computerScore} points`);
    } else if (humanScore < computerScore) {
        console.log('You Lose')
        alert(`You lost by ${computerScore-humanScore} points`);
    } else {
        console.log('Draw')
        alert(`Draw!! ScoreBoard - ${humanScore} ${computerScore} points`);
    }
}
playGame();
document.addEventListener('DOMContentLoaded', () => {

    let computerScore = 0;
    let humanScore = 0;
    let gameCount = 0;
    let playerselectionButton = document.querySelectorAll(".buttons")
    let display = document.querySelector('.display');
    let displayResult = document.createElement('h2');
    displayResult.classList.add('display-text');
    let displayScorecard = document.createElement('h2');
    displayScorecard.classList.add('display-text')
    let resetButton = document.createElement('button')
    resetButton.classList.add('resetButt')
    let gamecount = document.querySelector('.game-count')

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

    function getHumanChoice(e) {
        return e.target.classList.value;
    }

    function playRound(compChoice, humanChoice) {
        let result = '';
        let scoreCard = '';
        if (compChoice === humanChoice) {
            result = 'Result: Draw'
            scoreCard = `ScoreBoard: you- ${humanScore} computer- ${computerScore}`
        } else if (compChoice === "rock" && humanChoice === "scissor" || compChoice === "scissor" && humanChoice === "paper" || compChoice === "paper" && humanChoice === "rock") {
            result = 'Result:Lose'
            computerScore++;
            scoreCard = `ScoreBoard:
        you- ${humanScore} computer- ${computerScore}`
        } else if (humanChoice === "rock" && compChoice === "scissor" || humanChoice === "scissor" && compChoice === "paper" || humanChoice === "paper" && compChoice === "rock") {
            result = 'Result: Win'
            humanScore++;
            scoreCard = `ScoreBoard: you- ${humanScore} computer- ${computerScore}`
        } else {
            result = 'error-choice again and check it carefully'
        }
        displayResult.textContent = result;
        displayScorecard.textContent = scoreCard;
        gameCount++;
        display.appendChild(displayResult)
        display.appendChild(displayScorecard)
    }
    playerselectionButton.forEach(button => {
        button.addEventListener("click", (e) => {
            let humanChoice = getHumanChoice(e);
            let compChoice = getComputerChoice();
            playRound(compChoice, humanChoice);
            gamecount.textContent = (`Game:${gameCount}`)
            resetButton.textContent = 'reset'
            resetButton.addEventListener('click', () => {
                humanScore = 0;
                computerScore = 0;
                display.innerHTML = ''
                gameCount = 0;
                gamecount.innerHTML = `Game:${gameCount}`
            })
            display.appendChild(resetButton)
        })
    })
})
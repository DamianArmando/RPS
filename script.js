
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerRandomChoices = ['rock', 'paper', 'scissor'];
    let getRandomChoices = Math.floor(Math.random() * computerRandomChoices.length)
    return computerRandomChoices[getRandomChoices];
}


let playerPoints = document.querySelector('.player-score');
let computerPoints = document.querySelector('.computer-score');

const resetGame = document.querySelector('.reset-game');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');



function playRound(playerSelection, computerSelection) {

    console.log(`You selected: "${playerSelection}"`);
    console.log(`Computer selected: "${computerSelection}"`);
    if(playerSelection === computerSelection) {
        document.getElementById('result').innerHTML = 'Egalitate';
        document.getElementById('result').style.color = 'gray';
    }else if(playerSelection === 'rock') {
        if(computerSelection === 'scissor') {
            playerScore++;
            document.getElementById('result').innerHTML = 'Ai castigat';
            document.getElementById('result').style.color = 'green';
            playerPoints.textContent = playerScore;    
        }else {
            computerScore++;
            document.getElementById('result').innerHTML = 'Ai pierdut';
            document.getElementById('result').style.color = 'red';
            computerPoints.textContent = computerScore;
        }
    }else if(playerSelection === 'paper') {
        if(computerSelection === 'rock') {
            playerScore++;
            document.getElementById('result').innerHTML = 'Ai castigat';
            document.getElementById('result').style.color = 'green';
            playerPoints.textContent = playerScore;
        }else {
            computerScore++;
            document.getElementById('result').innerHTML = 'Ai pierdut';
            document.getElementById('result').style.color = 'red';
            computerPoints.textContent = computerScore;
        }
    }else if(playerSelection === 'scissor') {
        if(computerSelection === 'paper') {
            playerScore++;
            document.getElementById('result').innerHTML = 'Ai castigat';
            document.getElementById('result').style.color = 'green';
            playerPoints.textContent = playerScore;
        }else {
            computerScore++;
            document.getElementById('result').innerHTML = 'Ai pierdut';
            document.getElementById('result').style.color = 'red';
            computerPoints.textContent = computerScore;
        }
    }

}


function game(playerChoice) {

    let player = playerChoice;

    let computer = computerPlay();

    playRound(player, computer);
        if(playerScore == 5) {
           document.getElementById('winner').innerHTML = 'Felicitari!. Ai castigat contra computerului.'
           document.getElementById('winner').style.backgroundColor = 'green';
           document.getElementById('winner').style.color = 'white';
           document.querySelector('.bestOf5').textContent = '';
           document.getElementById('result').innerHTML = '';
           rock.disabled = true;
           paper.disabled = true;
           scissor.disabled = true;

        }else if(computerScore == 5) {
            document.getElementById('winner').innerHTML = 'Ai pierdut. Computerul a invins.';
            document.getElementById('winner').style.backgroundColor = 'red';
            document.getElementById('winner').style.color = 'white';
           document.querySelector('.bestOf5').textContent = '';
           document.getElementById('result').innerHTML = '';
           rock.disabled = true;
           paper.disabled = true;
           scissor.disabled = true;

        }
    }


rock.addEventListener('click', () => {
    game('rock');
})

paper.addEventListener('click', () => {
    game('paper');
})

scissor.addEventListener('click', () => {
    game('scissor');
})

resetGame.addEventListener('click', () => {
    window.location.reload();
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
})
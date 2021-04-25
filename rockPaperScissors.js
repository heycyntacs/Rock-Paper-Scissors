let player;
let computer;
let playerCounter = 0;
let computerCounter = 0;

const arr = ['Rock', 'Paper', 'Scissors'];

let input = document.querySelectorAll('button');
input.forEach(button => { 
    button.addEventListener('click', () => {
        player = button.id;
        playRound(player, computer);
        if (playerCounter === 5) {
            alert('Player wins the game!');
            playerCounter = 0;
            computerCounter = 0;
            para.textContent = `Player: ${playerCounter} Computer: ${computerCounter}`;
        }
        else if (computerCounter === 5){
            alert('Computer wins the game!');
            playerCounter = 0;
            computerCounter = 0;
            para.textContent = `Player: ${playerCounter} Computer: ${computerCounter}`;
        }
        console.log(playerCounter, computerCounter);
    });
});

function computerSelection() {
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound (player, computer) {
    computer = computerSelection().toLowerCase();
    if (player === computer) alert('Draw!');
    else if ((player === 'rock' && computer === 'scissors') || 
            (player === 'paper' && computer === 'rock') || 
            (player === 'scissors' && computer === 'paper')) {
                playerCounter++;
                alert(`${player.toUpperCase()} beats ${computer.toUpperCase()}. Player wins!`);
                para.textContent = `Player: ${playerCounter} Computer: ${computerCounter}`;
            }
    else {
        computerCounter++;
        alert(`${computer.toUpperCase()} beats ${player.toUpperCase()}. Computer wins!`);
        para.textContent = `Player: ${playerCounter} Computer: ${computerCounter}`;
    }
}

const div = document.querySelector('.select');
const para = document.createElement('p');
div.appendChild(para);
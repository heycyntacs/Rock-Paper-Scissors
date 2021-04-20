let player;
let play;
let computer;

let playerCounter = 0;
let computerCounter = 0;

function playerFunction() {
    let input;
    do {
        input = prompt('Rock Paper Scissors?')
        input = input.toLowerCase();
        console.log(input);
    } 
    while (input !== 'rock' && input !== 'paper' && input !== 'scissors');
    if (input === 'rock') {
        return player = 0;
    }
    else if (input === 'paper') {
        return player = 1;
    }
    return player = 2;
}

function computerFunction(){
        let randomNumber =  Math.floor(Math.random() * 3);
        return computer = randomNumber;
}

function playRound(player, computer) {
    if (player === computer) {
        alert(`Draw! Player: ${playerCounter} Computer: ${computerCounter}`);
        return play = 'Draw';
    }
    else if (player === 0) {
        if (computer === 1) {    
            computerCounter++;
            alert(`You lose! Player: ${playerCounter} Computer: ${computerCounter}`);       
            return play = 1;
        }
        else if (computer === 2) {  
            playerCounter++;
            alert(`You win! Player: ${playerCounter} Computer: ${computerCounter}`);         
            return play = 0;
        }
    }
    else if (player === 1) {
        if (computer === 0) {
            playerCounter++;  
            alert(`You win! Player: ${playerCounter} Computer: ${computerCounter}`);          
            return play = 0;
        }
        else if (computer === 2) {
            computerCounter++;     
            alert(`You lose! Player: ${playerCounter} Computer: ${computerCounter}`);   
            return play = 1;
        }
    }
    else if (player === 2) {
        if (computer === 0) {
            computerCounter++;
            alert(`You lose! Player: ${playerCounter} Computer: ${computerCounter}`);
            return play = 1;
        }
        else if (computer === 1) {
            playerCounter++;
            alert(`You win! Player: ${playerCounter} Computer: ${computerCounter}`);
            return play = 0;
        }
    }
}

function game() {
    do {
        playerFunction();
        computerFunction();
        playRound(player,computer);
        console.log(player, computer, play);
    } while(playerCounter !== 5 && computerCounter !== 5);
    if (playerCounter > computerCounter) {
        alert('Player wins!');
    }
    else if (playerCounter < computerCounter) {
    alert('Computer wins!');
    }
    else {
        alert('Draw');
    }
}
game();
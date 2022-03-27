let player = null;
let selectedPlayer = document.getElementById('selected-player');
let squares = document.getElementsByName('square');

changePlayer('X');

function pickSquare(id) {
    let square = document.getElementById(id);

    if (square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    changePlayer(player);
}

function changePlayer(value) {
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkWinner() {
    
}
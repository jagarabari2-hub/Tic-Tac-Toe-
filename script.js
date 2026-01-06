// Game state variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let scores = {
    X: 0,
    O: 0,
    draw: 0
};

// Winning combinations
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// DOM elements
const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');
const resetScoreBtn = document.getElementById('resetScoreBtn');
const winModal = document.getElementById('winModal');
const winMessage = document.getElementById('winMessage');
const winDetails = document.getElementById('winDetails');
const winLine = document.getElementById('winLine');

// Event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetBtn.addEventListener('click', resetGame);
resetScoreBtn.addEventListener('click', resetScore);

// Handle cell click
function handleCellClick(event) {
    const cell = event.target;
    const index = parseInt(cell.getAttribute('data-index'));

    if (board[index] !== '' || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('taken', currentPlayer.toLowerCase());

    checkResult();
}

// Check game result
function checkResult() {
    let roundWon = false;
    let winningCombination = null;

    for (let i = 0; i < winningConditions.length; i++) {
        const condition = winningConditions[i];
        const a = board[condition[0]];
        const b = board[condition[1]];
        const c = board[condition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            winningCombination = condition;
            break;
        }
    }

    if (roundWon) {
        gameActive = false;
        drawWinLine(winningCombination);
        scores[currentPlayer]++;
        updateScoreboard();

        setTimeout(() => {
            showWinModal(`Player ${currentPlayer} Wins!`, `Congratulations! Player ${currentPlayer} has won the game!`);
        }, 600);
        return;
    }

    // Check for draw
    if (!board.includes('')) {
        gameActive = false;
        scores.draw++;
        updateScoreboard();

        setTimeout(() => {
            showWinModal('It\'s a Draw!', 'Good game! Nobody wins this round!');
        }, 400);
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O': 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
}

// Draw winning line
function drawWinLine(combination) {
    const firstCell = cells[combination[0]];
    const lastCell = cells[combination[2]];

    const firstRect = firstCell.getBoundingClientRect();
    const lastRect = lastCell.getBoundingClientRect();
    const boardRect = document.getElementById('board').getBoundingClientRect();

    winLine.classList.remove('horizontal', 'vertical', 'diagonal', 'diagonal-right', 'diagonal-left', 'show');

    // Determine line type and position
    if (combination[0] === 0 && combination[2] === 2) {
        // Top row
        winLine.classList.add('horizontal');
        winLine.style.top = (firstRect.top + firstRect.height / 2 - boardRect.top) + 'px';
    } else if (combination[0] === 3 && combination[2] === 5) {
        // Middle row
        winLine.classList.add('horizontal');
        winLine.style.top = (firstRect.top + firstRect.height / 2 - boardRect.top) + 'px';
    } else if (combination[0] === 6 && combination[2] === 8) {
        // Bottom row
        winLine.classList.add('horizontal');
        winLine.style.top = (firstRect.top + firstRect.height / 2 - boardRect.top) + 'px';
    } else if (combination[0] === 0 && combination[2] === 6) {
        // Left column
        winLine.classList.add('vertical');
        winLine.style.left = (firstRect.left + firstRect.width / 2 - boardRect.left) + 'px';
    } else if (combination[0] === 1 && combination[2] === 7) {
        // Middle column
        winLine.classList.add('vertical');
        winLine.style.left = (firstRect.left + firstRect.width / 2 - boardRect.left) + 'px';
    } else if (combination[0] === 2 && combination[2] === 8) {
        // Right column
        winLine.classList.add('vertical');
        winLine.style.left = (firstRect.left + firstRect.width / 2 - boardRect.left) + 'px';
    } else if (combination[0] === 0 && combination[2] === 8) {
        // Diagonal top-left to bottom-right
        winLine.classList.add('diagonal', 'diagonal-right');
    } else if (combination[0] === 2 && combination[2] === 6) {
        // Diagonal top-right to bottom-left
        winLine.classList.add('diagonal', 'diagonal-left');
    }

    setTimeout(() => {
        winLine.classList.add('show');
    }, 100);
}

// Show win modal
function showWinModal(message, details) {
    winMessage.textContent = message;
    winDetails.textContent = details;
    winModal.style.display = 'flex';
}

// Close modal
function closeModal() {
    winModal.style.display = 'none';
    resetGame();
}

// Reset game
function resetGame() {
    board = ['',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;

    winLine.classList.remove('show');

    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken', 'x', 'o');
    });
}

// Reset score
function resetScore() {
    scores = {
        X: 0,
        O: 0,
        draw: 0
    };
    updateScoreboard();
}

// Update scoreboard
function updateScoreboard() {
    document.getElementById('scoreX').textContent = scores.X;
    document.getElementById('scoreO').textContent = scores.O;
    document.getElementById('scoreDraw').textContent = scores.draw;
}

// Initialize
updateScoreboard();
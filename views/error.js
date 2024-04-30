// Variables
let canvas;
let ctx;
let snake;
let food;
let score;
let gameInterval;
let gameStarted = false;
let highScore = 0;

// Snake direction
let dx = 10;
let dy = 0;

// Snake speed
const speed = 100;

// Initialize the game
function init() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');

    snake = [
        { x: 200, y: 200 },
        { x: 190, y: 200 },
        { x: 180, y: 200 }
    ];

    createFood();
    score = 0;

    // Set initial direction to the right
    dx = 10;
    dy = 0;

    // Listen for arrow key presses
    window.addEventListener('keydown', changeDirection);

    // Start the game loop
    gameInterval = setInterval(gameLoop, speed);
}

// Play button click event
document.getElementById('playButton').addEventListener('click', function() {
    if (!gameStarted) {
        gameStarted = true;
        init();
        this.style.display = 'none'; // Hide the play button once the game starts
    }
});

// Create food at random position
function createFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / 10)) * 10,
        y: Math.floor(Math.random() * (canvas.height / 10)) * 10
    };
}

// Game loop
function gameLoop() {
    clearCanvas();
    drawFood();
    moveSnake();
    drawSnake();
    checkCollision();
    drawScore();
}

// Clear the canvas
function clearCanvas() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Draw the snake
function drawSnake() {
    ctx.fillStyle = 'lime';
    snake.forEach((segment) => {
        ctx.fillRect(segment.x, segment.y, 10, 10);
    });
}

// Move the snake
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        createFood();
    } else {
        snake.pop();
    }
}

// Draw the food
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 10, 10);
}

// Change snake direction
function changeDirection(event) {
    const LEFT_KEY = 37;
    const A_KEY = 65;
    const RIGHT_KEY = 39;
    const D_KEY = 68;
    const UP_KEY = 38;
    const W_KEY = 87;
    const DOWN_KEY = 40;
    const S_KEY = 83;

    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if ((keyPressed === LEFT_KEY || keyPressed === A_KEY) && !goingRight) {
        dx = -10;
        dy = 0;
    }

    if ((keyPressed === UP_KEY || keyPressed === W_KEY) && !goingDown) {
        dx = 0;
        dy = -10;
    }

    if ((keyPressed === RIGHT_KEY || keyPressed === D_KEY) && !goingLeft) {
        dx = 10;
        dy = 0;
    }

    if ((keyPressed === DOWN_KEY || keyPressed === S_KEY) && !goingUp) {
        dx = 0;
        dy = 10;
    }
}

// Check for collision
function checkCollision() {
    if (
        snake[0].x < 0 ||
        snake[0].x >= canvas.width ||
        snake[0].y < 0 ||
        snake[0].y >= canvas.height ||
        snake.slice(1).some((segment) => segment.x === snake[0].x && segment.y === snake[0].y)
    ) {
        gameOver();
    }
}

// Game over function
function gameOver() {
    clearInterval(gameInterval); // Stop the game loop
    gameStarted = false;

    // Update high score
    if (score > highScore) {
        highScore = score;
    }

    // Display end screen


    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 30);
    ctx.fillText('Score: ' + score, canvas.width / 2, canvas.height / 2);
    ctx.fillText('High Score: ' + highScore, canvas.width / 2, canvas.height / 2 + 30);

    // Show the play button
    document.getElementById('playButton').style.display = 'block';
}

// Draw score
function drawScore() {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center'; // Center the text horizontally within the canvas
    ctx.fillText('Score: ' + score, canvas.width / 2, 20); // Draw the score at the center of the canvas horizontally
}

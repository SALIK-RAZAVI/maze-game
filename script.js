const mazeElement = document.getElementById('maze');
const restartButton = document.getElementById('restartButton');

const maze = [
    ['S', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'W', 'W', 'W', ' ', 'W', 'W', 'W', 'W', ' '],
    [' ', 'W', ' ', 'W', ' ', 'W', ' ', ' ', 'W', ' '],
    [' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', 'W', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'E']
];

let playerPosition = { x: 0, y: 0 };

function createMaze() {
    mazeElement.innerHTML = '';
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (maze[y][x] === 'W') cell.classList.add('wall');
            if (maze[y][x] === 'S') cell.classList.add('start');
            if (maze[y][x] === 'E') cell.classList.add('end');
            if (x === playerPosition.x && y === playerPosition.y) cell.classList.add('player');
            mazeElement.appendChild(cell);
        }
    }
}

function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;

    if (newX < 0 || newY < 0 || newX >= maze[0].length || newY >= maze.length) return;
    if (maze[newY][newX] === 'W') return;

    playerPosition = { x: newX, y: newY };
    createMaze();

    if (maze[newY][newX] === 'E') {
        setTimeout(() => alert('Congratulations! You reached the end!'), 10);
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});

restartButton.addEventListener('click', () => {
    playerPosition = { x: 0, y: 0 };
    createMaze();
});

createMaze();

// Color reference: https://www.color-hex.com/color-palettes/
const canvas = document.querySelector('#draw');
const frame = document.querySelector('.frame');
const context = canvas.getContext('2d');
const range = document.querySelector('#stroke-size');
const colors = document.querySelectorAll('.color');
const clearButton = document.querySelector('.clear')

canvas.width = frame.clientWidth;
canvas.height = frame.clientHeight;

context.strokeStyle = 'aqua';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lestY = 0;

function handleStrokeColor() {
    context.strokeStyle = this.id;
}

function handleStrokeSize() {
    context.lineWidth = this.value;
}

function handleClearAll() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(event) {
    lastX = event.offsetX;
    lastY = event.offsetY;
    if(!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
}

range.addEventListener('change', handleStrokeSize);
colors.forEach(color => {
    color.addEventListener('click', handleStrokeColor);
});

canvas.addEventListener('mousedown', (event) => {
    console.log('hello!');
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

clearButton.addEventListener('click', handleClearAll);



const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bodyElement = document.querySelector('body');

startButton.addEventListener('clck', onClickStartButton);
stopButton.addEventListener('clck', onClickStopButton);

function onClickStartButton() {
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
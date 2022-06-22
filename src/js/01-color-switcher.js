const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bodyElement = document.querySelector('body');

startButton.addEventListener('clck', onClickStartButton);
stopButton.addEventListener('clck', onClickStopButton);

let timerId = null;
stopButton.setAttribute('disabled', true);


function onClickStartButton() {
    timerId = setInterval(() => {
        bodyElement.style.background = getRandomHexColor();
    }, 1000);
    startButton.setAttribute('disabled', true);
    stopButton.removeAttribute('disabled');
}


function onClickStopButton() {
    clearInterval(timerId);
    startButton.removeAttribute('disabled');
    startButton.setAttribute('disabled', true)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
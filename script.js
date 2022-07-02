'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const showMessage = msg => {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(score, typeof score);

  if (!guess) {
    showMessage('No Number!');
  } else if (guess === secretNum) {
    showMessage('Congratulations!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;

    document.querySelector('.score').textContent = score;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      score--;

      showMessage(guess < secretNum ? 'Higher!' : 'Lower');
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNum;
    }
  } else {
    showMessage('You lost the game');
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = secretNum;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 10;

  document.querySelector('.score').textContent = 10;

  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent =
    showMessage('Start guessing ...');
  document.querySelector('.guess').value = '';
});

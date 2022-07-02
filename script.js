'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

const showMessage = msg => {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(score, typeof score);

  if (!guess) {
    if (score > 1) {
      showMessage('No Number!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNum;
    }
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
    score--;

    showMessage(guess < secretNum ? 'Higher!' : 'Lower');
    document.querySelector('.score').textContent = score;
  } else {
    showMessage('You lost the game');
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = secretNum;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 5;

  document.querySelector('.score').textContent = 5;

  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent =
    showMessage('Start guessing ...');
  document.querySelector('.guess').value = '';
});

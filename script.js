'use strict';
let scoreS = 20;
let check = document.querySelector('.check');
let score = document.querySelector('.score');
let message = document.querySelector('.message');
let body = document.querySelector('body');
let number = document.querySelector('.number');
let again = document.querySelector('.again');
let highScore = document.querySelector('.highscore');
let hscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
score.textContent = scoreS;

check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'There is no number';
  } else if (guess === secretNumber) {
    message.textContent = 'You win!';
    number.textContent = secretNumber;

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (scoreS > hscore) {
      hscore = scoreS;
      highScore.textContent = hscore;
    }
  } else if (guess > secretNumber) {
    if (scoreS > 1) {
      message.textContent = 'Too High';
      scoreS--;
      score.textContent = scoreS;
    } else {
      message.textContent = 'You Lose';
      score.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (scoreS > 1) {
      message.textContent = 'Too Low ';
      scoreS--;
      score.textContent = scoreS;
    } else {
      message.textContent = 'You Lose';
      score.textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  body.style.backgroundColor = '#222';
  score.textContent = 20;
  number.style.width = '15rem';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  document.querySelector('.guess').value = '';
});

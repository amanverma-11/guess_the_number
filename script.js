'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.guess').value = 22;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,
  highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no number
  if (!guess) {
    document.querySelector('.message').textContent =
      'Invalid Number Entered!⛔';
  }
  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    score--;
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess < secretNumber ? 'Too Low!📉' : 'Too High!📈';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game!😞';
      document.querySelector('.score').textContent = score;
    }
  }
});

//Implemention of Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //assigning a new Secret Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //restoring the original color and text width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  //   restoring message, score, highscore and number values
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
});

'use strict';

// document.querySelector('.message').textContent= '🎉 Correct Number'

//Generating Random Number

let secretNumber = Math.trunc(Math.random() * 20) + 1;


// we are initializing the score value as let because it will decrease if we guess wrong number.
let score = 20;


// for highscore
let highscore = 0;


const displayMessage = function (message){
      document.querySelector('.message').textContent = message;
};

// Adding the generated random number to the guessing Number.
// document.querySelector('.number').textContent = secretNumber;


//Adding a event listner 
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No Number!';
      displayMessage('⛔ No Number!');
  }
  // user input === secretNumber 
  else if(guess === secretNumber){
      //document.querySelector('.message').textContent = '🎉 Correct Number';
      displayMessage('🎉 Correct Number');
      document.querySelector('.number').textContent = secretNumber;
      //manipulating css by .style
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
      }
  }
  // when guess is not secret number
  else if(guess !== secretNumber){
      if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ?'📈 Too High' : '📉 Too Low';
            displayMessage(guess > secretNumber ?'📈 Too High' : '📉 Too Low');
            score--;
            document.querySelector('.score').textContent = score;
      }
      else{
            //document.querySelector('.message').textContent = '🎆 You Lost The Game';
            displayMessage('🎆 You Lost The Game');
            document.querySelector('.score').textContent = 0;
      }      
  }
  
});


document.querySelector('.again').addEventListener('click', function () {
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      score = 20;
      document.querySelector('.score').textContent = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('body').style.backgroundColor = '#222';
      //document.querySelector('.message').textContent = 'Start Guessing ...';
      displayMessage('Start Guessing ...');
      document.querySelector('.guess').value = '';
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('.number').textContent = '?';
});

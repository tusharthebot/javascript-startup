(function() {
  let number = Math.trunc(Math.random()*20)+1, checkBtn = document.querySelector('.check'), score = 20, highScore = 0;
  document.querySelector('.again').addEventListener('click', function(){
    score = 20, number = Math.trunc(Math.random()*20)+1; 
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.guess').value = "";
  });
  checkBtn.addEventListener('click', function(){
    let inputFieldValue = Number(document.querySelector('.guess').value);
    if(!inputFieldValue) {
      document.querySelector('.message').textContent = 'Not any Number entered!';
    }else if(inputFieldValue === number) {
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('body').style.backgroundColor= '#60b347';
      document.querySelector('.number').textContent = number;
      if(score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }else if (inputFieldValue > number) {
      score--;
      let message = score >= 1 ? 'Too High!':'Game Over!', scores = score >= 1 ? score : 0;
      document.querySelector('.message').textContent = message;
      document.querySelector('.score').textContent = scores;
    } else if (inputFieldValue < number) {
      score--;
      let message = score >= 1 ? 'Too Low!':'Game Over!', scores = score >= 1 ? score : 0;
      document.querySelector('.message').textContent = message;
      document.querySelector('.score').textContent = scores;
    }
  });
})();
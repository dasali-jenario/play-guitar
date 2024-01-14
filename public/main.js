// main.js

document.getElementById('dice-roll').addEventListener('click', function() {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    alert('You rolled a ' + diceRoll);
  });
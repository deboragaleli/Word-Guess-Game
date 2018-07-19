// 1. Create in your HTML one input with type="text" with an ID ok

// In this JS file create a event listener when the user type something ok

// Use console.log to make sure te function is being called ok

// Use console.log to make sure you are getting the information type ok
var hiddenWords = ['stark', 'snow', 'winter'];
var hiddenWord = '';
var errorsAllowed = 10;
// To start errorsRemaing is the same as errorsAllowed
var errorsRemainig = errorsAllowed; 

// Create an empty
var lettersGuessed = [];
var lettersRight = []

function loadGame() {
  // Get of the hidden words
  hiddenWord = hiddenWords[Math.floor(Math.random()*hiddenWords.length)];

  for (var i = 0; i < hiddenWord.length; i++) {
    document.getElementById("all-letters").innerHTML += '<span class="letters" id="letter'+ i +'"></span>';
  }
}

loadGame();

document.onkeypress = function (event) {  
  event = event || window.event;
  var positionFound = hiddenWord.indexOf(event.key);
  
  if (positionFound >= 0) {
    if (!hasItInArray(event.key, lettersRight)) {
      lettersRight.push(event.key);
      document.getElementById('letter' + positionFound).innerHTML = event.key.toUpperCase();
      
      setTimeout(function() {
        if (lettersRight.length === hiddenWord.length) {
          alert('CONGRATS! Click Ok to start a new game');
  
          // Refresh the page to start a new game
          location.reload();
        }
      }, 0);
    }
    
  } 
  else {
    if (!hasItInArray(event.key, lettersGuessed)) {
      // Use .push to add an item inside an array
      lettersGuessed.push(event.key);

      // Write in the screen the lettersGuessed
      document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(' - ');

      // If the user types a letter that doesn't match any letter of the hiddenWorld, then the user loses one chance
      errorsRemainig = errorsRemainig - 1
      document.getElementById('countChances').innerHTML = errorsRemainig;

      // Game over, alert the user
      if (errorsRemainig === 0) {
        alert('GAME OVER! Click Ok to start a new game');
        
        // Refresh the page to start a new game
        location.reload();
      }
    }
  }
};

function hasItInArray(char, myArray) {
  return myArray.indexOf(char) >= 0;
}

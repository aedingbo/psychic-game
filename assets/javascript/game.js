
//Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 12;
var lettersGuessed = [];
var computerGuess = [];


//Initial computer letter
window.onload = function() {
	var compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}


//Game
document.onkeyup = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
	console.log(computerGuess[0]);

if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 12;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoice.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 12;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

var html = "<p>Can you guess the letter I am thinking?!</p>" +
          "<p>Times you won: " + wins + "</p>" +
          "<p>Times you lost: " + losses + "</p>" +
          "<p>Guesses remaining: " + guessesLeft + "</p>" +
          "<p>Guesses taken: " + lettersGuessed + "</p>";
 
document.querySelector("#game").innerHTML = html;

}


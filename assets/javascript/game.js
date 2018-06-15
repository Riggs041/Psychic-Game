// Create variables//

var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Wins; losses; guesses left; guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

// What letters did the user guess?
var userGuess = null;

// need to figure out how the computer will guess a letter and store it 
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];


// need to create something that stores what letters the user is inputting 
document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// Need to add the letters to the "guesses so far section"
// Need to subract any wrong letters from guesses left
    if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;
        guessesLeft--;
    }
// If user guesses the right letter, win section needs to increase by 1
    if (letterToBeGuessed == userGuess) {
        wins++;
        guessesLeft = 10;
        guessesSoFar = [];
        letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

    }
// If user guesses wrong 10 times, losses section needs to increase by 1
    if (guessesLeft == 0) {
        losses++;

        guessesLeft = 10;
        guessesSoFar = [];
        letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

    }

    var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h2>Guess what letter I am thinking of</h2></p>" + "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>" + "<p><h3> Number of guesses left: " + guessesLeft + "</h3></p>" + "<p><h3>Your guesses so far: " + guessesSoFar + "</h3></p>";

    document.querySelector("#psychic").innerHTML = html;

}
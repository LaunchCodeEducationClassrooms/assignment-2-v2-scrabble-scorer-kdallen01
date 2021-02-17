// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += console.log(`Points for '${word[i]}': ${pointValue}\n`); //Edited so line prints
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
 let enteredWord = input.question("\nEnter a word to score: "); //Added
 oldScrabbleScorer(enteredWord); //Added
};

//Edited below statement by adding everything between = and last ;.
let simpleScore = function(word) {
  word = word.toUpperCase
  for(i = 0; i < word.length; i++) {
    let score = score + 1;
  }
};

//Edited below statement by adding everything between = and last ;.
let vowelBonusScore = function(word) {
  word = word.toUpperCase
  for(i = 0; i < word.length; i++) {
    if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
      score = score + 3;
    } else score = score + 1;
  }
};

let scrabbleScore;

//Everything between brackets was added 
const scoringAlgorithms = [
//  ("Simple", "Each letter is worth 1 point.", simpleScore()),
//  ("Vowel Bonus", "Vowels are worth 3 points.", vowelBonusScore()), ("Scabble", "Uses Scrabble point system.",oldScrabbleScorer())
];

//Added console.log lines
function scorerPrompt() {
  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system");
  let scoreType = input.question("Enter 0, 1, or 2: ");
}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


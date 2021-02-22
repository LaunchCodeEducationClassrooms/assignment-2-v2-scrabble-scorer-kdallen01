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
let enteredWord = ""
function initialPrompt() {
   console.log("Let's play some scrabble!");
    enteredWord = input.question("\nEnter a word to score: "); //Added
  return enteredWord;
 //oldScrabbleScorer(enteredWord); //Added
};

//Added following line
let score = "";
//Edited below statement by adding everything between = and last ;.
//Commented out original statement
//let simpleScore;
function simpleScore(word) {
  word = word.toUpperCase();
  for(i = 0; i < word.length; i++) {
    score =+ score + 1;
  }
  return score;
}

//Edited below statement by adding everything between = and last ;.
//Commented out original statement
//let vowelBonusScore;
function vowelBonusScore(word) {
  word = word.toUpperCase();
  for(i = 0; i < word.length; i++) {
    if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
      score =+ score + 3;
    } else score =+ score + 1;
  }
  return score;
  }

//Commented out original statement
//let scrabbleScore;
function scrabbleScore(word) {
  oldScrabbleScorer(word);
  return score;
}

//Everything between brackets was added 
const scoringAlgorithms = [
  {name:"Simple", description:"Each letter is worth 1 point.", scorerFunction:function(){return simpleScore(enteredWord)}},{name:"Vowel Bonus", description:"Vowels are worth 3 points.", scorerFunction:function(){return vowelBonusScore(enteredWord)}}, {name:"Scabble", description:"Uses Scrabble point system.", scorerFunction:function(){return oldScrabbleScorer(enteredWord)}}
];

let scoreType = ""
//Added console.log {} and everything in between
function scorerPrompt() {
  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system");
  scoreType = input.question("Enter 0, 1, or 2: ");
  console.log(scoreType);
  return Number(scoreType);
}


function transform() {};

let newPointStructure;

//Added scorerPrompt() and console.log
function runProgram() {
   initialPrompt();
   scorerPrompt();
  
  console.log(`Score for '${enteredWord}': ${scoringAlgorithms[scoreType].scorerFunction(enteredWord)}`);
 
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


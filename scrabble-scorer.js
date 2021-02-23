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
			letterPoints += console.log(`Points for '${word[i]}': ${pointValue}\n`);
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
   enteredWord = input.question("\nEnter a word to score: ");
  return enteredWord;
};


//let simpleScore;
function simpleScore(word) {
  word = word.toUpperCase();
  let score = "";
  for(i = 0; i < word.length; i++) {
    score =+ score + 1;
  }
  return Number(score);
}


//let vowelBonusScore;
function vowelBonusScore(word) {
  word = word.toUpperCase();
  let score = "";
  for(i = 0; i < word.length; i++) {
    if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
      score =+ score + 3;
    } else score =+ score + 1;
  }
  return Number(score);
  }


//let scrabbleScore;
function scrabbleScore(word) {
  word = word.toLowerCase()
  let score = "";
  for (i = 0; i < word.length; i++) {
      score =+ score + newPointStructure[word[i]];
  } 
  return score;
}

//Everything between brackets was added 
const scoringAlgorithms = [
  {name:"Simple", description:"Each letter is worth 1 point.", scoringFunction:function(){return simpleScore(enteredWord)}},{name:"Vowel Bonus", description:"Vowels are worth 3 points.", scoringFunction:function(){return vowelBonusScore(enteredWord)}}, {name:"Scrabble", description:"Uses Scrabble point system.",scoringFunction:function(){return scrabbleScore(enteredWord)}}
];

let scoreType = ""

function scorerPrompt() {
  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system");  scoreType = input.question("Enter 0, 1, or 2: ");
  if (scoreType ) 
  return Number(scoreType);
}


function transform(oldPointStructure) {
  let oldNewPointStructure = [];
  for (pointValue in oldPointStructure) {
    for (i = 0; i < oldPointStructure[pointValue].length; i++) {
      oldNewPointStructure[oldPointStructure[pointValue][i].toLowerCase()] = Number(pointValue);
    }
  }
  oldPointStructure = oldNewPointStructure; 
  return oldPointStructure;
 }

let newPointStructure = transform(oldPointStructure);
  

function runProgram() {
   initialPrompt();
   scorerPrompt();
  
  console.log(`Score for '${enteredWord}': ${scoringAlgorithms[scoreType].scoringFunction(enteredWord)}`);
 
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


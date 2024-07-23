// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system.

const input = require("readline-sync");

// let word = "";

const oldPointStructure = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};
let newPointStructure = {};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";
  for (let i = 0; i < word.length; i++) {
    for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
      }
    }
  }
  return letterPoints;
}

// -----------------------------------------------------------------------------

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!");
  word = input.question("Enter a word to score: ");
}

let simpleScorer = function (word) {
  score = 0;
  for (let i = 0; i < word.length; i++) {
    score += 1;
  }
  return score;
};

let vowelBonusScorer = function (word) {
  word = word.toUpperCase();
  const bonusVowelPointStructure = {
    3: ["A", "E", "I", "O", "U"],
  };

  let score = 0;
  for (let i = 0; i < word.length; i++) {
    if (bonusVowelPointStructure["3"].includes(word[i])) {
      score += 3;
    } else {
      score += 1;
    }
  }
  return score;
};

let scrabbleScorer = function (word) {
  word = word.toUpperCase();
  transform(word);
  let score = 0;
  for (const key in newPointStructure) {
    for (let i = 0; i < word.length; i++) {
      if (newPointStructure.key === word[i]) {
        score += word[i].newPointStructure[key];
      }
      return score;
    }
  }
};

const simpleScoreObject = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScorer,
};

const bonusVowelObject = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScorer,
};

const scrabbleScorerObject = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: oldScrabbleScorer,
};

const newScrabbleScorerObject = {
  name: "New Scrabble",
  description: "The new scoring algorithm.",
  scorerFunction: scrabbleScorer,
};

const scoringAlgorithms = [
  simpleScoreObject,
  bonusVowelObject,
  newScrabbleScorerObject,
];

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?");
  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - New Scrabble: Uses new scrabble point system");

  let userScorerSelection = input.question("Enter 0, 1, or 2:  ");
  // let userScorerSelection = input.question("Enter 0, 1, or 2:  ");
  // for (let i= 0; i < scoringAlgorithms.length; i++) {

  console.log("algorithm name: ", scoringAlgorithms[userScorerSelection].name);
  console.log(
    "scoringFunction result: ",
    scoringAlgorithms[userScorerSelection].scorerFunction(word)
  );
}

// 1. Take the user input in userScorerSelection
// 2. Select one element from scoringAlgorithms array using user's input.

//  score += scoringAlgorithms[0].ScorerFunction(word);

// scorerPrompt();
function transform(oldPointStructure) {
  for (const property in oldPointStructure) {
    // newKeysArr = [oldPointStructure[property].push];

    for (let i = 0; i < oldPointStructure[property].length; i++) {
      newPointStructure[oldPointStructure[property][i].toLowerCase()] =
        Number(property);
    }
  }
  return newPointStructure;
}
// transform(oldPointStructure);

// console.log(`Key: ${key}, Value: ${oldObject[key]}`);
//    }
//  return oldObject;

function runProgram() {
  initialPrompt();
  scorerPrompt(word);

  console.log(newPointStructure);
  // console.log(Number(newPointStructure.c) + Number(newPointStructure.a));

  // // - Instead of setting up word as a global variable in line 5, you should return it
  // from your initialPrompt() function and pass the value to scorerPrompt().
  // Take another look at the "Function Input and Output" section in Chapter 10.
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt,
};

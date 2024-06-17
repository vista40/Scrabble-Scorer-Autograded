// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

let word = "";

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const bonusVowelPointStructure = {
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
   3: ['A', 'E', 'I', 'O', 'U'],
 };
 


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
   let score = 0
   for (let i = 0; i < word.length; i++) {
      // for (let key in oldPointStructure) 
      //    if (word[i]=== oldScrabbleScorer[key]) {
      //       score += oldScrabbleScorer[key][word[i]];
      if (oldPointStructure["1"].includes(word[i])) {
         score += 1;
       }
          // letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      if (oldPointStructure["2"].includes(word[i])) {
          score += 2;
       }
      if (oldPointStructure["3"].includes(word[i])) {
         score += 3;
       }
      if (oldPointStructure["4"].includes(word[i])) {
         score += 4;
       }
      if (oldPointStructure["5"].includes(word[i])) {
         score += 5;
       }
      if (oldPointStructure["8"].includes(word[i])) {
         score += 8;
       }
      if (oldPointStructure["10"].includes(word[i])) {
         score += 10;
      }
   }
   return score;
};
    
         // if (oldPointStructure.key.includes(word[i])) {
      
      //   console.log(oldPointStructure.pointValue[word[i]]);
			// letterPoints += `Points for '${word[i]}': ${pointValue}\n`


	// return letterPoints;


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!"); 
   userWord = input.question("Enter a word to score: ");
   word += userWord;
   // console.log(oldScrabbleScorer(wordInput));
   // console.log(simpleScorer(wordInput));
   // console.log(vowelBonusScorer(wordInput));
   
};
 
let newPointStructure = {

};



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
      1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
      3: ['A', 'E', 'I', 'O', 'U'],
    };
   let letterPoints = "";
   let score = 0;
   for (let i = 0; i < word.length; i++) {
     
         if (bonusVowelPointStructure["1"].includes(word[i])) {
           score += 1;
         }
            // letterPoints += `Points for '${word[i]}': ${pointValue}\n`
          
         if (bonusVowelPointStructure["3"].includes(word[i])) {
            score += 3;
         }
      
   }
   return score; 
 };

   
 function scrabbleScorer(word) {
   word = word.toUpperCase();
   let score = 0;
   for (let i = 0; i < word.length; i++) {
      for (let letter in newPointStructure)
      score += newPointStructure[letter][i];
   }
    return score;
};

const simpleScoreObject = {
   Name: "Simple Score", 
   Description: "Each letter is worth 1 point.",
   ScorerFunction: simpleScorer
};

const bonusVowelObject = {
   Name: "Bonus Vowels",
   Description: "Vowels are 3 pts, consonants are 1 pt.",
   ScorerFunction: vowelBonusScorer
};

const scrabbleScorerObject = {
   Name: "Scrabble",
   Description: "The traditional scoring algorithm.",
   ScorerFunction: oldScrabbleScorer
};

const newScrabbleScorerObject = {
   Name: "New Scrabble",
   Description: "The new scoring algorithm.",
   ScorerFunction: scrabbleScorer
};

const scoringAlgorithms = [simpleScoreObject, bonusVowelObject, newScrabbleScorerObject];

function scorerPrompt() {
   console.log("Which scoring algorithm would you like to use?");
   console.log("0 - Simple: One point per character");
   console.log("1 - Vowel Bonus: Vowels are worth 3 points");
   console.log("2 - New Scrabble: Uses new scrabble point system");

   let userScorerSelection = input.question("Enter 0, 1, or 2:  ");
   // let userScorerSelection = input.question("Enter 0, 1, or 2:  ");
   // for (let i= 0; i < scoringAlgorithms.length; i++) {
      
      console.log("algorithm name: ", scoringAlgorithms[userScorerSelection].Name);
      console.log("scoringFunction result: ", scoringAlgorithms[userScorerSelection].ScorerFunction(word));
   };

     // 1. Take the user input in userScorerSelection
   // 2. Select one element from scoringAlgorithms array using user's input.

   //  score += scoringAlgorithms[0].ScorerFunction(word);
  

// scorerPrompt();
function transform(oldPointStructure) {

   for (let property in oldPointStructure) {
      // newKeysArr = [""];
      // // console.log(oldPointStructure[property]);
      // newKeysArr = oldPointStructure[property];
      //  console.log(property);
      // oldPointStructure(property);
      // console.log(newKeysArr);
            // newKeysArr = [oldPointStructure[property].push];
   
      for (let i = 0; i < oldPointStructure[property].length; i++) {
         newPointStructure[oldPointStructure[property][i]] = property;




      // newPointStructure.push(newKeysArr[i]);
      }
    }
   };
   transform(oldPointStructure);

// console.log(`Key: ${key}, Value: ${oldObject[key]}`);
//    }  
//  return oldObject;




function runProgram() {
   initialPrompt();
   scorerPrompt();

  
  
  



   
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
	scorerPrompt: scorerPrompt
};

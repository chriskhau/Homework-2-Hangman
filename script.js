const potential_words = ["CASTLE","BOX","COMPUTER","BOTTLE","HAMSTER","DUCK","JAVASCRIPT","PHONE","DESK","CHAIR","SANDWICH"]
const randNum = (Math.floor(Math.random() * Math.floor(potential_words.length)))
const actual_word = potential_words[randNum]
const startLives = 8;

function HangMan(word){
  this.word = []
  this.guessedLetters = []
  this.allGuesses = []
  this.wrongGuesses = []
  this.correctString = ''
  var lost = false;
  var completed = false;

  this.guessLetter = function(letter){};
  this.checkRepeat = function(letter){};
  this.isComplete = function(){};

  for (i=0;i<word.length;i++){
    this.word.push(word[i]);
    this.guessedLetters.push('_');
  }
  //console.log(word);
  console.log("Try to guess the word!");
  console.log("use word.guessLetter('input') for your guesses")
  console.log(this.guessedLetters);

  this.guessLetter = function(letter){
    var letter = letter.toUpperCase()
    console.log("Current Guess: " + letter)
    if (this.completed){
      console.log("Stop guessing you already won!")
      return;
    }
    if (this.lost){
      console.log("Stop guessing you already lost!");
      return;
    }
    // var invalidGuess = this.checkRepeat(letter)
    // if (invalidGuess){
    //   console.log("Sorry you have already guess the letter "+letter)
    //   return;
    // }
    
    this.allGuesses.push(letter);

  //guess letter
    for (i =0;i < this.word.length;i++){
      if (letter === word[i]){
          this.guessedLetters[i] = letter;
          console.log("You guessed " + letter + " correctly!");

          //message
          console.log(this.guessedLetters.toString());

          this.completed = this.isComplete();
          if (completed){
            console.log("You guessed everything! The word was " + this.correctString)
            return;
          }
          return;
      }
    }
    this.wrongGuesses.push(letter)
    if (this.wrongGuesses.length >= startLives){
      console.log("Sorry you lose");
      console.log(" _______")
      console.log(" |     |")
      console.log(" |     O")
      console.log(" |    -|-")
      console.log("_|_   / \\ ")
      lost = true;
      return;
  }
    if (this.wrongGuesses.length < startLives){
    console.log("Sorry "+letter+" is not in the word you have "+ (startLives-this.wrongGuesses.length)+ " guesses left");
    return;

  }
  

  }
  this.checkRepeat = function(letter){
  for (i = 0;i < this.allGuesses.length;i++){
    if (this.allGuesses[i] === letter){
      return true;
    }
  }
  return false;
}
  this.isComplete = function(){
  for (i = 0;i < this.guessedLetters.length;i++){
    if (this.guessedLetters[i] === '_'){
      return false;
    }
  }

  for (i = 0;i<this.guessedLetters.length;i++){
    this.correctString += guessedLetters[i]
  }
  return true;
}
}
var word = new HangMan(actual_word);

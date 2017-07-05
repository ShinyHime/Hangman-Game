// INITIALIZE VARIABLES

 wins = 0;
var placeholderArray = [];
var prevPlaceholderArray = [];
var wordPlaceholder = [];
var lettersGuessed = [];
var word = [];
var wordPlaceholderString = "";
var userInput = "";
var correctGuessCount = 0;
var guessesLeft = 15;

// ARRAY OF WORDS

var leagueWords = {
    word1: ["A", "S", "H", "E"],
    word2: ["Y", "A", "S", "U", "O"],
    word3: ["J", "I", "N", "X"],
    word4: ["C", "A", "I", "T", "L", "Y", "N"],
    word5: ["N", "A", "M", "I"],
    word6: ["S", "O", "N", "A"],
    word7: ["K", "A", "Y", "L", "E"]
};

var wordAr = [leagueWords.word1,
                leagueWords.word2,
                leagueWords.word3, 
                leagueWords.word4,
                leagueWords.word5,
                leagueWords.word6,
                leagueWords.word7];

var leaguePics = {
    picture1: ["assets/images/1.jpg"],
    picture2: ["assets/images/2.jpg"],
    picture3: ["assets/images/3.jpg"],
    picture4: ["assets/images/4.jpg"],
    picture5: ["assets/images/5.jpg"],
    picture6: ["assets/images/6.jpg"],
    picture7: ["assets/images/7.jpg"],
};

var pics = [leaguePics.picture1,
            leaguePics.picture2,
            leaguePics.picture3,
            leaguePics.picture4,
            leaguePics.picture5,
            leaguePics.picture6,
            leaguePics.picture7];



createWord(wordAr);

// game steps
document.onkeyup = function(event) {
    var keyPress;
    if(event.keyCode > 64 && event.keyCode < 91) {
        keyPress = event.keyCode;
        userInput = String.fromCharCode(keyPress).toUpperCase();
        trackLetterGuesses(userInput);
        buildWord(userInput);

    }
};


function createWord(wordAr) {
    word = wordAr[Math.floor(Math.random()*wordAr.length)];
    createWordPlaceholder(word);
    return word;
};

function createWordPlaceholder(word) {  
    var wordPlaceholder = [];
    for (i = 0; i < word.length; i++) {
        wordPlaceholder.push("x");
    }
    wordPlaceholderString = wordPlaceholder.join(" ");
    document.getElementById('word-placeholder').textContent = wordPlaceholderString;
    return wordPlaceholder;
};

function trackLetterGuesses(userInput) {

    for (i = 0; i < lettersGuessed.length; i++) {
        if (userInput == lettersGuessed[i]) {
            return;
        };
    }

    lettersGuessed.push(userInput);

    var lettersGuessedString = lettersGuessed.join(",");
    document.getElementById('letters-guessed').innerHTML = lettersGuessedString;

    guessesLeft--;

    document.getElementById('guess-count').innerHTML = guessesLeft;

    if (guessesLeft == 0) {
        
        restartGame();
        document.getElementById ('leagepic').src = 'assets/images/LeagueLogo.png';
        
    }

    return lettersGuessedString;
};


function buildWord(userInput) {

    if (prevPlaceholderArray.length == 0) {
        placeholderArray = createWordPlaceholder(word);

    } else {
        placeholderArray = prevPlaceholderArray;

    }

    for (var i = 0; i < word.length; i++) {
      if (userInput == word[i]) {

        placeholderArray[i] = userInput;

      }
    }

    prevPlaceholderArray = placeholderArray;

    placeholder = placeholderArray.join(" ");
    document.getElementById('word-placeholder').innerHTML = placeholder;

    if (placeholder.split(',') == word.join(" ")) {
        wins++;
        pictureChanger();
        document.getElementById('win-count').innerHTML = wins;
        restartGame();
    };
   

}




function restartGame(wordPlaceholder) {

    createWord(wordAr);
    userInput = "";
    prevPlaceholderArray = [];
    placeholderArray = [];
    guessesLeft = 15;
    correctGuessCount = 0;
    document.getElementById('guess-count').innerHTML = guessesLeft;
    lettersGuessed = [];
    document.getElementById('letters-guessed').innerHTML = lettersGuessed;
    
}

function pictureChanger(){
    for(var j=0; j<wordAr.length; j++){
        if(placeholder.split(',') == wordAr[j].join(" ")){
            document.getElementById ('leaguepic').src = pics[j];
        }
    }
}




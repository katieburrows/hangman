var targetDiv = document.getElementById("letterDisplay");
var wordArray = ["volcano", "earthquake", "tsunami", "hurricane", "tornado", "flood", "fire", "blizzard", "mudflow", "mudslide", "avalanche", "cyclone", "typhoon", "bushfire", "sinkhole"];
var wins = 0;
var losses = 0;
var currentWord;
var guessesCounter = 10;
var lettersGuessedArray = [];
var previouslyGuessed;
var previousWord;

function initializeApp (){
    targetDiv.textContent = "";
    guessesCounter = 10;
    lettersGuessedArray = [];
    
    document.querySelector("#userGuessArray").innerHTML = lettersGuessedArray.join(", ");
    var previouslyGuessed = false;
   
    document.querySelector("#guessCounter").innerHTML = "Guesses remaining: " + guessesCounter;

    //generates a random word from the wordArray, splits the word on each character
    currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    while (previousWord === currentWord){
        currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    }
    currentWord = currentWord.split("");
    previousWord = currentWord.join("");
    console.log(currentWord);

    //loops through the current word and creates a paragraph for each letter, sets the data- attribute to be the value of the current character for each element, adds a dash in place of the letter on the page, and finally crams that element onto the page. 
    for (var i = 0; i < currentWord.length; i++){
        
        letterContainer = document.createElement("p");
        
        letterContainer.setAttribute("data-letter", currentWord[i]);
        
        letterContainer.textContent = "_ ";
        
        targetDiv.appendChild(letterContainer);
    }
}

document.onkeyup = function(event) {

    //var correct is the flag that is checked against to make sure that the letter guessed is part of the current word.
    var correct = true;
    var userKeyPress = event.key;
    if (userKeyPress.toLowerCase().match(/[a-z]/) === null || userKeyPress.length !== 1){
        return false;
    }
    if(lettersGuessedArray.indexOf(userKeyPress) === -1){
    lettersGuessedArray.push(userKeyPress);
    document.querySelector("#userGuessArray").innerHTML = lettersGuessedArray.join(`, &nbsp;`);

    //querySelectorAll gives back an array.  If the user enters a guess that isn't correct then var matches will be returned as an empty array.  If there is a correct guess then matches will return an array full of the letter(s).  For example if the word had double letters ("volcano"): matches would then be set to two <p>s that match and now matches is the pointer to those <p>s.
    var matches = document.querySelectorAll("[data-letter='" + userKeyPress.toLowerCase() + "']");

    //for each match that was made with querySelectorAll add it to the page
    matches.forEach(function(match){
        match.textContent = userKeyPress + " ";
    });

    //checks to see if matches' length is 0, if it is 0 that means that the querySelectorAll returned an empty array which in turn means that the guess was wrong.  Take away one guess from the guess counter
    if (!matches.length && lettersGuessedArray.indexOf(userKeyPress) === lettersGuessedArray.length - 1){
        guessesCounter--;
        var loseAGuess = "<p>Guesses remaining: " + guessesCounter + "<p>";
        document.querySelector("#guessCounter").innerHTML = loseAGuess;     
    }
    if (guessesCounter === 0){
        alert("game over, you lose, the correct word was: " + currentWord.join(""));
        losses++;
        lettersGuessedArray = [];
        initializeApp();
    }

    //loop through to see if the word has been guessed correctly, this creates an array of references to all of the letter paragraphs
    var letters = document.querySelectorAll("[data-letter]");
      
    letters.forEach(function(letter){
        var goalLetter = letter.getAttribute("data-letter");
        var currentValue = letter.textContent.slice(0, 1);

        // console.log("goal letter: " + goalLetter.toLowerCase());
        // console.log("current value: " + currentValue.toLocaleLowerCase());

        if (goalLetter.toLowerCase() !== currentValue.toLowerCase()){
            correct = false;
            return false;
        }
    })
    //below would only trigger if the word matched
    if (correct){
        wins++;
        lettersGuessedArray = [];
        setTimeout(function(){
            alert("word matched");
            initializeApp();
        }, 50);
        
        
    }

    var winsHTML = "<p>Wins: " + wins + "</p>";
    document.querySelector("#wins").innerHTML = winsHTML;

    var lossesHTML = "<p>Losses: " + losses + "</p>";
    document.querySelector("#losses").innerHTML = lossesHTML;






}
    
}
initializeApp();

   

    //clean up whole lettersGuessedArray on the page situation.

    //fix alert that says you won displaying before the last guess can be entered for a word.
        //maybe blow the word up so the user can see what the correct word was before resetting?

    //after a word from the array has been played it can no longer be played.
    
    //styling.

    

    
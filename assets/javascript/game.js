var targetDiv = document.getElementById("letterDisplay");
var wordArray = ["volcano", "earthquake", "tsunami", "hurricane", "tornado", "flood", "fire"];
var wins = 0;
var losses = 0;
var currentWord;
var guessesCounter = 10;
var lettersGuessedArray;
var previouslyGuessed;

function initializeApp (){
    targetDiv.textContent = "";
    guessesCounter = 10;
    var lettersGuessedArray = [];
    var previouslyGuessed = false;
   
    
    //generates a random word, splits the word on each character
    currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    currentWord = currentWord.split("");

    console.log(currentWord);

    //loops through the current word and creates a paragraph for each letter, sets the data- attribute to be the letter of the current character for each element, adds a dash in place of the letter on the page, and finally crams that element onto the page. 
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

    //querySelectorAll gives back an array.  If the user enters a guess that isn't correct then var matches will be returned as an empty array.  If there is a correct guess then matches will return an array full of the letter(s).  For example if the word had double letters:  "Volcano", then matches would then be set to two p's that match and now matches is the pointer to those <p>s.
    var matches = document.querySelectorAll("[data-letter='" + userKeyPress.toLowerCase() + "']");

     
    //when logging an array with a string you must use a "," and not a "+".
    // console.log("matches: " , matches)

    //for each match that was made with querySelectorAll add it to the page
    matches.forEach(function(match){
        match.textContent = userKeyPress + " ";
    });

    //checks to see if matches' length is 0, if it is 0 that means that the querySelectorAll returned an empty array which in turn means that the guess was wrong.  Take away one guess from the guess counter
    if (!matches.length){
        guessesCounter--;
        console.log("wrong guess"); 
        console.log(guessesCounter);  
    }
    if (guessesCounter === 0){
        alert("game over, you lose");
        losses++;
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
        alert("word matched");
        initializeApp();
    }

    var winsHTML = "<p>Wins: " + wins + "<p>";
    document.querySelector("#wins").innerHTML = winsHTML;

    var lossesHTML = "<p>Losses: " + losses + "<p>";
    document.querySelector("#losses").innerHTML = lossesHTML;

}
initializeApp();


    //overwrite the original picture displayed with a picture of the word being guessed.
    //update wins++ and display the total to scoreboard.

//the player loses when there are no more guesses left.
    //overwrite the original picture displayed with a picture of the word being guessed.
    //upadate losses++ and display the total to scoreboard.

//bonus:  play a clip of music correlating with the word that's being guessed.
     
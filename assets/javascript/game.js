var wordArray = ["volcano", "earthquake", "tsunami", "hurricane", "tornado", "flood"];


var wins = 0;
var losses = 0;

function initializeApp (){
    var currentWord = "";
    var guessesCounter = 10;
    var lettersGuessedArray = [];
    var previousEntry = false;
    var originalPicture = "";
    var text = "";
    var targetDiv = "";



    currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    
    currentWord = currentWord.split("");
    for (var i = 0; i < currentWord.length; i++){
        var targetDiv = document.getElementById("letterDisplay");
        text = targetDiv.text = "_ ";
        targetDiv.append(text);
    }
    
    console.log(currentWord);

//the scoreboard is set to 0.
        
//To start(can use initializeApp() for everything except the scoreboard):  
    //load the page with a randomly selected word from the wordArray.
        //split the word up into the correct number of underscores.
            //then push the word onto the page as blank underscores.
    //the guesses counter is set to 10.
    //the letters guessed section is empty.
    //display the game's theme picture.
    

    document.onkeyup = function(event) {
        var userKeyPress = event.key;
        
        for (var i = 0; i < currentWord.length; i++){
            if(userKeyPress === currentWord[i]){
                // userKeyPress.push(lettersGuessedArray);

                text = (text.text = userKeyPress);
                console.log(`${"text pickup test: "}${text}`)
                targetDiv.append(text);
            
            } 
            
        }
        
    }
//collect the user's keypress
    //compare the keypress with the letters of the word
        //if the letter matches any part of the word display that letter in the dashes.
            //add the letter to an array of letters that have been guessed.
        //if the letter doesn't match any part of the word push it to the letters guessed section
            //add the letter to an array of letters that have been guessed.
            //subtract one from the guesses counter
    //if the user has pressed this key before don't take any action (compare with the already guessed letters array).

    


//the player wins if they have guessed the word and they have at least 1 guess left.
    //overwrite the original picture displayed with a picture of the word being guessed.
    //update wins++ and display the total to scoreboard.
//the player loses when there are no more guesses left.
    //overwrite the original picture displayed with a picture of the word being guessed.
    //upadate losses++ and display the total to scoreboard.

//bonus:  play a clip of music correlating with the word that's being guessed.


}
initializeApp();

     
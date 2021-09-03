
// TODO: Lag en funksjon for å sjekke om vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
// TODO: Lag en funksjon som trigges når vi skriver på tastaturen og basert på hva vi skriver / posisjonen vi er på gjør nødvendige oppdateringer av grensesnittet
// TODO: Lag en funksjon som kan brukes til å oppdatere grensesnittet

//Getting HTML elements by #ID
let currentWord = document.getElementById("word");
let letterOutput = document.getElementById("letter");
let points = document.getElementById("correct");
let mistakes = document.getElementById("wrongs");
let wordCount = document.getElementById("remaining");
let result = document.getElementById("result");

//(Global variables because its easier for a program this size)
//Variables for points and mistakes
let correctCounter = 0;
let mistakesCounter = 0;

//Printing the points and mistakes in HTML
points.innerHTML = "Points: " + correctCounter;
mistakes.innerHTML = "Mistakes: " + mistakesCounter;

//Count for how many letters thats been typed
let letterCounter = 0;

//Set this to true when game is finished
let finishedGame = false; 



//List of words
let wordList = ["cat", "dog", "desktop", "mineral", "lieutenant", "profile", "account", "through", "tough", "space", "number", "written"];

//Selects a random from the wordList
const selectRandomWord = () => {
    //Hide start button
    document.querySelectorAll("button")[0].setAttribute("hidden", "true");

    //Select a random word from the wordList
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];

    //Find the index of the selected word and remove it from the wordList
    let wordIndex = wordList.indexOf(randomWord);
    wordList.splice(wordIndex, 1);

    //Printing how many words is left in HTML
    wordCount.innerHTML = "Remaining words: " + wordList.length;
        
    //Printing the random word
    currentWord.innerHTML = randomWord;
    }
    
    

//Eventlistener for Keyup (User input)
const addKeypressListener = () => {
    letterOutput.innerHTML = " . . . ";
    let eventListener = document.addEventListener("keyup", function(event){
        //Sends the event key to correctLetter function (checks if it is a match or not)
        if(finishedGame == true) return;
        correctLetter(event.key);
    }, true);
}

//Empty array for user inputs (ui)
let tempword = [];

//function to check if ui matches the current word
const correctLetter = (currentKey) => {
    //Splits the currentword into array
    let word = currentWord.innerHTML.split(/(?!$)/u)

    /*
    letterOutput.innerHTML = tempword.join("") = prints current letter in HTML
    If ui = backspace then remove a letter from tempword and lower the lettercounter
    If ui matches the position of the current letter in the word then add letter to tempword, increase lettercounter and calls the checkWordLength function
    Else call the wrongLetter function
    */
    if(currentKey==="Backspace") {
        tempword.splice(-1);
        letterOutput.innerHTML = tempword.join("")
        if(!letterCounter == 0) {
            letterCounter--
            }
    } else {
        if(currentKey === word[letterCounter]) {
            tempword.push(currentKey);
            letterOutput.innerHTML = tempword.join("");
            
            console.log(word)
            letterCounter++;
            checkWordLength(word)
        }  
        else {
            tempword.push(currentKey);
            wrongLetter();
            letterOutput.innerHTML = tempword.join("");
        } 
    }
}

//Function to increase mistakeCounter and letterCounter + update the mistakes HTML
const wrongLetter = () => {
    letterCounter++;
    mistakesCounter++;
    mistakes.innerHTML = "Mistakes: " + mistakesCounter;
}

//Function that checks if the words match in length and letters, resets the lettercounter if and calls correctAnswer() function if true
const checkWordLength = (currentWord) => {
    console.log(tempword);
    if (letterCounter == currentWord.length && matchArrays(tempword, currentWord) == true) {
        console.log("hei");
        letterCounter = 0;
        correctAnswer();
    }
}

//Compares arrays that gets sent as parameters, returns a boolean 
const matchArrays = (array1, array2) => {
    if(array1.length !== array2.length) return false;
    if(JSON.stringify(array1) === JSON.stringify(array2)) return true;
    return false;
}

//Checks if game is finished, if true then increment points, empty tempword array and call finishGame function
//If not then empty tempword, increment point and select a new word. 
const correctAnswer = () => {
    if(wordList.length === 0) {
        tempword = [];
        correctCounter++
        points.innerHTML = "Points: " + correctCounter;
        finishGame();
    } else {
        letterOutput.innerHTML = "";
        tempword = [];
        correctCounter++
        points.innerHTML = "Points: " + correctCounter;

        letterOutput.innerHTML = " . . . ";
        selectRandomWord();
    }
}


const finishGame = () => {
    finishedGame = true;
    //Hides main tag in HTML
    document.querySelectorAll("main")[0].style = "display: none;";
    document.getElementById("result").style = "visibility: visible;";

       //Prints information in HTML
    document.getElementById("points").innerHTML = "Points: " + correctCounter
    document.getElementById("mistakes").innerHTML = "Mistakes: " + mistakesCounter;
    document.getElementById("wpm").innerHTML = "Words per minute: " + Math.floor((correctCounter) / (seconds / 60))
    document.getElementById("info").innerHTML = "Time spent: " + seconds + " Seconds";

    //Hides letter ouput and time display
    letterOutput.style = "display: none";
    timeDisplay.style = "display: none";
}

//https://stackoverflow.com/questions/37187504/javascript-second-counter <-- Reference
//timer to count seconds
let seconds = 0;
let timeDisplay = document.getElementById('seconds');

function timer() {
    seconds += 1;
    timeDisplay.innerText = "Time: " + seconds + "s";
}

//Eventlistener for start button, adds keypresslistener, starts the timer and selects a random word
document.querySelectorAll("button")[0].addEventListener('click', function(){
    addKeypressListener()
    timer();
    selectRandomWord();
    let cancel = setInterval(timer, 1000);
});

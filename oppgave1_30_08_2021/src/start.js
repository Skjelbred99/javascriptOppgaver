
// Statisk tekst som brukes til å søke i
const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord = (sentence) => {
    //empty array for words
    let wordArray = [];

    //remove punctuation from sentence
    let newString = sentence.replace(/[^\w\s]|_/g, "");

    //adds the different words to an array by splitting the sentence up with " "
    wordArray = newString.split(" ");

    //temporarily sets the biggest word to the first word in the array
    let longestWord = wordArray[0]; 

    //iterates through array to compare word length
    wordArray.forEach(word => {
        //if current word is bigger than current longest word
        if(word.length > longestWord.length) {
            //set longest word to current word
            longestWord = word;
        } 
    });
    //return longest word
    return longestWord;

};

console.log(longestWord(text));
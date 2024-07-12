function analyzeSentence(sentence) {
   
    sentence = sentence.toLowerCase();

   
    let length = sentence.length; 
    let wordCount = 0; 
    let vowelCount = 0; 

    
    for (let char of sentence) {
       
        if ('aeiou'.includes(char)) {
            vowelCount++;
        }

        if (char === ' ') {
            wordCount++;
        }
    }

   
    wordCount++;

    // Output the results
    console.log(`Length of the sentence: ${length}`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
}

// The sentence 
let inputSentence = "Once you see it you could make it happen.";
analyzeSentence(inputSentence);

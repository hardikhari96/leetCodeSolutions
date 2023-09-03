var lengthOfLongestSubstring = function(s) {
    let longWord ="";
    let currentWord ="";
    // checking all string
    for(let i = 0;i<s.length;i++){
        // checking current word
        for(j = 0;j < currentWord.length ; j++){
            // shifting if match
            if(currentWord[j] == s[i]) currentWord = currentWord.slice(j+1);
        }
         currentWord += s[i];
        if(longWord.length < currentWord.length) longWord = currentWord;
    }
    console.log({currentWord,longWord});
    return longWord;
};

console.log(lengthOfLongestSubstring("dvdf"));
// This function takes a string as input and prints each character on a new line.
function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("hello");

// This function takes an array of words and a match word as input, and returns the count of how many times the match word appears in the array.
function getMatchedWordCount(sentence, match) {
  let count = 0;
  
  for (const word of sentence) {
    if (word === match) {
      count++;
    }
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }
  
  return count;
}

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);

console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"));
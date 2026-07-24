function isPalindrome(word) {
  const lower = word.toLowerCase();
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}

function findPalindromeBreaks(words) {
  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  const phraseIndices = {};

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    if (!phraseIndices[phrase]) {
      phraseIndices[phrase] = [];
    }
    phraseIndices[phrase].push(i);
  }

  const result = [];
  for (const phrase in phraseIndices) {
    if (phraseIndices[phrase].length > 1) {
      result.push(...phraseIndices[phrase]);
    }
  }

  return result.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  const results = [];
  for (const words of texts) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    });
  }
  return results;
}
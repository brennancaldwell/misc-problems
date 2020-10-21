/*
Grokking: Problem Challenge 4: Words Concatenation

Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.
*/

let find_word_concatenation = function(str, words) {
  let resultIndices = [], track = {}, wordLength = words[0].length, wordCount = words.length;

  words.forEach((word) => {
    track[word] === undefined
    ? track[word] = 1
    : track[word]++
  });


  for (let i = 0; i < (str.length - wordCount * wordLength + 1); i++) {
    let seen = {};
    for (let j = 1; j <= wordCount; j++) {
      let wordIndex = i + (j - 1) * wordLength;
      let word = str.slice(wordIndex, wordIndex + wordLength);

      seen[word] === undefined
      ? seen[word] = 1
      : seen[word]++;

      if (seen[word] > (track[word] || 0)) {
        break;
      }

      if (j === wordCount) {
        resultIndices.push(i);
      }

    }
  }

  return resultIndices;
};

/*
A sly way of using the slidingWindow technique: one loop for starting index, instantiating
a new object every time which will track seen words. We then have a nested loop that refers
to word count. Incrementing word count by 1 but slicing as a function of current wordCount
 and wordLength, we track words as seen. If we have seen too many repeats -- or if that word
 does not exist in our tracker (check the OR operator on line 27), we break, and our next
 iteration will create a whole new seen object. If j is the total word count -- i.e., if we've
 seen all the words and haven't gone over our tracker's numbers -- we can push index i into
 the resultIndices array.
*/
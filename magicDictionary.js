/*
676. Implement Magic Dictionary: https://leetcode.com/problems/implement-magic-dictionary/

Design a data structure that is initialized with a list of different words.
Provided a string, you should determine if you can change exactly one
character in this string to match any word in the data structure.

Implement the MagicDictionary class:

MagicDictionary() Initializes the object.
void buildDict(String[] dictionary) Sets the data structure with an array
of distinct strings dictionary.
bool search(String searchWord) Returns true if you can change exactly one
character in searchWord to match any string in the data structure,
otherwise returns false.

Used as an opportunity to play with JS Map object.
*/

const MagicDictionary = () => {
  const dict = Object.create(MagicDictionary.prototype);
  dict.storage = new Map();
  return dict;
}

MagicDictionary.prototype.buildDict = (dictionary) => {
  for (let i = 0; i < dictionary.length; i++) {
    if (this.storage.has(dictionary[i].length)) {
      this.storage.get(dictionary[i].length).push(dictionary[i]);
    } else {
      this.storage.set(dictionary[i].length, [dictionary[i]]);
    }
  }
}

MagicDictionary.protoype.search = (searchWord) => {
  if (!this.storage.has(searchWord.length)) { return false; }
  let array = this.storage.get(searchWord.length);
  for (let i = 0; i < array.length; i++) {
    let offLetters = 0;
    for (let j = 0; j < searchWord.length; j++) {
      if (array[i][j] !== searchWord[j]) {
        offLetters++;
        if (offLetters > 1) {
          break;
        }
      }
    }
    if (offLetters === 1) { return true; }
  }
  return false;
}
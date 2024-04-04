// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Solution

const anagram = (str1, str2) => {
  // convert string to an array.
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  // create 2 empty objects that will represent character values in the string.
  let frequency1 = {};
  let frequency2 = {};

  // loop over both array instances of strings seperately and populate object with values.
  for (let val of arr1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }

  // compare values in both obects to see if they are exactly the same and return a true or false value.
  const key1 = Object.keys(frequency1);
  const key2 = Object.keys(frequency2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let key in frequency1) {
    if (!frequency2.hasOwnProperty(key)) {
      return false;
    }
    if (frequency2[key] !== frequency1[key]) {
      return false;
    }
  }
  return true;
};

anagram("texttwisttime", "timetwisttext");

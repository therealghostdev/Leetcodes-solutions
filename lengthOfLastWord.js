// 58. Length of Last Word
// Solved
// Easy
// Topics
// Companies
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const trimmed = s.trim();
  const arr = trimmed.split(" ");
  let lastWord;
  for (let i = 0; i < arr.length; i++) {
    const lastIndex = arr.length - 1;
    const lastIndexVal = arr[lastIndex];
    lastWord = lastIndexVal;
  }
  return lastWord.length;
};

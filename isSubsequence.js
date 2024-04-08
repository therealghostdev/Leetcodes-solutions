// Write a function called isSubsequence which takes in two strings and checks whether the characters in the
// first string form a subsequence of the characters in the second string. In other words,
// the function should check whether the characters in the first string appear somewhere in the second string,
// without their order

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
  let left = 0;
  let count = 0;
  let left2 = 0;
  // loop over string 2
  while (left < str1.length && left2 < str2.length) {
    // check if str1 appears in string2 without it's order changing
    if (str1[left] === str2[left2]) {
      count++;
      left++;
      left2++;
    } else {
      left2++;
    }
  }
  return count === str1.length;
}

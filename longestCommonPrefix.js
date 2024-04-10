// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// This solution is currently unaccepted
const longestCommonPrefix = (arr) => {
  // initialize an object to save frequent values
  let obj = {};
  let left = 0;
  // loop over the array
  for (let i = 0; i < arr.length; i++) {
    // get the string at index
    let val = arr[i];
    left = 0;
    let encounteredChars = {};
    // convert string at index to an array and iterate over it
    while (left < val.length) {
      let freq = val.split("");
      let val2 = freq[left];
      // Check if the character has already been encountered in this string
      if (!encounteredChars[val2]) {
        // save string frequenct values in an object
        obj[val2] = (obj[val2] || 0) + 1;
        encounteredChars[val2] = true;
      }
      left++;
    }
  }

  // access the updated object and look for values with the same length as array
  let str = "";
  let finalStr = "";
  for (let key in obj) {
    if (obj[key] === arr.length) {
      str += key;
    }
  }

  // logic to check if substring follow each other in array index
  if (str !== "") {
    let right = 1;

    // short circuit if string character length of 1 or less
    if (str.length <= 1) {
      finalStr = str;
    }

    // convert string at array index to an array and return strings characters that follow each other
    while (right < str.length) {
      left = 0;
      let arrStr = arr[left].split("");
      let charLeft = arrStr[left];
      let charRight = arrStr[right];

      if (charLeft === str[left] && str[right] === charRight) {
        finalStr = str;
        left++;
        right++;
      }

      if (charLeft === str[left] || charRight === str[right]) {
        if (!finalStr.includes(str[left]) && !finalStr.includes(str[right])) {
          finalStr += charLeft || charRight;
        }
        left++;
        right++;
      } else {
        left++;
        right++;
      }
    }
  }

  // return repeating values at key index
  return finalStr;
};
longestCommonPrefix(["aa", "aa"]);

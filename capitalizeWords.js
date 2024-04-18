// Write a recursive function called capitalizeWords. Given an array of words,
// return a new array containing each word capitalized.

const capitalizeWords = (arr) => {
  const capitalizedValues = [];
  if (arr.length === 0) return [];

  const restOfItems = capitalizeWords(arr.slice(1));
  const firstWord = arr[0].toUpperCase();
  capitalizedValues.push(firstWord);
  return capitalizedValues.concat(restOfItems);
};
capitalizeWords(["i", "am", "learning", "recursion"]);

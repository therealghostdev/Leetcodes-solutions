//Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// initial approach 0(n log n)
const duplicate = (...args) => {
  // sort the array
  args.sort((a, b) => (a > b ? 1 : -1));

  // loop over the array and check if a value is the same and return true
  let left = 0;
  for (let j = 1; j < args.length; j++) {
    if (args[left] === args[j]) {
      return true;
    }
    left++;
  }
  return false;
};

duplicate(1, 2, 3);

//second Approach 0(n)
const duplicate1 = (...args) => {
  if (args.length <= 1) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let val of args) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  for (let val of args) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return true;
    }

    if (obj1[key] > 1 || obj2[key] > 1) {
      return true;
    }
  }
  return false;
};

duplicate("a", "b", "c", "a");

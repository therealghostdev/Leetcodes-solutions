// Write a function called averagePair. Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the average of the pair equals the target average. 
// There may be more than one pair that matches the average target.

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

const averagePair = (arr, target) => {
  // check if array length is 0
  if (arr.length <= 0) return false;
  // loop over the array
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sumVal = (arr[left] + arr[right]) / 2;

    // add 2 elements in the array together and divide by 2 and check if value === target
    if (sumVal === target) return true;
    else if (sumVal < target) left++;
    else right--;
  }
  return false;
};

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

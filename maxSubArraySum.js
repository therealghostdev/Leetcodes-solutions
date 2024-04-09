// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null

const maxSubArraySum = (arr, val) => {
    if (arr.length < val){
        return null;
    }

     let max = -Infinity;
     let tempSum = 0;

    // loop over the maxSubArraySum and initialize the sum of first elements in array === target
    for (let i = 0; i < val; i++) {
        // store value in a variable
        tempSum += arr[i]
    }

    max = tempSum;

    // loop over the array again and check if sum of other elements that's equal to target is > initial variable
    for(let i = val; i < arr.length; i++){
        tempSum = (tempSum - arr[i - val]) + arr[i];
        max = Math.max(tempSum, max)
    }

    // return the maximum sum of elements in the array
    return max;
}
maxSubArraySum([2,3], 3)
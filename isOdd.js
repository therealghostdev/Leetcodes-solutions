// Write a recursive function called someRecursive which accepts an array. 
// The function returns true if a single value in the array returns true. Otherwise it returns false.

const someRecursive = (arr) => {
    if(arr.length <= 0) return false;
    
    if(arr[0] % 2 !== 0) {
       return true;
    }
    return someRecursive(arr.slice(1));
}
someRecursive([1,2,3,4])
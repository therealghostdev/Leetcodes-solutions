// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

const frequency = (num1, num2) =>{
    // convert valid numbers to array
    const arr1 = num1.toString().split("")
    const arr2 = num2.toString().split("")
    
    // if values length not the same return false
    if(arr1.length !== arr2.length) return false;

    // create 2 different objects representing num 1&2 respectively
    let obj1 = {};
    let obj2 = {};
    
    // update objects with values
    for(let val of arr1){
        obj1[val] = (obj1[val] || 0) + 1;
    }

    for (let val of arr2){
        obj2[val] = (obj2[val] || 0) + 1;
    }
    
    // loop over object and check if objects values in both objects are the same then return a final boolean value
    for(let key in obj1){
       if(!obj2.hasOwnProperty(key)){
           return false;
       }

        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

frequency(22,222)
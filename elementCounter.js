// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)


// Regular approach complexity 0(n**2)
const counterRegular = (arr) =>{
    if(arr.length === 0){
        return 0
    }

    let left = 0;
    const mod = []
    
    // loop over the array
    while(left < arr.length){
        if(left === 0 && arr[left] !== 0){
            mod.push(arr[left])
        }
        left++
        
        // add elements tht doesn't appear more than once
        
        if(!mod.includes(arr[left])){
            mod.push(arr[left])
        }
    }
    mod.pop()
    console.log(mod)
    return mod.length
} 

counterRegular([1,2,3,4,4,4,7,7,12,12,13])


// optimized approach complexity 0(n)
const counterOptimised = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let left = 0;
  const mod = new Set();

  // loop over the array
  while (left < arr.length) {
    if (left === 0) {
      mod.add(arr[left]);
    }
    left++;

    // add elements that doesn't appear more than once
    if (!mod.has(arr[left])) {
      mod.add(arr[left]);
    }
  }
  mod.delete(undefined);
  console.log(mod);
  return mod.size;
};

counterOptimised([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);

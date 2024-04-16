// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

const flatten = (arr) => {
    let result = []
    if(arr.length === 0) return []
    
    if (Array.isArray(arr[0])) {
        result = result.concat(flatten(arr[0]))
    }else {
        result.push(arr[0])
    }
    
    return result.concat(flatten(arr.slice(1)))
}
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
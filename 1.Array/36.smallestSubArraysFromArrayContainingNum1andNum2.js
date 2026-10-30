const arr = [1, 2, 3, 4, 2, 3, 1, 2]
const num1 = 2
const num2 = 3
const result = []

for (let start = 0; start < arr.length; start++) {

    for (let end = start; end < arr.length; end++) {

        const subArray = arr.slice(start, end + 1)

        if (subArray.includes(num1) && subArray.includes(num2)) {
            result.push(subArray)
            break
        }
    }
}
console.log(result)
console.log(result.length)
console.log("===============")

// const result1=[]
// for (let start = 0; start < arr.length; start++) {
//     for (let end = start + 1; end <= arr.length; end++) {
//         const subArray = arr.slice(start, end)

//         if (subArray.includes(num1) && subArray.includes(num2)) {
//             result1.push(subArray)
//         }
//     }
// }

// console.log(result1)
// console.log(result1.length)

function getSubarraysContainingNums(arr, num1, num2) {
    const result = [];
    let start = 0;
    let end = 0;
    let num1Count = 0;
    let num2Count = 0;
  
    while (end < arr.length) {
      // Expand the window by including arr[end]
      if (arr[end] === num1) num1Count++;
      if (arr[end] === num2) num2Count++;
      
      // While both num1 and num2 are in the window, add valid subarrays
      while (num1Count > 0 && num2Count > 0) {
        // Add all subarrays starting from 'start' to 'end'
        result.push(arr.slice(start, end + 1));
        
        // Shrink the window from the left
        if (arr[start] === num1) num1Count--;
        if (arr[start] === num2) num2Count--;
        start++;
      }
      
      // Move the end pointer to expand the window
      end++;
    }
  
    return result;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 2, 3, 1, 2];
  const num11 = 2;
  const num21 = 3;
  
  const subarrays1 = getSubarraysContainingNums(array1, num11, num21);
  console.log(subarrays1);
  console.log(subarrays1.length);
  
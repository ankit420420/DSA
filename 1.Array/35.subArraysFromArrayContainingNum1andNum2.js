const arr = [1, 2, 3, 4, 2, 3, 1, 2]
const num1 = 2
const num2 = 3
const result = []

for (let start = 0; start < arr.length; start++) {
  for (let end = start; end < arr.length; end++) {
    const subArray = arr.slice(start, end + 1)

    if (subArray.includes(num1) && subArray.includes(num2)) {
      result.push(subArray)
    }
  }
}
console.log(result)
// console.log(result.length)
console.log("===============")

const result1 = []
for (let start = 0; start < arr.length; start++) {
  for (let end = start + 1; end <= arr.length; end++) {
    const subArray = arr.slice(start, end)

    if (subArray.includes(num1) && subArray.includes(num2)) {
      result1.push(subArray)
    }
  }
}

console.log(result1)
// console.log(result1.length)
// const arr1 = [1, 2, 3, 4, 2, 3, 1, 2]
// const num1 = 2
// const num2 = 3
// const final=[]

// for(let i =0;i<arr1.length;i++)
// {
//     for(let j=i+1;j<=arr1.length;j++)
//     {
//        const arr2= arr1.slice(i,j)
//         if(arr2.includes(num1) && arr2.includes(num2))
//         {
//             final.push(arr2)
//         }
//     }
// }

// console.log(final)
// console.log(final.length)

const num = 9973

//Check from 3 to √n
const prime = num => {
  if (num <= 1) {
    return false
  }
  if (num === 2) {
    return true
  }
  if (num % 2 === 0) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const isPrime1 = prime(num)
if (isPrime1) {
  console.log(`${num} is a prime number`)
} else {
  console.log(`${num} is not a prime number`)
}

/*
Other ways to check for prime in loop
Way 2
for (let i = 3; i*i <= num; i += 2) {
    if (num % i === 0) {
      return false
    }
  }
*/

//Optimized approach (6k±1)
const primeOpt = num => {
  if (num <= 1) {
    return false
  }
  if (num === 2 || num === 3) {
    return true
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false
  }

  for (let i = 5; i * i < num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false
    }
  }
  return true
}

const isPrime2 = primeOpt(num)
if (isPrime2) {
  console.log(`${num} is a prime number`)
} else {
  console.log(`${num} is not a prime number`)
}

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**       | **Complexity** | **Production**                           |
| -------- | ------------------ | -------------- | ---------------------------------------- |                  |
| 1        | 6k ± 1 method      | O(√n)          | More optimized, but slightly less simple |
| 2        | Check from 3 to √n | O(√n)          | Excellent                                |

1. 6k ± 1 method
•	Optimized approach
•	It reduces number of iterations to detect prime number by skipping checking multiples of both 2 and 3
•	Complex to understand logic


2. Check from 3 to √n
•	Excellent
•	It skips checking multiples of 2
•	Slightly more number of iterations 
•	Easier to read and understand logic
*/

/*
Given a sequence of integers, 
return the sum of all the integers that have an even index, 
multiplied by the integer at the last index.

Indices in sequence start from 0.
If the sequence is empty, you should return 0.
*/


// Solution

function evenLast(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i];
  }
  return sum * numbers[numbers.length - 1];
}

// or

function evenLast(numbers) {
  let evenSum = 0;
  if (numbers.length === 0) return 0;
  numbers.filter((val, idx) => {
    if (idx % 2 === 0) evenSum += val;
  })
  return evenSum * numbers[numbers.length - 1];
}
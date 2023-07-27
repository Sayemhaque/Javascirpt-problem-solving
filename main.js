// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseStr (str) {
    return str.split('').reverse('').join('')
}

console.log(reverseStr("hello world"))




// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumber (arr) {
    let sum = 0;
    for (const num of arr) {
        if(num > 0){
          sum += num
        }
    }

    return sum;
}

console.log(sumOfPositiveNumber([1,-3,4]))


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function findMostFrequentElement(arr) {

    
    const countMap = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      countMap[element] = (countMap[element] || 0) + 1;
    }
  
    let mostFrequentElement;
    let maxCount = 0;
  
    for (const element in countMap) {
      if (countMap[element] > maxCount) {
        maxCount = countMap[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }

console.log(findMostFrequentElement([1,2,3,4,5,4,4]))

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    // If no pair is found, return an empty array
    return [];
  }
  

  const arr = [1, 3, 6, 8, 11, 15];
  const target = 9;
  console.log(findTwoNumbersWithSum(arr, target))

  
// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 'Invalid operator';
    }
  }

console.log(calculator(5, 2, '+')); 
console.log(calculator(5, 2, '-')); 
console.log(calculator(5, 2, '*')); 
console.log(calculator(5, 2, '/'));
console.log(calculator(5, 2, '%'));

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-=_+[]{}|;:,.<>?';
  
    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  }
  
  console.log(generateRandomPassword(14))

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
    const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let integerValue = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentSymbolValue = romanMap[romanNumeral[i]];
      const nextSymbolValue = romanMap[romanNumeral[i + 1]];
  
      if (nextSymbolValue > currentSymbolValue) {
        integerValue += nextSymbolValue - currentSymbolValue;
        i++;
      } else {
        integerValue += currentSymbolValue;
      }
    }
  
    return integerValue;
  }
  
  console.log(romanToInteger("IX")); 
  console.log(romanToInteger("XXI"));
  
  
// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array must contain at least two elements";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return "No second smallest element found";
    }
  
    return secondSmallest;
  }
console.log(findSecondSmallest([4,5,6]));  

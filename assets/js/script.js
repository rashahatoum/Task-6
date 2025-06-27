//global functions

function manualPush(arr, value) {
  arr[arr.length] = value;
}

function validateString(sentence) {
  if (typeof sentence !== "string") {
    return "Invalid input, please provide string input.";
  } else if (sentence.length === 0) {
    return "Invalid input, please provide a non-empty string.";
  }
  return true;
}

// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.

// Example:
// Input: "javascript"
// Output: "tpircsavaj"

function reverseString(inputString) {
let validationResult = validateString(inputString);
  if (validationResult !== true) {
    return validationResult;
  }
  let reversed = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i];
  }
  return reversed;
}

console.log("Exercise 1: Reverse a String");

let word = "javascript";
console.log("Input :" + word);
console.log("Output :" + reverseString(word));

word = "rashahat";
console.log("Input :" + word);
console.log("Output :" + reverseString(word));

word = "";
console.log("Input :" + word);
console.log("Output :" + reverseString(word));

word = 12345;
console.log("Input :" + word);
console.log("Output :" + reverseString(word));

console.log("");

// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (reads the same forwards and backward). It should return true if it is a palindrome and false if it is not.

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function isPalindrome(inputString) {
let validationResult = validateString(inputString);
  if (validationResult !== true) {
    return validationResult;
  }
  inputString = inputString.toLowerCase();
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  return reversedString === inputString;
}

console.log("Exercise 2: Palindrome Check");
let wordToTest = "Madam";
console.log("Input :" + wordToTest);
console.log("Output :" + isPalindrome(wordToTest));

wordToTest = "hello";
console.log("Input :" + wordToTest);
console.log("Output :" + isPalindrome(wordToTest));

wordToTest = "";
console.log("Input :" + wordToTest);
console.log("Output :" + isPalindrome(wordToTest));

wordToTest = 12321;
console.log("Input :" + wordToTest);
console.log("Output :" + isPalindrome(wordToTest));

console.log("");

// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in it.

// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9

function findMaxNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid input, please provide a non-empty array.";
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("Exercise 3: Find the Maximum Number in an Array");

let arr = [1, 5, 3, 9, 2];
console.log("Input :" + arr);
console.log("Output :" + findMaxNumber(arr));

arr = [100, 52, 32, 99, 21];
console.log("Input :" + arr);
console.log("Output :" + findMaxNumber(arr));

console.log("");

// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number. (The factorial of 5 is 5 * 4 * 3 * 2 * 1).

// Example:
// Input: 5
// Output: 120

function factorial(num) {
  if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
    return "Invalid input, please provide a non-negative integer.";
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log("Exercise 4: Factorial Calculation");

let inputNum = 5;
console.log("Input :" + inputNum);
console.log("Output :" + factorial(inputNum));

inputNum = 6;
console.log("Input :" + inputNum);
console.log("Output :" + factorial(inputNum));

console.log("");

// 5. Prime Number Check
// Problem: Write a function that takes an integer num and checks if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function should return true if the number is prime and false otherwise.

// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)

function isPrime(num) {
  if (typeof num !== "number" || !Number.isInteger(num) || num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("Exercise 5: Prime Number Check");

let testNum = 7;
console.log("Input :" + testNum);
console.log("Output :" + isPrime(testNum));

testNum = 10;
console.log("Input :" + testNum);
console.log("Output :" + isPrime(testNum));

console.log("");

// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array containing only the unique elements (no duplicates).

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function removeDuplicatesArray(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      manualPush(uniqueArray, array[i]);
    }
  }
  return uniqueArray;
}

console.log("Exercise 6: Remove Duplicates from an Array");

let testArray = [1, 2, 2, 3, 4, 4, 5];
console.log("Input :" + testArray);
console.log("Output :" + removeDuplicatesArray(testArray));

testArray = [30, 100, 50, 60, 60, 50, 100, 99, 70, 60, 25, 30];
console.log("Input :" + testArray);
console.log("Output :" + removeDuplicatesArray(testArray));

console.log("");

// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100. Write a function to find the missing number.

// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55.
// Output: 55

function findMissingNumber(arr, start, end) {
  for (let i = start; i <= end; i++) {
    let exists = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      return i;
    }
  }
  return "No missing number";
}

let numbersArr = [];
let start = 1;
let end = 100;

for (let i = start; i <= end; i++) {
  if (i !== 55) {
    manualPush(numbersArr, i);
  }
}

console.log("Exercise 7: Find the Missing Number in a Sequence");

console.log("Input :" + numbersArr);

console.log("Output :" + findMissingNumber(numbersArr, start, end));

numbersArr = [];
start = 50;
end = 100;

for (let i = start; i <= end; i++) {
  if (i !== 50) {
    manualPush(numbersArr, i);
  }
}

console.log("Input :" + numbersArr);

console.log("Output :" + findMissingNumber(numbersArr, start, end));

console.log("");

// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized.

// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"

function capitalizeFirstLetters(sentence) {
let validationResult = validateString(sentence);
  if (validationResult !== true) {
    return validationResult;
  }
  let capitalizedSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    let currentChar = sentence[i];
    if (i === 0) {
      capitalizedSentence += currentChar.toUpperCase();
    } else if (sentence[i - 1] === " ") {
      capitalizedSentence += currentChar.toUpperCase();
    } else {
      capitalizedSentence += currentChar;
    }
  }
  return capitalizedSentence;
}

console.log("Exercise 8: Capitalize the First Letter of Each Word");

let inputSentence = "hello world from javascript";
console.log("Input :" + inputSentence);
console.log("Output :" + capitalizeFirstLetters(inputSentence));

inputSentence = "rasha hatoum is a Software engineer";
console.log("Input :" + inputSentence);
console.log("Output :" + capitalizeFirstLetters(inputSentence));

console.log("");

// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).

// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false

function isAnagram(str1, str2) {
  let s1 = str1.toLowerCase().replace(/\s/g, "");
  let s2 = str2.toLowerCase().replace(/\s/g, "");

  if (s1.length !== s2.length) {
    return false;
  }

  let arr2 = [];
  for (let i = 0; i < s2.length; i++) {
    manualPush(arr2, s2[i]);
  }

  for (let i = 0; i < s1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (s1[i] === arr2[j]) {
        found = true;
        arr2[j] = null;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
}

console.log("Exercise 9: Anagram Check");

let testStr1 = "Listen";
let testStr2 = "silent";

console.log("Input :" + testStr1 + "," + testStr2);
console.log("Output :" + isAnagram(testStr1, testStr2));

testStr1 = "hello";
testStr2 = "world";
console.log("Input :" + testStr1 + "," + testStr2);
console.log("Output :" + isAnagram(testStr1, testStr2));

console.log("");

// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]

function chunkArray(array, size) {
  if (!Array.isArray(array) || typeof size !== "number" || size <= 0) {
    return "Invalid input, please provide a valid array and a positive chunk size.";
  }
  let result = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    manualPush(chunk, array[i]);
    if (chunk.length === size || i === array.length - 1) {
      let newChunk = [];
      for (let j = 0; j < chunk.length; j++) {
        newChunk[j] = chunk[j];
      }
      manualPush(result, newChunk);
      chunk = [];
    }
  }
  return result;
}

console.log("Exercise 10: Chunk an Array");

let inputArray10 = [1, 2, 3, 4, 5, 6, 7];
let chunkSize = 3;

console.log("Input :", inputArray10, "| Size:", chunkSize);
console.log("Output :", chunkArray(inputArray10, chunkSize));
console.log("Output :", JSON.stringify(chunkArray(inputArray10, chunkSize)));

console.log("");

// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.

// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]

function findPairWithSum(array, target) {
  let pair = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        manualPush(pair, array[i]);
        manualPush(pair, array[j]);
        return pair;
      }
    }
  }
  return "No pair found that sums to the target value.";
}

console.log("Exercise 11: Find a Pair of Numbers that Sum to a Target Value");

let numbers = [10, 5, 2, 7, 8, 3];
let targetValue = 10;
console.log("Input :", numbers, "| Target:", targetValue);
console.log("Output :", findPairWithSum(numbers, targetValue));

numbers = [10, 25, 40, 25, 8, 3];
targetValue = 50;
console.log("Input :", numbers, "| Target:", targetValue);
console.log("Output :", findPairWithSum(numbers, targetValue));

console.log("");

// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]

function rotateArray(array, n) {
  if (n < 0) {
    return "Invalid input, please provide a non-negative number.";
  }
  for (let i = 0; i < n; i++) {
    let firstElement = array[0];
    for (let j = 0; j < array.length - 1; j++) {
      array[j] = array[j + 1];
    }
    array[array.length - 1] = firstElement;
  }
  return array;
}

console.log("Exercise 12: Rotate an Array to the Left");

let array12 = [1, 2, 3, 4, 5];
let n12 = 2;
console.log("Input :", array12, "| N:", n12);
console.log("Output :", rotateArray(array12, n12));

array12 = [1, 2, 3, 4, 5, 6, 7];
n12 = 4;
console.log("Input :", array12, "| N:", n12);
console.log("Output :", rotateArray(array12, n12));

console.log("");

// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

function intersectionArrays(array1, array2) {
  let intersectionArray = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        manualPush(intersectionArray, array1[i]);
        break;
      }
    }
  }

  return removeDuplicatesArray(intersectionArray);
}

console.log("Exercise 13: Find the Intersection of Two Arrays");

let inputArr1 = [1, 2, 3, 4, 3];
let inputArr2 = [3, 4, 5, 6, 3];
console.log("Input :", inputArr1, "|", inputArr2);
console.log("Output :", intersectionArrays(inputArr1, inputArr2));

console.log("");

// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

function characterFrequency(str) {
let validationResult = validateString(str);
  if (validationResult !== true) {
    return validationResult;
  }
  str = str.toLowerCase()
  let freqMap = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    freqMap[char] = (freqMap[char] || 0) + 1;
  }
  return freqMap;
}

console.log("Exercise 14: Count Character Frequency in a String");

let wordstr14 = "hello";
console.log("Input :" + wordstr14);
console.log("Output :", characterFrequency(wordstr14));

wordstr14 = "RAsha";
console.log("Input :" + wordstr14);
console.log("Output :", characterFrequency(wordstr14));

console.log("");

// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]

function flattenArray(array) {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let nestedFlat = flattenArray(array[i]);
      for (let j = 0; j < nestedFlat.length; j++) {
        manualPush(flat, nestedFlat[j]);
      }
    } else {
      manualPush(flat, array[i]);
    }
  }
  return flat;
}

console.log("Exercise 15: Flatten a Nested Array");

let inputArray15 = [1, [2, 3], [4, [5, 6]]];
console.log("Input :", inputArray15);
console.log("Output :", flattenArray(inputArray15));

console.log("");

// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"

function findLongestWord(sentence) {
  let maxLength = 0;
  let longestWord = "";
  let currentWord = "";

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== " ") {
      currentWord += char;
    } else {
      if (currentWord.length > maxLength) {
        maxLength = currentWord.length;
        longestWord = currentWord;
      }
      currentWord = "";
    }
  }

  if (currentWord.length > maxLength) {
    longestWord = currentWord;
  }
  return longestWord;
}

console.log("Exercise 16: Find the Longest Word in a Sentence");

let sentence16 = "The quick brown fox jumped over the lazy dog";
console.log("Input :" + sentence16);
console.log("Output :" + findLongestWord(sentence16));

sentence16 = "Find the Longest Word in a Sentence";
console.log("Input :" + sentence16);
console.log("Output :" + findLongestWord(sentence16));

console.log("");

// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'

function mostFrequentElement(array) {
  if (array.length === 0) {
  return "Invalid input: please provide an array with at least one element.";
}
  let mostFrequent;
  let maxCount = 0;
  for (let i = 0; i < array.length; i++) {
    let count = 1;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = array[i];
    }
  }
  return mostFrequent;
}

console.log("Exercise 17: Find the Most Frequent Element in an Array");

let array17 = [1, 2, 3, 2, 2, 4, 5, 2];
console.log("Input :", array17);
console.log("Output :", mostFrequentElement(array17));
array17 = ["a", "b", "c", "a", "b", "a"];
console.log("Input :", array17);
console.log("Output :", mostFrequentElement(array17));

console.log("");

// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age. Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.

// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)

function sortByAge(people) {
  let n = people.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (people[j + 1].age < people[j].age) {
        let temp = people[j];
        people[j] = people[j + 1];
        people[j + 1] = temp;
      }
    }
  }

  return people;
}

console.log("Exercise 18: Sort an Array of Objects by a Property");

let peopleArray = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

console.log("Input :", JSON.stringify(peopleArray));
console.log("Output :", JSON.stringify(sortByAge(peopleArray)));

console.log("");

// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.

// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)

function firstNonRepeatingChar(inputStr) {
let validationResult = validateString(inputStr);
  if (validationResult !== true) {
    return validationResult;
  }
  inputStr = inputStr.toLowerCase();
  for (let i = 0; i < inputStr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < inputStr.length; j++) {
      if (i !== j && inputStr[i] === inputStr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return inputStr[i];
    }
  }
  return "No non-repeating character found.";
}

console.log("Exercise 19: Find the First Non-Repeating Character");

let testStr19 = "Swiss";
console.log("Input :" + testStr19);
console.log("Output :" + firstNonRepeatingChar(testStr19));
testStr19 = "aabbcc";
console.log("Input :" + testStr19);
console.log("Output :" + firstNonRepeatingChar(testStr19));

console.log("");

// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]

function symmetricDifference(arr1, arr2) {
  let uniqueElements = [];
  function addUnique(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      let found = false;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        manualPush(uniqueElements, arr1[i]);
      }
    }
  }

  addUnique(arr1, arr2);
  addUnique(arr2, arr1);

  return uniqueElements;
}

console.log("Exercise 20: Symmetric Difference of Two Arrays");

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];

console.log("Input :", array1, "|", array2);
console.log("Output :", symmetricDifference(array1, array2));


array1 = [1, 2, 2, 3];
array2 = [2, 3, 3, 4];
console.log("Input :", array1, "|", array2);
console.log("Output :", symmetricDifference(array1, array2));

array1 = [];
array2 = [1, 2, 3];
console.log("Input :", array1, "|", array2);
console.log("Output :", symmetricDifference(array1, array2));


array1 = [1, 2, 3];
array2 = [1, 2, 3];
console.log("Input :", array1, "|", array2);
console.log("Output :", symmetricDifference(array1, array2));
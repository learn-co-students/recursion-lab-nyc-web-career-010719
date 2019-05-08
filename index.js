// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
}

function isPalindrome(myString) {
  let l = myString.length
  if (l < 2) {
    return true
  } else if (myString[0] === myString[l - 1]) {
    return isPalindrome(myString.substring(1, l - 1))
  } else {
    return false
  }
}

function addUpTo(array,index) {
  return index > 0 ? array[index] + addUpTo(array,--index) : array[index]
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array,element) {
  if (array.length < 1 && (array[0] !== element)) {
    return false
  } else if (array[0] === element) {
    return true
  } else {
    return includesNumber(array.slice(1), element)
  }
}

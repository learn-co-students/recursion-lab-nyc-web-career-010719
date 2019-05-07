// Code your solution here!

// Code your solution here!
function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    printString(string.substring(1));
  };
};

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  };
};

function isPalindrome(string) {
  if (string.length < 2) {
    return true;
  } else {
    if (string[0] === string[string.length - 1]) {
      return isPalindrome(string.substring(1, string.length - 1));
    } else {
      return false;
    };
  };
};

function addUpTo(array, index) {
  if (array.length < 2) {
    return array[0];
  } else {
    array[1] = array[0] + array[1];
    return addUpTo(array.slice(1, index + 1), index);
  };
};

function maxOf(array) {
  if (array.length > 1) {
    return Math.max(array[0], maxOf(array.slice(1)));
  } else {
    return array[0];
  };
};

function includesNumber(array, number) {
  if (array[0] === number) {
    return true;
  };

  if (array.length > 1) {
    return includesNumber(array.slice(1), number);
  } else {
    return false;
  };
};

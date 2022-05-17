/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

// My Answer1
function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/gi, ''); //Removing non-alphanumeric characters.
  const array = str.split("");
  const reverseArray = array.reverse(""); 
  const reverseStr = reverseArray.join("");
  if (str == reverseStr) {
    return true; //or console.log(`The word "${str}" is a Palindrome`);
  } else {
    return false; //or console.log(`The word "${str}" is not a Palindrome`);
  }
}

palindrome("2_A3*3#A2"); //input



/*
## Free Codecamp Exercise
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

---------------------------------------------------------------------------
// Google Answer1
function palindrome(str) {
    const alphanumericOnly = str
        // 1) Lowercase the input
        .toLowerCase()
        // 2) Strip out non-alphanumeric characters
        .match(/[a-z0-9]/g);
        
    // 3) return string === reversedString
    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}

palindrome("eye");

---------------------------------------------------------------------------
// Google Answer2
function palindrome(str) {
  
  str = str.toLowerCase();  //Turn everything to lower case
  // Remove all alphanumeric characters.
  str = str.replace(/[^a-z0-9]/g, '');
  var backward = str.split('');
  backward = backward.reverse().join('').toString();
  
  if(backward === str){
    return true;
  } else {
    return false;
  }
}

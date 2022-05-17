/*
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/;
  str = str.split(""); // Spliting input into array
  for (var x in str) { 

    // Boolean
    if (regEx.test(str[x])) {
      // A more general approach
      // possible because of modular arithmetic
      // and cyclic nature of rot13 transform
       rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  
  return str;
}

let cipher = rot13("SERR PBQR PNZC");
console.log(cipher); // Output: FREE CODE CAMP

// Sol 2
function rot13(str) {
  let charCode = 0;
  let strArr = [];
  strArr = str.split(""); // split the string into array
  for (let i = 0; i < strArr.length; i++) {
    charCode = strArr[i].charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      if (charCode > 77) {
        charCode = charCode - 13;
      }
      else {
        charCode = charCode + 13;
      }

      strArr.splice(i,1,String.fromCharCode(charCode));
    }
  }
  return strArr.join('');
}

rot13("SERR PBQR PNZC");

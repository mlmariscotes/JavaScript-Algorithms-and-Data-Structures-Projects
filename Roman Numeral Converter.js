/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  const roman = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
  let str = '';

  // Giving i the Roman Numeral in the roman array 
  for (let i of Object.keys(roman)) {

    // Input Number divided by the Roman Numeral value in the roman array
    // Rounding down to num value
    let q = Math.floor(num / roman[i]);
    
    num -= q * roman[i];

    // Make i copy relative to the value of q
    str += i.repeat(q);   
  }

  return str;
}

let romanNumeral = convertToRoman(1994); // Input Number
console.log(romanNumeral); // Output: MCMXCIV

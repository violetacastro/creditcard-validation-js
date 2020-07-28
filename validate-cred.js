// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
 
const validateCred = (arrayToValidate) => {
  // creates a copy of the array and reverse it
  let cardNumberReverse = arrayToValidate.slice().reverse();
  // sum all the digits (traker variable)
  const sumOfDigits = 0;
  // iterate in the array using (i)ndex
  for (let i = 0; i < cardNumberReverse.length; i++) {
    // 1. get the digit
    let digit = cardNumberReverse[i];
    // 2. find every other index number(odd)
    let iModTwo = i % 2;
    let oddIndex = iModTwo === 1;
    // 3. double digit if odd is true
    if (oddIndex) {
      digit = digit * 2;
      if (digit > 9) {
        digit -= 9;
      }
    } 
    // update sum.
    sumOfDigits += digit;
  }
  // if modulo 10 is 0 return valid.
  let modulo10 = sumOfDigits % 10 === 0;
  if (modulo10) {
    return true;
  } else {
    return false;
  } 
}

// find invalid cards in array with all cards.
const findInvalidCards = (creditCard) => {
  // 1. array tracks the invalidcards
  const invalidCards = [];
  // 2. loop inside the nested array
  for (let i = 0; i < creditCard.length; i++) {
    // get every array inside the nested array
    let card = creditCard[i];
    // call validation function in every array
    let validation = validateCred(card);
    // get just invalid cards.
    if(validation === false) {
      // push the array to the traker variable.
      invalidCards.push(card);
    }
  }
  return invalidCards;
}

const idInvalidCardCompanies = (arrayOfCards) => {
  // array will track companies with invalid numbers
  const arrayOfCompanies = []; 
  // get array of invalid numbers
  let invalidCards = findInvalidCards(arrayOfCards);
  // loop inside array of invalid number
  for (let i = 0; i < invalidCards.length; i++) {
    // get single card.
    let invalidCard = invalidCards[i];
    // get companies with invalid numbers.
    switch (invalidCard[0]) {
      case 3:
        arrayOfCompanies.push('amex')
        break;
      case 4:
        arrayOfCompanies.push('visa')
        break;
      case 5:
        arrayOfCompanies.push('masterCard')
        break;
      case 6:
        arrayOfCompanies.push('discover')
        break;
      default:
        console.log('company not found');
      }
  }
  // array of unique items.
  const uniqueArrayOfCompanies = Array.from(new Set(arrayOfCompanies));
  return uniqueArrayOfCompanies;
}




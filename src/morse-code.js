/** 
 * Write a program that automatically converts english text to morse code and vice versa, 
 * consider only use upper case letters when converting
 * 
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english) 
 * 
 * @returns {string}  - String converted to english or morse code
*/

const MORSE_CODE_DICTIONARY = {
  A: '.-', 
  B: '-...', 
  C: '-.-.', 
  D: '-..', 
  E: '.', 
  F: '..-.', 
  G: '--.', 
  H: '....', 
  I: '..', 
  J: '.---', 
  K: '-.-', 
  L: '.-..', 
  M: '--', 
  N: '-.', 
  O: '---', 
  P: '.--.', 
  Q: '--.-', 
  R: '.-.', 
  S: '...', 
  T: '-', 
  U: '..-', 
  V: '...-', 
  W: '.--', 
  X: '-..-', 
  Y: '-.--', 
  Z: '--..', 
  1: '.----', 
  2: '..---', 
  3: '...--', 
  4: '....-', 
  5: '.....', 
  6: '-....', 
  7: '--...', 
  8: '---..',
  9: '----.',
  0: '-----',
  ' ': '/',
  ',': '--..--',
  '?': '..--..',
  '@': '.--.-.',
  '+': '.-.-.',
  '-': '-....-',
  '/': '-..-.',
};

function morseCode(message, convertTo) { 
  return convertTo === 'english' ? toEnglish(message.split(' ')) : toMorseCode(message.split(''));
}

function toEnglish(message) {
  return message.reduce((acc, curr, index) => {
    const indexKey = curr === '' 
      ? message[index - 1] === '' ? '' : ' '
      : `${Object.keys(MORSE_CODE_DICTIONARY).find((key) => MORSE_CODE_DICTIONARY[key] === curr)}`;
    acc += indexKey;
    
    return acc;
  }, '');
}

function toMorseCode(message) {
  return message.reduce((acc, curr) => {
    acc += curr === ' ' ? '  ' : `${MORSE_CODE_DICTIONARY[curr.toUpperCase()]} `;

    return acc;
  }, '').trimEnd();
}

module.exports = morseCode;

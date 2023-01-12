
const DecToBinSubmit = document.querySelector('.dec-to-bin-submit');
const DecToBinField = document.querySelector('.dec-to-bin-field');
const DecToBinResult = document.querySelector('.dec-to-bin-result');

const BinToDecSubmit = document.querySelector('.bin-to-dec-submit');
const BinToDecField = document.querySelector('.bin-to-dec-field');
const BinToDecResult = document.querySelector('.bin-to-dec-result');

function checkString(str) {
  const regex = new RegExp('^[0-1]+$');
  return str.match(regex) ? true : false;
}

function BinToDecConversion(value) {
  if (!checkString(value)) {
      return "Error, enter a valid input"
    }
  return parseInt(value, 2);
}

function DecToBinConversion(value) {
  return '1';
}

if (DecToBinSubmit != null && DecToBinField != null && DecToBinResult != null) {
  DecToBinSubmit.addEventListener('click', () => {
    let value = DecToBinField.value;
    DecToBinResult.innerHTML = DecToBinConversion(value);
  })
}

if (BinToDecSubmit != null && BinToDecField != null && BinToDecResult != null) {
  BinToDecSubmit.addEventListener('click', () => {
    let value = BinToDecField.value;
      BinToDecResult.innerHTML = BinToDecConversion(value);
  })
}

if (typeof module !== 'undefined') {
  module.exports = { BinToDecConversion };
}

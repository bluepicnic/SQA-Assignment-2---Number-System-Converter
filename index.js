
const DecToBinSubmit = document.querySelector('.dec-to-bin-submit');
const DecToBinField = document.querySelector('.dec-to-bin-field');
const DecToBinResult = document.querySelector('.dec-to-bin-result');

const BinToDecSubmit = document.querySelector('.bin-to-dec-submit');
const BinToDecField = document.querySelector('.bin-to-dec-field');
const BinToDecResult = document.querySelector('.bin-to-dec-result');

function isBinary(str) {
  const regex = new RegExp('^[0-1]+$');
  return  String(str).match(regex) ? true : false;
}

function isDecimal(str) {
  const regex = new RegExp('^[0-9]+$');
  return String(str).match(regex) ? true : false;
}

function stripZeros(str) {
  str = roundInt(str)
  return str.replace(/\D|^0+/g, "")
}

function roundInt(str) {
  let value = parseInt(str)
  value = Math.floor(value)
  return value.toString()
}


function BinToDecConversion(value) {
  if (!isBinary(value))
    return "Error, enter a valid input"
  
  return parseInt(value, 2);
}

function DecToBinConversion(value) {
  if (!isDecimal(value))
    return "Error, enter a valid input"

  let int = parseInt(value);
  return int.toString(2);
}

if (DecToBinSubmit != null && DecToBinField != null && DecToBinResult != null) {
  DecToBinSubmit.addEventListener('click', () => {
    let value = DecToBinField.value;

    let strippedZeros = stripZeros(value);
    DecToBinField.value = strippedZeros;
    
    DecToBinResult.innerHTML = DecToBinConversion(strippedZeros);
  })
}

if (BinToDecSubmit != null && BinToDecField != null && BinToDecResult != null) {
  BinToDecSubmit.addEventListener('click', () => {
    let value = BinToDecField.value;
    BinToDecResult.innerHTML = BinToDecConversion(value);
  })
}

if (typeof module !== 'undefined') {
  module.exports = { 
    BinToDecConversion, 
    DecToBinConversion
  };
}

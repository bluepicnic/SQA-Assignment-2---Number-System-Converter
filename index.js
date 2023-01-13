const DecToBinSubmit = document.querySelector('.dec-to-bin-submit');
const DecToBinField = document.querySelector('.dec-to-bin-field');
const DecToBinResult = document.querySelector('.dec-to-bin-result');

const BinToDecSubmit = document.querySelector('.bin-to-dec-submit');
const BinToDecField = document.querySelector('.bin-to-dec-field');
const BinToDecResult = document.querySelector('.bin-to-dec-result');

// Chekcs the string value is binary using regex and returns bool
function isBinary(str) {
  const regex = new RegExp('^[0-1]+$');
  return  String(str).match(regex) ? true : false;
}

// check for presence of numerical values in the range [0-9] and returns bool
function isDecimal(str) {
  const regex = new RegExp('^[0-9]+$');
  return String(str).match(regex) ? true : false;
}

// strips leading zeros from integer
function stripZeros(str) {
  str = roundInt(str)
  return str.replace(/\D|^0+/g, "")
}

// rounds decimal to whole number
function roundInt(str) {
  let value = parseInt(str)
  value = Math.floor(value)
  return value.toString()
}

// converts binary to decimal
function BinToDecConversion(value) {
  if (!isBinary(value))
    return "Error, enter a valid input"
  
  return parseInt(value, 2);
}

// converts decimal to binary
function DecToBinConversion(value) {
  if (!isDecimal(value)){
    return "Error, enter a valid input"
  }

  let int = parseInt(value);
  return int.toString(2);
}

// Button event listener to trigger conversion from decimal to binary
if (DecToBinSubmit != null && DecToBinField != null && DecToBinResult != null) {
  DecToBinSubmit.addEventListener('click', () => {
    let value = DecToBinField.value;

    let strippedZeros = stripZeros(value);
    DecToBinField.value = strippedZeros;
    
    DecToBinResult.innerHTML = DecToBinConversion(strippedZeros);
  })
}

// Button event listener to trigger conversion from binary to decimal
if (BinToDecSubmit != null && BinToDecField != null && BinToDecResult != null) {
  BinToDecSubmit.addEventListener('click', () => {
    let value = BinToDecField.value;
    BinToDecResult.innerHTML = BinToDecConversion(value);
  })
}

//function exports
if (typeof module !== 'undefined') {
  module.exports = { 
    BinToDecConversion, 
    DecToBinConversion,
    isBinary,
    isDecimal,
    stripZeros,
    roundInt
  };
}

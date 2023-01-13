const DecimalField = document.querySelector('.decimal-field');
const BinaryField = document.querySelector('.binary-field');

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

// on input change event to trigger conversion
if (DecimalField != null && BinaryField != null) {
  DecimalField.addEventListener('input', () => {
    let value = DecimalField.value;

    let strippedZeros = stripZeros(value);
    DecimalField.value = strippedZeros;
    
    BinaryField.value = DecToBinConversion(strippedZeros);
  })

  BinaryField.addEventListener('input', () => {
      let value = BinaryField.value;
    DecimalField.value = BinToDecConversion(value);
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

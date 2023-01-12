function hello(num) {
    return num;
}

const DecToBinSubmit = document.querySelector('.dec-to-bin-submit');
const DecToBinField = document.querySelector('.dec-to-bin-field');
const DecToBinResult = document.querySelector('.dec-to-bin-result');

const BinToDecSubmit = document.querySelector('.bin-to-dec-submit');
const BinToDecField = document.querySelector('.bin-to-dec-field');
const BinToDecResult = document.querySelector('.bin-to-dec-result');

export function BinToDecConversion(value) {
  return 1;
}


if (DecToBinSubmit != null && DecToBinField != null && DecToBinResult != null) {
  DecToBinSubmit.addEventListener('click', () => {
    let value = DecToBinField.value;
    DecToBinResult.innerHTML = hello(value);
  })
}

if (BinToDecSubmit != null && BinToDecField != null && BinToDecResult != null) {
  BinToDecSubmit.addEventListener('click', () => {
    let value = BinToDecField.value;
    BinToDecResult.innerHTML = hello(value);
  })
}




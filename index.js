const { hello } = require('./script.js');

const DecToBinSubmit = document.querySelector('.dec-to-bin-submit');
const BinToDecSubmit = document.querySelector('.bin-to-dec-submit');

DecToBinSubmit.addEventListener('click', () => {
    hello();
})

BinToDecSubmit.addEventListener('click', () => {
    hello();
})
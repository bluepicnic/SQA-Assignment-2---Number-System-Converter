const { BinToDecConversion, DecToBinConversion, isBinary, isDecimal, stripZeros, roundInt } = require('./index.js')

describe("Smoke test", () => {
    it('Should be truthy', () => {
        expect(1).toBeTruthy();
    })
});

describe("Binary to Decimal tests", () => {
  it('Should convert to 50', () => {
    expect(BinToDecConversion('110010')).toBe(50);
  }),
  it('Should convert to 15', () => {
    expect(BinToDecConversion('1111')).toBe(15);
  }),
  it('Should convert to 101', () => {
    expect(BinToDecConversion('1100101')).toEqual(101);
  }),
  it('Should convert to 255', () => {
    expect(BinToDecConversion('11111111')).toEqual(255);
  }),
  it('Should convert to 10', () => {
    expect(BinToDecConversion('1010')).toBe(10);
  }),
  it('Should return Error, enter a valid input', () => {
    expect(BinToDecConversion('hello')).toEqual(expect.stringContaining('Error, enter a valid input'))
  }),
    it('Should return Error, enter a valid input', () => {
    expect(BinToDecConversion(3131)).toBe('Error, enter a valid input')
  })
})

describe("Decimal to binary tests ", () => {
  it('Should convert to 110010', () => {
    expect(DecToBinConversion(50)).toBe('110010');
  }),
  it('Should convert to 1111', () => {
    expect(DecToBinConversion(15)).toBe('1111');
  }),
  it('Should convert to 1100101', () => {
    expect(DecToBinConversion(101)).toBe('1100101');
  }),
  it('Should convert to 11111111', () => {
    expect(DecToBinConversion(255)).toBe('11111111');
  }),
  it('Should convert to 1010', () => {
    expect(DecToBinConversion(10)).toBe('1010');
  }),
  it('Should convert to 11001', () => { 
    expect(DecToBinConversion(25.65)).toEqual(expect.stringMatching('Error, enter a valid input'));
  }),
  it('Should convert to 1000101', () => {
    expect(DecToBinConversion(-69)).toMatch('Error, enter a valid input');
  })
});

describe("Number system helper functions", () => {
  it('Should not be recognised as a binary number and return false', () => {
    expect(isBinary("271924")).toBeFalsy();
  }),
  it('Should be recognised as a binary number and return true', () => {
    expect(isBinary("11110000")).toBeTruthy();
  }),
  it('Should be recognised as a decimal number and return true', () => {
    expect(isDecimal("123")).toBeTruthy();
  }),
  it('Should not be recognised as a decimal number and return false', () => {
    expect(isDecimal("jsdjdsajsda")).toBeFalsy();
  }),
  it('Should convert to 110010 removing all the leading zeros', () => {
    expect(stripZeros('00110010')).toBe('110010');
  }),
  it('Should convert to 35 rounding the number for binary conversion ', () => {
    expect(roundInt('35.7')).toBe('35');
  })
});


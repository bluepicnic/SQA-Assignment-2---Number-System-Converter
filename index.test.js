const { hello, BinToDecConversion } = require('./index.js')


describe("Smoke test", () => {
    it('Should be truthy', () => {
        expect(1).toBeTruthy();
    })
});

describe("Binary to Decimal tests", () => {
  it.skip('Should convert to 50', () => {
    expect(BinToDecConversion('110010')).toBe(50);
  }),
  it.skip('Should convert to 15', () => {
    expect(BinToDecConversion('1111')).toBe(15);
  }),
  it.skip('Should convert to 101', () => {
    expect(BinToDecConversion('1100101')).toBe(101);
  }),
  it.skip('Should convert to 255', () => {
    expect(BinToDecConversion('11111111')).toBe(255);
  }),
  it.skip('Should convert to 10', () => {
    expect(BinToDecConversion('1010')).toBe(10);
  })
})

describe("Decimal to binary tests ", () => {
  it.skip('Should convert to 110010', () => {
    expect(DecToBinConversion(50)).toBe('110010');
  }),
  it.skip('Should convert to 1111', () => {
    expect(DecToBinConversion(15)).toBe('1111');
  }),
  it.skip('Should convert to 1100101', () => {
    expect(DecToBinConversion(101)).toBe('1100101');
  }),
  it.skip('Should convert to 11111111', () => {
    expect(BinToDecConversion(255)).toBe('11111111');
  }),
  it.skip('Should convert to 1010', () => {
    expect(BinToDecConversion(10)).toBe('1010');
  })
})


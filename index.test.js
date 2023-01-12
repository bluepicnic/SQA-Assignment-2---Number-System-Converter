const { hello, BinToDecConversion } = require('./index.js')


describe("Smoke test", () => {
    it('Should be truthy', () => {
        expect(1).toBeTruthy();
    })
});

describe("Binary to Decimal ", () => {
  it('Should convert to 50', () => {
    expect(BinToDecConversion('110010')).toBe(50);
  }),
  it('Should convert to 15', () => {
    expect(BinToDecConversion('1111')).toBe(15);
  }),
  it('Should convert to 101', () => {
    expect(BinToDecConversion('1100101')).toBe(101);
  }),
  it('Should convert to 255', () => {
    expect(BinToDecConversion('11111111')).toBe(255);
  }),
  it('Should convert to 10', () => {
    expect(BinToDecConversion('1010')).toBe(10);
  })
})

